# NOTE APP

A modern full-stack note-taking application built with the MERN stack. This project allows users to create, view, edit, search, and delete notes with a clean and responsive interface.

## Features

- Create new notes with title, content, and category
- View all saved notes in a responsive card layout
- Edit existing notes
- Delete notes with confirmation
- Search notes instantly
- Toggle between light and dark themes
- Backend API built with Express and MongoDB

## Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

## Project Structure

```text
NOTE-APP/
├── client/          # React frontend
├── server/          # Express backend
├── .gitignore
└── README.md
```

## Prerequisites

Make sure you have the following installed:
- Node.js
- npm
- MongoDB (local or cloud instance)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/itsBilalDev/NOTE-APP.git
cd NOTE-APP
```

### 2. Install dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

## Environment Variables

Create a `.env` file inside the `server` folder and add the following:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
```

## Running the App

### Start the backend

```bash
cd server
npm run dev
```

### Start the frontend

```bash
cd client
npm run dev
```

The frontend will run on `http://localhost:5173` and the backend on `http://localhost:5000`.

## API Endpoints

### Notes
- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## License

This project is open-source and available under the ISC License.
