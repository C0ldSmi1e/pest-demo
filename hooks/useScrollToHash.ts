"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export function useScrollToHash() {
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const navbarHeight = 100; // Adjust this value based on your navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.scrollY - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 0);
      }
    };

    router.events.on("hashChangeComplete", handleHashChange);
    
    // Initial scroll on page load
    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      router.events.off("hashChangeComplete", handleHashChange);
    };
  }, [router.events]);
}
