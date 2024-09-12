import { Router } from 'express';
const router = Router();

let posts = [];

router.get('/', (req, res) => {
  res.render('index', { posts });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
  const { title, author, content } = req.body;
  const newPost = {
    id: Date.now().toString(),
    title,
    author,
    content,
    date: new Date().toLocaleString(),
  };
  posts.push(newPost);
  res.redirect('/');
});

router.get('/edit/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  res.render('edit', { post });
});

router.post('/edit/:id', (req, res) => {
  const { title, author, content } = req.body;
  const post = posts.find(p => p.id === req.params.id);
  post.title = title;
  post.author = author;
  post.content = content;
  post.date = new Date().toLocaleString();
  res.redirect('/');
});

router.post('/delete/:id', (req, res) => {
  posts = posts.filter(p => p.id !== req.params.id);
  res.redirect('/');
});

export default router;
