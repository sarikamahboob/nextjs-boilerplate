"use client"

import { useState } from "react";
import "./style.css";

export default function AuthTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const [input, setInput] = useState("")

  return (
    <div>
      {children}
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
      </div>
    </div>
  );
}