"use client";

import dynamic from "next/dynamic";

// Dynamically import the Chatbot component
const Chatbot = dynamic(() => import("./Chatbot"), {
  ssr: false,
  loading: () => null
});

export default function ChatbotWrapper() {
  return <Chatbot />;
}
