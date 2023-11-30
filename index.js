const http = require("http");

const app = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.method == "GET") {
    if (req.url == "/") {
      res.write("<h1>Wel come to home page</h1>");
      res.end();
    } else if (req.url == "/about") {
      res.write("<h1>Wel come to about page</h1>");
      res.end();
    } else if (req.url == "/contact") {
      res.write("<h1>Wel come to contact page</h1>");
      res.end();
    } else if (req.url == "/login") {
      res.write("<h1>Wel come to login page</h1>");
      res.end();
    } else if (req.url == "/signup") {
      res.write("<h1>Wel come to signup page</h1>");
      res.end();
    } else {
      res.write("<h1>please enter correct url</h1>");
      res.end();
    }
  }
});
app.listen(5555, () => {
  console.log("Servr started at port 5555");
});
