# 📝 Notes App

## Description

A full-stack Notes Management application built using the MERN Stack.

Users can register, log in securely using JWT authentication, and manage their personal notes.

---

## Features

- User Authentication
- JWT Login
- Protected Routes
- Create Notes
- Read Notes
- Update Notes
- Delete Notes
- Toast Notifications

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

## Installation

### Backend

```bash
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

```env
PORT=
MONGO_URI=
JWT_SECRET=
```

---

## API Endpoints

### Authentication

POST /api/users/register

POST /api/users/login

### Notes

GET /api/notes

GET /api/notes/:id

POST /api/notes

PUT /api/notes/:id

DELETE /api/notes/:id