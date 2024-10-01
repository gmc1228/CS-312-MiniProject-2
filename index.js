import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import postsRouter from "./routes/posts.js";
import axios from "axios";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');

app.use('/', postsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
// NEW ADDITION FOR HW 2