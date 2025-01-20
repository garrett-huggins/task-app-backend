# Task App - Express API

This is the backend service for the Todo App project.

## Technology Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **Prisma**: ORM for Node.js and TypeScript
- **MySQL**: Relational database management system

## Getting Started

Follow these instructions to set up the project locally.

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/garrett-huggins/task-app-backend.git
cd task-app-backend
```

2. **Install dependencies:**

```sh
npm install
```

3. **Create a `.env` file in the root directory:**

- Copy the contents of the `.env.example` file and paste it into the `.env` file.
- Update the values of the environment variables in the `.env` file.

4. **Migrate the database:**

```sh
npx prisma migrate dev
```

5. **Start the development server:**

```sh
npm run dev
```

# Docs

- [Express](https://expressjs.com/) - Documentation for Express.js.
- [MySQL](https://dev.mysql.com/doc/) - Documentation for MySQL Community Server.
