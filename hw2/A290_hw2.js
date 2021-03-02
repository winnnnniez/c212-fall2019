// 6. leap year
function isLeap(y) {
    return !(y%4) && (y<=1582 || y%100 != 0 || !(y%400));
}

console.log(isLeap(1582));
console.log(isLeap(1700));
console.log(isLeap(1500));
console.log(isLeap(2000));
console.log(isLeap(2012));
console.log(isLeap(2016));
console.log();

// 7. scalable H
function scalable_h(n) {
    console.log(`H in size ${n}:\n`);
    // first half of H
    for (var i=0; i<=n/2-1; i++) { console.log('*' + ' '.repeat(Math.floor(n/2)*2-1) + '*'); }
    // horizontal line
    console.log('* '.repeat(n/2+1));
    // second half of H
    for (var i=0; i<n/2-1; i++) { console.log('*' + ' '.repeat(Math.floor(n/2)*2-1) + '*'); }
}

scalable_h(17);
console.log();
scalable_h(12);

//10. sum by using reduce function
array1 = [1,2,3,4,5,6,7,8,9,10];
array2 = [1,2,6,8,9];
console.log(array1.reduce((a,b) => a+b))
console.log(array2.reduce((a,b) => a+b))
