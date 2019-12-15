var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// app.get('/', function(req, res) {
//     res.send('Hello, World!');
// });

// app.get('/about', function(req, res) {
//     res.send('This is a practice app to learn about express routes.');
//   });

//   app.get('/:input', function(req, res) {
//     res.send("Our parameter is " + req.params.input + ".");
//   });

//   app.get("/greet/:name", function(req, res) {
//     res.send("Hello " + req.params.name + "!");
//   });

//   app.get("/greet/:name/:lastname", function(req, res) {
//     res.send("Hello " + req.params.name + " " + req.params.lastname);
//   });
  
//   app.get("/multiply/:x/:y", function(req, res) {
//     res.send("The answer is: " + (req.params.x * req.params.y));
//   });


//   app.get("/add/*", function(req, res) {
//     var myParams = req.params[0].split("/");
//     var result = myParams.reduce(function(total, num) {
//       return total + parseInt(num)
//     }, 0);
//     res.send("The answer is  " + result);
// //   });

//   app.get("/querystring", function(req, res) {
//     let printout = '';
//     for (let key in req.query) {
//       printout += key + ": " + req.query[key] + "<br />";
//     }
//     res.send("Here's what they sent: <br /><br />" + printout);
//   });

app.get('/', (req, res) =>{
    res.render('index', 
    {name: "Rebecca Evans", age: 46, favorites: ['dark blue', 'teal', 'black']});
})

app.get('/about', (req, res) =>{
    res.render('about.ejs');
})

// app.get('/blog', (req, res) =>{
//     res.sendFile(__dirname+'/views/blog-directory.html');
// })

app.listen(8000);