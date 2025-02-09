"use client";

import { useEffect } from "react";

interface TallyWindow extends Window {
  Tally?: {
    loadEmbeds: () => void;
  }
}

const EmbeddedForm = () => {
  useEffect(() => {
    // Load Tally script
    const loadTally = () => {
      const existingScript = document.querySelector("script[src=\"https://tally.so/widgets/embed.js\"]");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.onload = initTally;
        script.onerror = initTally;
        document.body.appendChild(script);
      } else {
        initTally();
      }
    };

    // Initialize Tally
    const initTally = () => {
      if (typeof (window as TallyWindow).Tally !== "undefined") {
        (window as TallyWindow).Tally?.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((element) => {
          element.setAttribute("src", element.getAttribute("data-tally-src") || "");
        });
      }
    };

    loadTally();
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/npJpby?hideTitle=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height={644}
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="Get a Free Quote"
    />
  );
};

export default EmbeddedForm;