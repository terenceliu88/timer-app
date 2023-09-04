import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteSession } from "./api/deleteSession";
import { getSessions, TSession } from "./api/getSessions";
import { createSession } from "./api/createSession";
import "./App.css";

function App() {
  const [sessions, setSessions] = useState<TSession[]>([]);
  const [title, setTitle] = useState("");

  async function handleCreateSession(e: React.FormEvent) {
    e.preventDefault();
    const session = await createSession(title);
    setSessions([...sessions, session]);
    setTitle("");
  }

  async function handleDeleteSession(sessionId: string) {
    await deleteSession(sessionId);
    setSessions(sessions.filter((session) => session._id !== sessionId));
  }

  useEffect(() => {
    async function fetchSessions() {
      const newSessions = await getSessions();
      setSessions(newSessions);
    }
    fetchSessions();
  }, []);

  return (
    <div className="app">
      <ul className="sessions">
        {sessions.map((session) => (
          <li key={session._id}>
            <button onClick={() => handleDeleteSession(session._id)}>X</button>
            <Link to={`sessions/${session._id}`}>{session.title}</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateSession}>
        <label htmlFor="session-title">Session Title</label>
        <input
          id="session-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Create Session</button>
      </form>
    </div>
  );
}

export default App;
