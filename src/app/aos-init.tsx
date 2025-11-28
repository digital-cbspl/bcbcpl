"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
      once: true, // prevents repeat
    });
  }, []);

  return null;
}
