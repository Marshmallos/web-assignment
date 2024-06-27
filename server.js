import * as http from "http";
import * as fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(404);
        res.end("Error loading index.html");
      } else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/main.js") {
    fs.readFile("./main.js", (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(404);
        res.end("Error loading main.js");
      } else {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000/");
});
