"use client";

import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);
  return (
    <div>
      {/* <div>Template: {state}</div> */}
      {/* <button onClick={() => setState(state + 1)}>Klik</button> */}
      {children}
    </div>
  );
}
