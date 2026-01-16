# Sparta Global Node.js Web Application

A simple Node.js web application built with Express.js, MongoDB, and EJS templating engine.

## Requirements

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)

## Setup

```bash
# Install dependencies
npm install

# Start MongoDB
mongod

# Seed database with sample posts
npm run seed

# Start the application
npm start
```

Visit http://localhost:3000

## Routes

- `/` - Home (redirects to /posts)
- `/posts` - Blog posts
- `/fibonacci` - Fibonacci calculator
- `/hackable` - Security demo

## Project Structure

```
├── app.js                    # Express server
├── package.json             # Dependencies
├── models/post.js           # Post model
├── public/images/           # Logo files
├── seeds/seed.js            # Sample data
├── test/test-server.js      # Tests
└── views/                   # EJS templates
    ├── posts/index.ejs
    ├── fibonacci/index.ejs
    └── hackable/index.ejs
```

## 🚀 Quick Start

### Installation Requirements
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.4 or higher)

### Option 1: Automated Setup
```bash
# Run the verification script first
./verify.sh

# Run the automated setup script
./start.sh
```

### Option 2: Manual Setup
```bash
# Install Node.js and MongoDB first, then:

# Install dependencies
npm install

# Start MongoDB (if not running)
brew services start mongodb-community
# OR manually: mongod

# Seed database with sample posts
npm run seed

# Start the application
npm start
```

### Option 3: Development Mode
```bash
# For development with auto-restart
npm run dev
```

The application will be available at **http://localhost:3000**

## 🌐 Routes

