# ChatX

ChatX is a full-stack MERN real-time chat application built for one-to-one messaging. It combines JWT-based authentication, a responsive React frontend, an Express and MongoDB backend, and Socket.IO for live messaging, typing indicators, presence, read receipts, and last-seen updates.

## Project Overview

This project demonstrates how to build a modern chat product with:

- secure authentication and protected routes
- conversation discovery and one-to-one chat creation
- realtime message delivery with Socket.IO
- typing indicators, online status, and last-seen presence
- read receipts and responsive chat UI patterns
- practical student-project security and validation improvements

It is designed to be clean enough for portfolio use while still being realistic about real-world app structure, API boundaries, and realtime event handling.

## Resume-Friendly Project Description

Built a full-stack MERN real-time chat application featuring JWT authentication, protected routes, one-to-one conversations, live messaging with Socket.IO, typing indicators, read receipts, and online or offline presence. Designed a responsive React frontend and a validated Express plus MongoDB backend with secure API access, participant-based authorization, and realtime event synchronization.

## Features

- User registration, login, session bootstrap, and logout
- JWT-protected REST API and authenticated Socket.IO connections
- One-to-one conversation creation with duplicate-conversation prevention
- Conversation sidebar with latest message preview and activity timestamp
- Responsive chat layout for desktop and mobile
- Live incoming messages
- Typing indicators
- Online, offline, and last-seen presence
- Read receipt updates
- Inline validation and error feedback on auth flows
- Loading, empty, retry, and disconnected-realtime states

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Socket.IO Client
- React Context for auth and socket state

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- Socket.IO
- JSON Web Tokens
- bcryptjs
- CORS

## Architecture Summary

ChatX uses a client-server architecture with a separate REST and realtime layer:

1. The React frontend handles routing, auth state, protected pages, and the chat interface.
2. Axios is used for REST requests such as auth, conversations, users, and messages.
3. Socket.IO is initialized only after authentication and sends the JWT during the socket handshake.
4. The Express backend exposes protected REST endpoints and validates all incoming payloads.
5. MongoDB stores users, conversations, unread metadata, and messages.
6. Socket.IO broadcasts message delivery, typing, read receipts, and presence changes to authorized conversation rooms.

### Request and Realtime Flow

- HTTP is used for registration, login, session restore, conversation fetches, user search, and confirmed message submission.
- WebSockets are used for presence, typing, read receipts, room joins, and incoming realtime updates.
- Both REST and socket event handlers enforce participant checks for conversations and messages.

## Folder Structure

```text
ChatX/
|-- client/
|   |-- src/
|   |   |-- components/        # Reusable UI and chat components
|   |   |-- context/           # Auth and socket providers
|   |   |-- hooks/             # Custom React hooks
|   |   |-- layouts/           # Auth and app layouts
|   |   |-- pages/             # Login, register, and chat pages
|   |   |-- routes/            # Route configuration and guards
|   |   |-- services/          # API, auth, chat, token, socket services
|   |   `-- utils/             # Frontend helpers and normalizers
|   |-- .env.example
|   `-- package.json
|-- server/
|   |-- src/
|   |   |-- config/            # App, database, runtime configuration
|   |   |-- controllers/       # REST endpoint handlers
|   |   |-- middleware/        # Auth and error middleware
|   |   |-- models/            # Mongoose schemas
|   |   |-- routes/            # Express route definitions
|   |   |-- services/          # Presence and backend helpers
|   |   |-- sockets/           # Socket.IO auth and event handlers
|   |   |-- utils/             # Response, JWT, and input utilities
|   |   `-- validators/        # Request payload validation
|   |-- .env.example
|   `-- package.json
`-- README.md
```

## Environment Variables

### Server

Create `server/.env` from `server/.env.example`.

```env
MONGODB_URI=mongodb://localhost:27017/chatx
JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRE=7d
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Optional:

