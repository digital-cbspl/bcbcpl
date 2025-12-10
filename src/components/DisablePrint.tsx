"use client";

import { useEffect } from "react";

export default function DisablePrint() {
  useEffect(() => {
    const blockPrint = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        alert("Printing is disabled.");
      }
    };

    window.addEventListener("keydown", blockPrint);
    return () => window.removeEventListener("keydown", blockPrint);
  }, []);

  return null;
}
