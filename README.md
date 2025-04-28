📚 School Management System (Backend)
A Node.js + Express.js backend project for managing schools, built with MySQL database connection.

🚀 Tech Stack
Node.js (v22)

Express.js

MySQL2

dotenv

Nodemon

📂 Project Structure
bash
Copy
Edit
school-management/
│
├── config/
│   └── db.js          # Database connection
│
├── controllers/
│   └── schoolController.js # Logic for school operations
│
├── routes/
│   └── schoolRoutes.js     # Routes for schools
│
├── app.js             # Main server file
├── package.json
├── .env               # Environment variables
└── README.md
⚙️ Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone <repository-url>
cd school-management
2. Install dependencies
bash
Copy
Edit
npm install
3. Create .env file
env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_management
4. Run the server
bash
Copy
Edit
npm run dev
Server will start at http://localhost:5000

📖 API Endpoints

Method	Endpoint	Description
POST	/addSchool	Add a new school
GET	/listSchools	List all schools
🌐 Postman Setup
Create a New Environment.

Add a Variable:

Key: baseUrl

Initial Value: http://localhost:5000

Current Value: http://localhost:5000

Use {{baseUrl}} in your requests:

http
Copy
Edit
POST {{baseUrl}}/addSchool
GET  {{baseUrl}}/listSchools
📦 Scripts

Script	Command	Description
Start Dev	npm run dev	Start server with nodemon
Start Prod	npm start	Start server normally
🧠 Author
Developed by Aryan Mehta.
