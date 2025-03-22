# 📝 Full-Stack Blogging Platform

A simple and secure blogging platform built with **NestJS**, **PostgreSQL**, and **React (TypeScript)**. This project enables users to register, log in, and perform CRUD operations on blog posts through a clean and responsive UI.

## 🚀 Tech Stack

### 🔧 Backend
- **Framework:** NestJS
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** class-validator, class-transformer

### 🎨 Frontend
- **Library:** React.js with TypeScript(Vite)
- **State Management:** Redux Toolkit
- **HTTP Client:** Axios
- **Routing:** React Router
- **Styling:** Responsive design with CSS or TailwindCSS

---

## 📦 Features

### ✅ Core Functionality

#### Frontend
- Home page displaying all blog posts
- Detailed post view
- Post creation form with input validation
- Authentication UI (Signup/Login)
- Responsive and mobile-friendly layout

#### Backend
- RESTful API for:
  - Creating, reading, updating, and deleting blog posts
- RESTful API for:
  - Creating, reading, updating, and deleting blog comments  
- User authentication:
  - Register, login (with hashed passwords and JWT issuance)
- Role-based authorization:
  - Only authenticated users can create or delete posts
- Input validation on all API routes

---

## 🌟 Bonus Features (Optional)
- Comment system for blog posts
- Deployment:
  - Frontend on Vercel
  - Backend on Render

---

## 📁 Project Structure

### Backend (`/backend`)

```
src/
│
├── auth/
├── posts/
├── users/
├── main.ts
└── app.module.ts
```

### Frontend (`/frontend`)

```
src/
│
├── components/
├── pages/
├── store/
├── services/
└── App.tsx
```

---

## 🛠️ Getting Started

### 📌 Prerequisites

- Node.js (>= 18)
- PostgreSQL installed and running
- Yarn or npm

---

### 🔙 Backend Setup (NestJS)

```bash
cd backend
npm install
cp .env.example .env
# Update database credentials and JWT secret
npm run typeorm:migration:run
npm run start:dev
```

---

### 🎨 Frontend Setup (React)

```bash
cd frontend
npm install
cp .env.example .env
# Set VITE_API_URL in .env
npm run dev
```

---

## 🔐 Authentication Flow

- **Signup:** Creates a new user
- **Login:** Returns a JWT token
- **Protected Routes:** Only accessible with a valid token

---

## 🚀 Deployment (Optional)

- Frontend: Vercel  
- Backend:  Render

---

## 📚 Best Practices Followed

- Type safety with TypeScript
- Environment-based config
- Password hashing and JWT
- Frontend + backend input validation
- Clean code and modular structure

---

## 📬 Contact

Created by **Eyad Khaled**  
Feel free to reach out via [LinkedIn](www.linkedin.com/in/eyad-khaled99) or [Email](eyadkhaled375@gmail.com)

---
