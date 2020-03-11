const express = require("express");

const hubsRouter = require("./hubs/hub-router");

const server = express();

server.use(express.json()); 


server.use("/api/posts", hubsRouter);

server.get("/api/posts", (req, res) => {
  res.send(`<h2>Welcome to Post Comments `);
});


const PORT = 5000;

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});

