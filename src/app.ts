import express from 'express';

import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/lwc", express.static(path.join(__dirname, "../lwc")));
server.use("/slds", express.static(path.join(__dirname, "../node_modules/@salesforce-ux/design-system/assets")));

server.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../pages") });
});

server.get("/products", (req, res) => {
  res.sendFile("products.html", { root: path.join(__dirname, "../pages") });
});

server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});