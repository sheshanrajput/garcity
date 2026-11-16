"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [backendMessage, setBackendMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

  const checkBackend = async () => {
    setLoading(true);
    setBackendStatus("Checking...");
    try {
      const res = await fetch(`${backendUrl}/api/message`, {
        cache: "no-store"
      });
      if (res.ok) {
        const data = await res.json();
        setBackendStatus("Online");
        setBackendMessage(data.message || "Connected successfully!");
      } else {
        setBackendStatus("Error");
        setBackendMessage(`Server returned HTTP ${res.status}`);
      }
    } catch (err) {
      console.error("Backend connection error:", err);
      setBackendStatus("Offline");
      setBackendMessage(
        "Could not reach backend on " +
          backendUrl +
          ". Make sure 'npm run dev' is running in backend/ and not stopped."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkBackend();
  }, [backendUrl]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 sm:p-12 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <header className="max-w-5xl mx-auto w-full flex items-center justify-between border-b border-slate-800 pb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
            G
          </div>
          <div>
            <h1 className="font-semibold text-lg text-white">Garcity</h1>
            <p className="text-xs text-slate-400">Next.js &bull; Node.js Express</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`inline-block w-2.5 h-2.5 rounded-full ${
              backendStatus === "Online"
                ? "bg-emerald-400 animate-pulse"
                : "bg-amber-400"
            }`}
          />
          <span className="text-xs font-medium text-slate-300">
            Backend: {backendStatus}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto w-full my-auto py-12 flex flex-col gap-8">
        <div className="space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Starter Monorepo Setup Ready
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Frontend & Backend Connected
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Your full-stack foundation is configured with Next.js (App Router, JSX, Tailwind CSS)
            and Node.js Express with CORS & environment configs.
          </p>
        </div>

        {/* Live Backend Connection Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Backend API Response
            </h3>
            <button
              onClick={checkBackend}
              disabled={loading}
              className="text-xs px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Checking..." : "Retry Connection"}
            </button>
          </div>
          <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800/80 font-mono text-sm">
            <span className="text-indigo-400 font-bold">&gt;</span>
            <span className={backendStatus === "Online" ? "text-emerald-400" : "text-amber-400"}>
              {loading ? "Checking backend connection..." : backendMessage || "No response received."}
            </span>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Targeting API endpoint: <code className="text-slate-300">{backendUrl}/api/message</code>
          </p>
        </div>

        {/* Quick Commands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white">Frontend (Next.js)</span>
              <span className="text-xs text-indigo-400 font-mono">port 3000</span>
            </div>
            <pre className="bg-slate-950 p-3 rounded-lg text-xs font-mono text-slate-300 border border-slate-800 overflow-x-auto">
cd frontend{"\n"}npm run dev
            </pre>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-white">Backend (Express)</span>
              <span className="text-xs text-emerald-400 font-mono">port 5000</span>
            </div>
            <pre className="bg-slate-950 p-3 rounded-lg text-xs font-mono text-slate-300 border border-slate-800 overflow-x-auto">
cd backend{"\n"}npm run dev
            </pre>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto w-full border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
        Garcity &bull; Ready for Git &amp; GitHub
      </footer>
    </div>
  );
}
