https://medium.com/createdd-notes/starting-with-authentication-a-tutorial-with-node-js-and-mongodb-25d524ca0359

//EXPRESS IS A FRAMEWORK





//NPM
// These are libraries built by the awesome community which will solve most of your generic problems. npm (Node package manager) has packages you can use in your apps to make your development faster and efficient.


//json always has double quotes. It never has single quotes.

// 1st thing: in your terminal type git init

//module: a smaller package of information that will be used in a larger package.




NODE
- easily communicates with a database and allows us to run a JavaScript on a computer / server.
- Helps you read, delete, & update files.
- very fast - runs on the v8 engine.

node is a runtime environment. It allows us to build server applications or computer applications using javascript. javascript was originally built for the web but then node came along and allowed us to build servers.

Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side.


JavaScript now has the capability to do things that other scripting languages like Python can do.

Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low level code which the computer can run without needing to first interpret it.- non-blocking code.


EXPRESS
express is a framework, which is built on top of node. It allows us to create servers faster and more efficiently. It gives us extra power & tools.




NPM
the 'largest ecosystem of open source libraries in the world.'



MONGOD
mongod is the "Mongo Daemon" it's basically the host process for the database. When you start mongod you're basically saying "start the MongoDB process and run it in the background". mongod has several default parameters, such as storing data in /data/db and running on port 27017.

MONGODB
- a web-scale database.
mongo is the command-line shell that connects to a specific instance of mongod. When you run mongo with no parameters it defaults to connecting to the localhost on port 27017. If you run mongo against an invalid machine:port combination then it will fail to connect (and tell you as much).

MONGOOSE
- a schema based solution to model your application data. The schema creates key:value pairs for a set of data types (ex: string, number, boolean)

- creates easy to use object reference for interacting with mongodb.
