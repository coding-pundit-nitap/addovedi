"use client";
import { useEffect, useRef, useState } from "react";

export function useInViewMotion<T extends HTMLElement>(options?: {
  rootMargin?: string;
  once?: boolean;
  threshold?: number;
}) {
  const {
    rootMargin = "0px 0px -10% 0px",
    once = true,
    threshold = 0.2,
  } = options || {};
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { root: null, rootMargin, threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, visible } as const;
}
