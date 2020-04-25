require("./data-access-layer/dal");
const express = require("express");
const cors = require("cors");
const projectsController = require("./controllers/projects-controller");
const server = express();

server.use(cors());
server.use(express.json());

server.use("/api/projects", projectsController);

server.listen(6000, () => console.log("Listening on http://localhost:6000"));