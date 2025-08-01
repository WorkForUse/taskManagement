# MERN Task Manager

A full-stack **Task Management System** built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This app allows admins to manage users and tasks, track progress, and visualize task insights in a clean, responsive dashboard.


## 📌 Features

### 🔐 Authentication
- JWT-based secure login and registration
- Admin invite token support

### 📋 Task Management
- Create, read, update, delete (CRUD) tasks
- Attach due dates
- Assign users
- Add TODO checklist items
- Upload attachments (file links or uploads)

### 📊 Dashboard
- View total, pending, in-progress, and completed tasks
- Interactive charts with **Recharts**
- Recent task list display
- Priority-based bar chart
- Status-based pie chart

### 🛠 Technologies Used

#### Frontend (React.js)
- React Router DOM
- Axios
- React Icons
- Moment.js
- React Hot Toast
- Recharts (Charts)
- Context API (`createContext`, `useContext`)

#### Backend (Node.js + Express.js)
- Express.js
- JWT (jsonwebtoken)
- Mongoose (MongoDB ODM)
- BcryptJS (password hashing)
- Multer (file uploads)
- CORS (middleware)
- Dotenv (env variables)
- ExcelJS (exporting reports)

---

## ✅ Functionality Checklist

| Feature                              | Status |
|--------------------------------------|--------|
| JWT Authentication                   | ✅     |
| Admin Invite Token                   | ✅     |
| User & Task CRUD                     | ✅     |
| Task Due Date Support                | ✅     |
| Task Assignment                      | ✅     |
| Priority & Checklist System          | ✅     |
| Dashboard with Charts                | ✅     |
| File Upload (Multer/File Links)      | ✅     |
| Pagination                           | ✅     |
| Search / Filter                      | ❌ _(Not added)_ |

---

## 🧪 Test Admin Accounts

You can log in using the following pre-created users:

### ✅ Admin Accounts
| Name       | Email            | Password | Token  |
|------------|------------------|----------|--------|
| AdminKhan  | adk123@vrs.com   | 121      | 54345  |
| Mr deblyo  | mwth@jack.com    | 12345    | 426544 |

### ✅ Regular Users
| Name    | Email            | Password | Token  |
|---------|------------------|----------|--------|
| Mr User | mur2@emin.com    | 12345    | _(None)_ |
| Jasper  | jsp254@gemini.com| 12345    | 25334  |
