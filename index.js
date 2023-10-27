const http = require("http");
const fs = require("fs");
const serveStatic = require("serve-static");
const path = require("path");
const port = 8080;
const publicPath = path.join(__dirname, "public");
const serve = serveStatic(publicPath);

const server = http.createServer(function (req, res) {
  serve(req, res, () => {
    if (req.url === "/cars") {
      fs.readFile("./public/cars.html", (err, data) => {
        if(err) {
          console.log('Error =>', err);
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else {
        fs.readFile("./public/index.html", (err, data) => {
          if(err) {
            console.log('Error =>', err)
          }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }
  });
});

server.listen(port);

console.log(`Server is running on http://localhost:${port}`);
