import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import postsRouter from "./routes/posts.js";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// forgot about middlewares and body-parser BIGGEST STRUGGLE IN THIS PROJECT
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');

app.use('/', postsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
