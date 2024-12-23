# TechTalker

TechTalker is a CMS-style blog site for developers to share their thoughts, publish articles, and engage with others by commenting on posts. Built following the MVC (Model-View-Controller) architectural pattern, this application uses **Express.js**, **Sequelize**, and **Handlebars.js**.

## Features

- Users can create accounts, log in, and manage sessions.
- Authenticated users can:
  - Create blog posts.
  - Edit or delete their posts.
  - Comment on posts by others.
- All users (authenticated or not) can view posts and comments.
- Posts display titles, contents, authors, and timestamps.
- Comments display the commenter's username and timestamp.

## Table of Contents

- [TechTalker](#techtalker)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Folder Structure](#folder-structure)
  - [Deployed Application](#deployed-application)
  - [License](#license)

## Getting Started

### Prerequisites

To run this project, you'll need:

- Node.js installed
- PostgreSQL database set up

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/techtalker.git
   cd techtalker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   DB_NAME='your_database_name'
   DB_USER='your_database_user'
   DB_PASSWORD='your_database_password'
   DB_HOST='localhost'
   DB_PORT='5432'
   SESSION_SECRET='your_secret'
   ```

4. Initialize the database:

   ```bash
   npm run db:seed
   ```

5. Start the application:

   ```bash
   npm start
   ```

### Usage

- Visit the homepage to view blog posts.
- Sign up or log in to create, edit, delete, and comment on posts.
- Navigate using the dashboard or homepage links.

## Technologies Used

- **Node.js** and **Express.js**: Backend framework.
- **Sequelize**: ORM for database interactions.
- **PostgreSQL**: Relational database.
- **Handlebars.js**: Templating engine for views.
- **bcrypt**: Password hashing.
- **express-session** and **connect-session-sequelize**: Session management.

## Folder Structure

```plaintext
tech_talker/
├── config/
│   ├── connection.js
├── controllers/
│   ├── api/
│   │   ├── blogRoutes.js
│   │   ├── userRoutes.js
│   └── homeRoutes.js
├── models/
│   ├── Blog.js
│   ├── User.js
│   ├── Comment.js
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── login.js
│       ├── logout.js
│       ├── newPost.js
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── homepage.handlebars
│   ├── login.handlebars
│   ├── dashboard.handlebars
│   ├── post.handlebars
├── .env
├── package.json
├── server.js
```

## Deployed Application

The application is deployed at: [Deployed Link](https://your-app-link.render.com)

## License

This project is licensed under the MIT License. See the LICENSE file for details.