- **`/`** - Home (redirects to /posts)
- **`/posts`** - Blog posts display (matches colleague's structure)
- **`/fibonacci`** - Simple calculator form
- **`/hackable`** - XSS demonstration

## 📝 Template Structure

All templates follow the same simple pattern as your colleague:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
    <style type="text/css">
        /* Simple inline CSS */
    </style>
</head>
<body>
    <div class="blog">
        <img src="/images/logo.png" />
        <h1>Page Title</h1>
        <nav><!-- Navigation links --></nav>
        <hr/>
        <!-- Content -->
    </div>
</body>
</html>
```

## 📁 Project Structure

```
tech517-sparta-app/
├── app.js                  # Main Express server file
├── package.json           # Project dependencies and scripts
├── models/
│   └── post.js           # MongoDB Post model
├── public/
│   ├── css/
│   │   └── style.css     # Application styles
│   └── images/
│       ├── logo.png.placeholder
│       └── spartaGlobalLogo.jpg.placeholder
├── seeds/
│   └── seed.js           # Database seeding script
├── test/
│   └── test-server.js    # Server testing suite
└── views/
    ├── posts/
    │   └── index.ejs     # Blog posts page
    ├── fibonacci/
    │   └── index.ejs     # Fibonacci calculator page
    └── hackable/
        └── index.ejs     # Security demo page
```

## 🛠️ Prerequisites

Before running this application, make sure you have:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.4 or higher)
- npm (comes with Node.js)

## 📦 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd /Users/aminaibrahim/Documents/Sparta/tech517-sparta-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start MongoDB service:**
   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community
   
   # Or start manually
   mongod
   ```

## 🚀 Running the Application

### Development Mode

```bash
# Start the server with automatic restarts
npm run dev
```

### Production Mode

```bash
# Start the server
npm start
```

The application will be available at `http://localhost:3000`

## 🌱 Database Seeding

To populate the database with sample blog posts:

```bash
npm run seed
```

This will:
- Connect to MongoDB
- Clear existing posts
- Insert 6 sample blog posts with various topics
- Display confirmation of seeded data

## 🧪 Testing

Run the test suite to verify all endpoints are working:

```bash
# Make sure the server is running first
npm start

# In a new terminal, run tests
npm test
```

The test suite includes:
- ✅ Home page redirect test
- ✅ Posts page loading test
- ✅ Fibonacci page test
- ✅ Fibonacci calculation test
- ✅ Hackable page test
- ✅ 404 error handling test

## 📖 Usage Guide

### 1. Blog Posts (`/posts`)
- View all blog posts in chronological order
- Create new posts using the form
- Each post displays metadata (author, date, views, likes)
- Posts support tags for categorization

### 2. Fibonacci Calculator (`/fibonacci`)
- Enter a number (0-40 recommended for performance)
- Calculate the nth Fibonacci number
- View the complete sequence up to the entered position
- Educational information about the Fibonacci sequence

### 3. Hackable Demo (`/hackable`)
- **⚠️ Educational XSS Vulnerability Demo**
- Try entering: `<script>alert('XSS!')</script>`
- Learn about web security vulnerabilities
- Compare vulnerable vs. secure code implementations
- Access security learning resources

## 🎨 Sparta Global Branding

The application features professional styling that reflects Sparta Global's corporate identity:

### 🎨 Color Palette
- **Primary Blue**: `#1e3c72` to `#2a5298` (header gradients)
- **Sparta Orange**: `#ff6b35` to `#f7931e` (accent colors, buttons, highlights)
- **Background**: Subtle gradients from `#f5f7fa` to `#c3cfe2`
- **Text**: Professional dark grays `#333`, `#444`

### 🏛️ Logo Design
- Custom CSS-based "SPARTA GLOBAL" logo
- Orange gradient text effects with drop shadows
- Professional typography hierarchy
- Responsive design across all devices

### 📁 Images Directory
- `/public/images/` - Ready for corporate logo files
- Structured for easy logo replacement and branding updates

## 🔧 API Endpoints

All routes run on **port 3000** as specified:

| Method | Endpoint | Description | Features |
|--------|----------|-------------|----------|
| GET | `/` | Home page | Redirects to `/posts` |
| GET | `/posts` | Blog posts page | View all posts, create new posts |
| POST | `/posts` | Create new post | Accepts `title` and `body` fields |
| GET | `/fibonacci` | Calculator page | Interactive Fibonacci calculator |
| POST | `/fibonacci` | Calculate result | Process number input, show sequence |
| GET | `/hackable` | Security demo | Educational XSS vulnerability |
| POST | `/hackable` | Process input | Intentionally vulnerable for learning |

## 🗄️ Database Schema

### Post Model (models/post.js)
```javascript
{
  title: String (required, max 200 chars)
  body: String (required, max 5000 chars) // Main content field
  author: String (default: 'Anonymous')
  tags: [String]
  views: Number (default: 0)
  likes: Number (default: 0)
  createdAt: Date (default: Date.now)
  updatedAt: Date (default: Date.now)
}
```

The Post model includes the required **title** and **body** fields as specified, with additional metadata for a complete blogging experience.

## 🎨 Styling

The application uses:
- Custom CSS with modern, responsive design
- Font Awesome icons for enhanced UX
- Color scheme: Blue (#3498db), Dark blue (#2c3e50), Green (#27ae60)
- Grid layouts for responsive content organization

## 🔒 Security Notes

The `/hackable` route intentionally contains XSS vulnerabilities for educational purposes. In production:

- ❌ **Never use** `<%- %>` for user input
- ✅ **Always use** `<%= %>` for automatic HTML escaping
- ✅ **Implement** input validation and sanitization
- ✅ **Use** CSRF protection
- ✅ **Follow** OWASP security guidelines

## 🛠️ Development

### Adding New Features

1. **Routes**: Add new routes in `app.js`
2. **Models**: Create new models in `models/` directory
3. **Views**: Add EJS templates in `views/` directory
4. **Styles**: Update `public/css/style.css`
5. **Tests**: Add tests in `test/test-server.js`

### Environment Variables

Create a `.env` file for environment-specific configuration:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/sparta_app
NODE_ENV=development
```

## 📚 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [EJS Documentation](https://ejs.co/)
- [OWASP Top 10](https://owasp.org/Top10/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Author

Built with ❤️ by Sparta Global trainees for educational purposes.

---

**Note**: This application is designed for educational purposes and includes intentional security vulnerabilities in the `/hackable` route. Never deploy such code to production environments.
