
eval = function(s) {
    var r = s.match(/^\((.*)\)$/);

    if (r == null) {    // check if s is simple expression, i.e. has no parens
        if (s.match(/\w+/) == null) {   // wrong expression
            return 'bleah';
        } else {
            return s;
        }
    } else {
        var s1 = r[1];  // get the inside of parens
        r1 = s1.match(/^(define|\+|-|\*|\/)\s(.*)$/);   // extract function name

        if (r1 == null) {   // doesn't match any function type, wrong expression
            return 'bleah';
        }

        var s2 = r1[2]; // get rest of expression

        if (r1[1] == 'define') {    // def
            var r2 = s2.match(/^(\w+)\s(.*)$/);

            if (r2 == null) {   // lambda function
                r2 = s2.match(/^\((.*)\)\s(\(.*\))$/);

                if (r2 == null) {   // body is single value
                    r2 = s2.match(/^\((.*)\)\s(.*)$/);
                }

                var fx = r2[1].match(/^(\w+)\s(.*)$/);

                return `function ${fx[1]}(${fx[2]}) { return ${eval(r2[2])}; }`

            } else {    // variable
                return `let ${r2[1]} = ${eval(r2[2])};`;
            }

        } else {    // procedures
            var proc = r1[1]    // procedure type

            var r3 = s2.match(/^(\(.*\))\s(.*)$/);  // pattern match when first expression is complicated. e.g. (+ (+ 5 3) 1) vs (+ 8 1)

            if (r3 == null) {
                var r3 = s2.match(/^(\w+)\s(.*)/);  // pattern match when first expression is simple expression
            }

            return `(${eval(r3[1])} ${proc} ${eval(r3[2])})`
        }
    }
}

module.exports = eval;

// console.log(eval('3'));
// // 3
// console.log(eval('(+ 2 3)'));
// // (2 + 3)
// console.log(eval('(+ (- 1 2) 3)'));
// // ((1 - 2) + 3)
// console.log(eval('(define a 3)'));
// // let a = 3;
// console.log(eval('(define b (+ a 1))'));
// // let b = (a + 1);
// console.log(eval('(define (f x) 3)'));
// // function f(x) { return 3; }
// console.log(eval('(define (f x y) (+ x y))'));
// // function f(x y) { return (x + y); }
// console.log(eval('(define (f n) (/ (* n (+ n 1)) 2))'));
// // function f(n) { return ((n * (n + 1)) / 2); }