```env
FRONTEND_URLS=http://localhost:5173,http://localhost:4173
```

### Client

Create `client/.env.local` from `client/.env.example`.

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm
- MongoDB running locally or a remote MongoDB connection string

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd ChatX
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Configure backend environment

- Duplicate `server/.env.example` as `server/.env`
- Add your MongoDB URI and JWT secret

### 4. Install frontend dependencies

```bash
cd ../client
npm install
```

### 5. Configure frontend environment

- Duplicate `client/.env.example` as `client/.env.local`
- Point `VITE_API_URL` and `VITE_SOCKET_URL` to your backend

## How To Run Locally

### Start the backend

From the `server` folder:

```bash
npm run dev
```

The API server runs by default on `http://localhost:5000`.

### Start the frontend

From the `client` folder:

```bash
npm run dev
```

The frontend runs by default on `http://localhost:5173`.

### Production frontend build

From the `client` folder:

```bash
npm run build
```

## API Summary

Base URL: `http://localhost:5000/api`

### Auth

- `POST /auth/register`
  - Register a new user
- `POST /auth/login`
  - Authenticate a user and return JWT
- `GET /auth/me`
  - Fetch current authenticated user
- `POST /auth/logout`
  - Logout hook for client session cleanup and last-seen update

### Users

- `GET /users`
  - List users except the current authenticated user
- `GET /users/search?q=<query>`
  - Search users by name or email
- `GET /users/:id`
  - Fetch a user profile summary

### Conversations

- `GET /conversations`
  - Get current user conversations
- `POST /conversations`
  - Create or fetch an existing one-to-one conversation
- `GET /conversations/:id`
  - Fetch conversation details for a participant

### Messages

- `GET /messages/:conversationId?page=1&limit=30`
  - Fetch paginated messages for a conversation
- `POST /messages`
  - Send a message
- `PATCH /messages/:id/read`
  - Mark a message as read

## Socket Events Summary

Socket connections are authenticated with the same JWT used for REST requests.

### Client -> Server

- `join_conversation`
  - Join a conversation room after selection
- `send_message`
  - Send a message payload through Socket.IO
- `typing_start`
  - Notify the room that the user started typing
- `typing_stop`
  - Notify the room that the user stopped typing
- `read_message`
  - Mark a message as read in realtime

### Server -> Client

- `connected`
  - Initial socket connection acknowledgement
- `joined_conversation`
  - Confirms room join and current room users
- `receive_message`
  - New incoming message event
- `receive_read_receipt`
  - Read receipt update
- `typing_started`
  - Active typing indicator event
- `typing_stopped`
  - Typing stopped event
- `user_online`
  - Presence update when a user comes online
- `user_offline`
  - Presence update when a user disconnects
- `error`
  - Validation or socket operation error

## Screenshots

Add screenshots here before sharing the project publicly.

Suggested images:

- Login page
- Register page
- Conversation sidebar
- Active chat window
- Mobile responsive view

Suggested file layout:

```text
docs/
`-- screenshots/
    |-- login.png
    |-- register.png
    |-- sidebar.png
    |-- chat-window.png
    `-- mobile.png
```

## Future Improvements

- Group chat support
- Message attachments and file uploads
- Message reactions
- Delivery retry and offline queue handling
- Pagination or infinite scroll in the conversation list
- Better test coverage for controllers, validators, and socket flows
- Rate limiting for auth, search, and message endpoints
- Docker and deployment configuration
- End-to-end tests for auth and realtime chat flows

## Why This Project Stands Out

- Demonstrates both REST and realtime architecture in one application
- Shows practical full-stack ownership across UI, backend, and WebSocket flows
- Includes auth, authorization, validation, presence, and realtime state syncing
- Uses reusable frontend structure instead of a single-page prototype
- Reflects product thinking with loading, empty, error, retry, and disconnected states

## License

MIT
#   c h a t x  
 #   c h a t x  
 