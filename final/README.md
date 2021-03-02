# Final Project

Clone / Download this project into your silo machine. 

## Step 1: MongoDB ##
To start a MongoDB service, create a documents folder in this directory:

`$ mkdir documents`

then run command:

`$ numactl --interleave=all mongod -port 23334 --dbpath documents`

To test if your MongoDB has been instantiated, open another window and run:

`$ mongo silo.cs.indiana.edu:23334`

Enter `exit` to exit mongo shell.

## Step 2: Server ##

In this directory, download dependencies with command:

`$ npm install`

then start server with command:

`$ npm start`

## Step 3: Web App ##

Open http://silo.cs.indiana.edu:23333 to check out the website :)

## References ##

* [AngularJS](https://www.w3schools.com/angular/angular_application.asp)
* [MongoDB](http://silo.cs.indiana.edu:8346/a290-web/fall2016/0929a.phps)
