# Garcity

A full-stack application featuring a **Next.js** frontend and a **Node.js Express** backend in a single repository.

## Project Structure

```text
garcity/
├── frontend/       # Next.js (App Router, JavaScript/JSX, Tailwind CSS)
├── backend/        # Node.js + Express API
├── package.json    # Root runner to start both servers concurrently
└── README.md
```

## Running the Application

### Option A: Run Both Together (Recommended)

From the root `garcity` directory, run:

```bash
npm run dev
```

This single command launches both:
- **Backend API**: `http://localhost:5000`
- **Frontend App**: `http://localhost:3000`

---

### Option B: Run Separately (Two Terminals)

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

---

## API Endpoints

- Root: `http://localhost:5000/`
- Health check: `http://localhost:5000/api/health`
- Sample message: `http://localhost:5000/api/message`
