const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
const dbHost = process.env.DB_HOST || 'mongodb://localhost:27017/sparta_app';
mongoose.connect(dbHost, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Import models
const Post = require('./models/post');

// Routes
app.get('/', (req, res) => {
  res.redirect('/posts');
});

// Posts routes
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render('posts/index', { posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Error fetching posts');
  }
});

app.post('/posts', async (req, res) => {
  try {
    const { title, body } = req.body;
    const newPost = new Post({ title, body });
    await newPost.save();
    res.redirect('/posts');
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send('Error creating post');
  }
});

// Fibonacci route
app.get('/fibonacci', (req, res) => {
  res.render('fibonacci/index');
});

app.post('/fibonacci', (req, res) => {
  const num = parseInt(req.body.number);
  if (isNaN(num) || num < 0) {
    return res.render('fibonacci/index', { 
      error: 'Please enter a valid non-negative number',
      result: null 
    });
  }
  
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const result = fibonacci(num);
  res.render('fibonacci/index', { result, number: num, error: null });
});

// Hackable route (vulnerable example - for educational purposes)
app.get('/hackable', (req, res) => {
  res.render('hackable/index', { message: null });
});

app.post('/hackable', (req, res) => {
  const userInput = req.body.userInput;
  // WARNING: This is intentionally vulnerable to XSS attacks for educational purposes
  const message = `Hello, ${userInput}!`;
  res.render('hackable/index', { message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
