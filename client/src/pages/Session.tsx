import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TSession } from "../api/getSessions";
import { getSession } from "../api/getSession";
import { createTime } from "../api/createTime";
import { deleteTime } from "../api/deleteTime";
import Timer from "../components/Timer";
import "../App.css";

export default function Session() {
  const [_, setSession] = useState<TSession | undefined>();
  const [times, setTimes] = useState<string[]>([]);
  const [text, setText] = useState("");
  const { sessionId } = useParams();

  async function handleCreateSession(e: React.FormEvent) {
    e.preventDefault();
    const { times: serverTimes } = await createTime(sessionId!, text);
    setTimes(serverTimes);
    setText("");
  }

  async function handleDeleteTime(index: number) {
    if (!sessionId) return;
    const newSession = await deleteTime(sessionId, index);
    setTimes(newSession.times);
  }

  useEffect(() => {
    async function fetchSession() {
      if (!sessionId) return;
      const newSession = await getSession(sessionId);
      setSession(newSession);
      setTimes(newSession.times);
    }
    fetchSession();
  }, [sessionId]);

  return (
    <div className="app">
      <ul className="sessions">
        {times.map((time, index) => (
          <li key={time}>
            <button onClick={() => handleDeleteTime(index)}>X</button>
            {time}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateSession}>
        <label htmlFor="time-text">Time Text</label>
        <input
          id="time-text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button>Create Time</button>
      </form>
      <Timer />
    </div>
  );
}
