🚀 ChatX — Real-Time Chat Application (MERN)

A full-stack real-time chat application built using the MERN stack with Socket.IO for realtime communication. Supports secure authentication, one-to-one messaging, typing indicators, presence tracking, and read receipts.

📌 Overview

ChatX demonstrates how to design and implement a modern realtime messaging system with:

Secure JWT-based authentication
REST + WebSocket hybrid architecture
One-to-one conversations
Live messaging with Socket.IO
Presence, typing indicators, and read receipts
Responsive UI (mobile + desktop)

Designed as a portfolio-grade project with realistic backend architecture and realtime event handling.

💼 Resume Description

Built a full-stack MERN real-time chat application featuring JWT authentication, protected routes, one-to-one conversations, live messaging with Socket.IO, typing indicators, read receipts, and online/offline presence. Designed a responsive React frontend and a validated Express + MongoDB backend with secure API access and realtime event synchronization.

✨ Features
🔐 Authentication
User registration & login
JWT-based auth
Session persistence & logout
💬 Chat System
One-to-one conversations
Duplicate chat prevention
Live messaging (Socket.IO)
⚡ Realtime Features
Typing indicators
Online/offline presence
Last-seen tracking
Read receipts
🎨 UI/UX
Responsive layout (mobile + desktop)
Conversation sidebar with previews
Loading, empty, retry states
Inline validation & error feedback
🧱 Tech Stack
Frontend
React (Vite)
Tailwind CSS
React Router
Axios
Socket.IO Client
React Context API
Backend
Node.js
Express.js
MongoDB + Mongoose
Socket.IO
JWT (Authentication)
bcryptjs
CORS
🏗️ Architecture

ChatX follows a dual-layer architecture:

🔹 REST Layer
Authentication
Conversations & messages
User search
🔹 Realtime Layer (Socket.IO)
Messaging events
Typing indicators
Presence updates
Read receipts
🔄 Data Flow
HTTP → Auth, fetch data, send messages
WebSocket → Realtime updates
JWT → Used in both REST and Socket handshake
MongoDB → Stores users, conversations, messages
📂 Project Structure
ChatX/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── .env.example
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── sockets/
│   │   ├── utils/
│   │   └── validators/
│   ├── .env.example
│   └── package.json
│
└── README.md
⚙️ Environment Variables
🖥️ Server (server/.env)
MONGODB_URI=mongodb://localhost:27017/chatx
JWT_SECRET=your_super_secret_key
JWT_EXPIRE=7d
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

Optional:

FRONTEND_URLS=http://localhost:5173,http://localhost:4173
🌐 Client (client/.env.local)
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
🛠️ Setup & Installation
1️⃣ Clone Repository
git clone <your-repo-url>
cd ChatX
2️⃣ Install Backend
cd server
npm install
3️⃣ Configure Backend
Copy .env.example → .env
Add MongoDB URI & JWT secret
4️⃣ Install Frontend
cd ../client
npm install
5️⃣ Configure Frontend
Copy .env.example → .env.local
▶️ Run Locally
Start Backend
cd server
npm run dev

➡️ Runs on: http://localhost:5000

Start Frontend
cd client
npm run dev

➡️ Runs on: http://localhost:5173

Build Frontend
npm run build
🔌 API Endpoints
Auth
POST /auth/register
POST /auth/login
GET /auth/me
POST /auth/logout
Users
GET /users
GET /users/search?q=
GET /users/:id
Conversations
GET /conversations
POST /conversations
GET /conversations/:id
Messages
GET /messages/:conversationId
POST /messages
PATCH /messages/:id/read
⚡ Socket Events
Client → Server
join_conversation
send_message
typing_start
typing_stop
read_message
Server → Client
receive_message
typing_started / stopped
user_online / offline
receive_read_receipt
error
📸 Screenshots
docs/screenshots/
├── login.png
├── register.png
├── sidebar.png
├── chat-window.png
└── mobile.png
🚧 Future Improvements
Group chat support
File uploads & attachments
Message reactions
Offline queue handling
Infinite scroll
Rate limiting
Docker setup
E2E testing
🌟 Why This Project Stands Out
Combines REST + WebSocket architecture
Real-world scalable structure
Covers auth, validation, and realtime sync
Clean frontend architecture (not a demo UI)
Product-focused UX (states handling)
