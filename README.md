# Garcity

A full-stack application featuring a **Next.js** frontend and a **Node.js Express** backend in a single repository.

## Project Structure

```text
garcity/
├── frontend/       # Next.js (App Router, JavaScript/JSX, Tailwind CSS)
├── backend/        # Node.js + Express API
└── README.md
```

## Getting Started

### 1. Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend server runs on `http://localhost:5000`.

- Health check: `http://localhost:5000/api/health`
- Sample API: `http://localhost:5000/api/message`

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend app runs on `http://localhost:3000`.

## Deployment

- **Frontend (Next.js)**: Deploy on **Vercel** by setting the Root Directory to `frontend`.
- **Backend (Node.js)**: Deploy on **Render**, **Railway**, or similar by setting the Root Directory to `backend`.
