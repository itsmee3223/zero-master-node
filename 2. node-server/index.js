const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 1,
    name: "Ramanda",
  },
  {
    id: 2,
    name: "Ajisaka",
  },
  {
    id: 3,
    name: "Asyraf",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/");
  // /friends/2 => ['', 'friends', '2']
  if (req.method === "POST" && items[1] == "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] == "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (items.length !== 3) {
      res.end(JSON.stringify(friends));
    }
    const friendIndex = Number(items[2]);
    res.end(JSON.stringify(friends[friendIndex]));
  } else if (req.method === "GET" && items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>");
    res.write("Hallo dunia!!");
    res.write("</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
