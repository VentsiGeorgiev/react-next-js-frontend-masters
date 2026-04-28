"use client";
import { useState } from "react";
import updateUsername from "./updateUsername";

export default function ClientWhoAmIPage({ children, id }) {
  const [text, setText] = useState("client component");
  return (
    <div>
      <p>{text}</p>
      {children}
      <form action={updateUsername}>
        <h2>Enter new username</h2>
        <input type="text" name="username" placeholder="username" />
        <input type="hidden" name="id" value={id} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
