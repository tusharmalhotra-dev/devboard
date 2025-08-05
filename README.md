 # 🧑‍💻 DevBoard – Developer Portfolio CMS (Full Stack)

# DevBoard Project

DevBoard is a full-stack portfolio management application that allows developers to sign up, log in, and manage their project portfolios. It features public-facing profile pages, enabling authenticated users to create, update, and display their work, while the frontend portfolio route remains publicly accessible.

---

## 🚀 Features

### 👤 Authenticated User (Developer)
- **Signup & Login**: Secure JWT-based authentication.
- **Portfolio Management**: Add projects with tech stack, description, GitHub, and live links.
- **Dashboard**: View and manage personal projects.
- **Real-Time Updates**: Redux-powered state management.
- **Logout**: Seamless session termination.

### 🌐 Public Portfolio
- **Accessible Routes**: `/portfolio/:username` for public viewing.
- **Responsive Design**: Clean and mobile-friendly display of developer portfolios.
- **No Authentication Required**: Open access for viewing.

### 🛡️ Common Features
- **Authentication**: JWT-based security.
- **Protected Routes**: Role-based access control using middleware.
- **State Management**: Redux Toolkit for efficient data handling.
- **UI Framework**: Tailwind CSS for responsive design.
- **API Integration**: Axios for streamlined communication.
- **Scalable Architecture**: Modular folder structure for maintainability.

---

## ⚙️ Tech Stack

| **Frontend**               | **Backend**                |
|----------------------------|----------------------------|
| React.js (Vite)            | Node.js + Express          |
| Redux Toolkit              | PostgreSQL + Sequelize ORM |
| React Router DOM           | JWT Authentication         |
| Axios                      | Bcrypt for password hashing|
| Tailwind CSS               | Dotenv for configuration   |

---

## 🧠 Key Learnings

- **Modular Architecture**: Building scalable full-stack applications.
- **Database Integration**: Connecting PostgreSQL with Sequelize and raw SQL joins.
- **State Management**: Using Redux slices for authentication and project handling.
- **Route Protection**: Implementing middleware for frontend security.
- **Interface Design**: Developing public/private interfaces with shared data logic.
- **Version Control**: Organizing projects effectively with GitHub.

---

## 📁 Folder Structure

```
devboard/
├── devboard-backend/         # Node + Express + Sequelize + PostgreSQL
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   └── server.js
├── devboard-frontend/        # React + Redux Toolkit + Vite
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── api/
│   │   └── App.jsx
├── README.md
```

---

## 🖥️ How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/tusharmalhotra-dev/devboard.git
cd devboard
```

### 2. Setup Backend (Node + Express)
```bash
cd devboard-backend
npm install
```

Create a `.env` file with the following:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=hiretrack
JWT_SECRET=your_jwt_secret
```

Start the backend server:
```bash
npm start
```

### 3. Setup Frontend (React)
```bash
cd ../devboard-frontend
npm install
npm run dev
```

Access the application:
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend**: [http://localhost:5000](http://localhost:5000)

✅ Ensure MySQL server is running locally.

---

## 📌 Future Improvements

- Resume uploads with file preview.
- Interview scheduling system.
- Admin dashboard for metrics.
- Deployment on Render + Netlify.
- Enhanced mobile responsiveness and UI library integration.

---

## 💡 Interview Tips

Ask me about:
- Role-based route protection.
- Sequelize model relationships.
- Preventing duplicate job applications.
- Frontend context persistence using localStorage.

---

## 👨‍💻 Author

**Tushar Malhotra**

---

