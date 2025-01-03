var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var path = q.pathname === "/" ? "./index.html" : "." + q.pathname + ".html";

    fs.readFile(path, function (err, data) {
      if (err) {
        // If the requested file is not found, serve the 404.html page
        fs.readFile("./404.html", function (error404, data404) {
          if (error404) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("404 Not Found"); // Fallback if 404.html is also missing
          }
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data404); // Serve the custom 404.html page
          return res.end();
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data); // Serve the requested page
        return res.end();
      }
    });
  })
  .listen(8080);
