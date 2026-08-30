# 📌 Pinterest Clone (Backend Learning Project)

A Pinterest-inspired full-stack web application built specifically to master **Backend Development** concepts using **Node.js, Express.js, MongoDB, and EJS**.

---

## 🎯 Learning Objectives & Key Backend Features

This project was built to gain hands-on experience with core backend concepts:

- **🔐 User Authentication & Authorization**:
  - Implemented secure user registration, login, and session persistence using `passport`, `passport-local`, and `passport-local-mongoose`.
  - Created custom `isLoggedIn` middleware for protecting private routes (Profile, Uploads, Feed).
  - Used `connect-flash` to handle error messages gracefully during authentication.

- **📁 File Uploads with Multer**:
  - Configured `multer` for handling multi-part form data.
  - Handled profile picture (DP) updates and pin image uploads with unique filename generation using `uuid`.

- **🗄️ Database Design & Relationships (Mongoose / MongoDB)**:
  - Designed relational MongoDB schemas using Mongoose (`User` schema and `Post` schema).
  - Implemented document references using `ObjectId` and Mongoose `.populate()` to link posts with their respective creators.

- **🎨 Dynamic Server-Side Rendering (EJS)**:
  - Rendered views dynamically using EJS templates.
  - Implemented Pinterest-style masonry grid layouts preserving original image aspect ratios.

---

## 🛠️ Tech Stack

- **Backend / Runtime**: Node.js, Express.js
- **Database**: MongoDB, Mongoose (ODM)
- **Authentication**: Passport.js, Passport-Local, Express Session
- **File Uploads**: Multer, UUID
- **Templating Engine**: EJS (Embedded JavaScript)
- **Styling & UI**: HTML5, Vanilla CSS, Remixicon Icons

---

## 📁 Project Structure

```text
PinterestClone/
├── bin/                 # Server entry script
├── public/
│   ├── images/
│   │   └── uploads/     # Uploaded user DP & pin images
│   └── stylesheets/     # Custom CSS styles (profile.css, feed.css, style.css)
├── routes/
│   ├── index.js         # Main application routes (auth, feed, profile, upload)
│   ├── users.js         # User model schema & MongoDB connection
│   ├── post.js          # Post model schema
│   └── multer.js        # Multer file storage configuration
├── views/
│   ├── index.ejs        # Landing page
│   ├── login.ejs        # Login page
│   ├── register.ejs     # Registration page
│   ├── profile.ejs      # User profile & upload page
│   └── feed.ejs         # Pinterest feed page with masonry grid
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally on `mongodb://127.0.0.1:27017`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rajat2774/Pinterest-Clone.git
   cd Pinterest-Clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start MongoDB**:
   Ensure MongoDB service is running on your system.

4. **Run the server**:
   ```bash
   npm start
   ```
   *Or with Nodemon for development:*
   ```bash
   npx nodemon
   ```

5. **Access the app**:
   Open `http://localhost:3000` in your browser.

---

## 📄 License

This project is open-source and created for educational purposes.
