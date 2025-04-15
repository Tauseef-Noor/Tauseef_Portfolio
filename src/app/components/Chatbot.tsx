"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hi there! I'm your virtual assistant for architecture services. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
];

// Define categories of responses for different topics
const responseCategories = {
  academic: [
    "We offer academic services including architectural thesis guidance and support.",
    "Our academic services include research assistance for architecture students at all levels.",
    "We can help with architectural case studies, precedent analysis, and literature reviews for academic projects.",
    "We provide tutoring and mentorship for architecture students working on design studios or technical courses.",
    "Our team can assist with architectural drawings, 3D modeling, and visualization for academic submissions.",
    "We offer portfolio development guidance for architecture students and recent graduates.",
    "Need help with an architecture assignment or project? We provide comprehensive academic support services."
  ],
  design: [
    "Our design philosophy focuses on creating spaces that are both functional and aesthetically pleasing.",
    "We specialize in sustainable architectural design with a focus on energy efficiency and eco-friendly materials.",
    "Each design project begins with a thorough analysis of the site, context, and client requirements.",
    "Our design process involves close collaboration with clients at every stage, from concept to completion.",
    "We create custom designs that reflect the unique vision and needs of each client."
  ],
  services: [
    "Our services include architectural design, construction documentation, and project management.",
    "We offer comprehensive architectural services from initial concept through construction administration.",
    "Our portfolio includes residential, commercial, institutional, and public space projects.",
    "We provide 3D visualization services to help clients better understand design proposals.",
    "We can handle renovations, additions, and new construction projects of various scales."
  ],
  consultation: [
    "We offer initial consultations to discuss your project needs and goals.",
    "During a consultation, we'll discuss your budget, timeline, and design preferences.",
    "You can schedule a consultation through our contact form or by calling our office.",
    "We're happy to provide a preliminary assessment of your project's feasibility.",
    "Consultations can be conducted in person, via video call, or over the phone."
  ],
  default: [
    "Thanks for your interest! You can explore our portfolio to see examples of our work.",
    "We integrate modern technology with timeless design principles in all our projects.",
    "Feel free to reach out through the contact form for more specific information.",
    "We're passionate about creating spaces that enhance people's lives and experiences.",
    "Is there something specific about our architectural services you'd like to know more about?"
  ]
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to determine which category of response to use based on user input
  const getCategoryFromInput = (input: string): keyof typeof responseCategories => {
    input = input.toLowerCase();
    
    if (input.includes('academic') || 
        input.includes('thesis') || 
        input.includes('student') || 
        input.includes('study') || 
        input.includes('research') || 
        input.includes('assignment') || 
        input.includes('school') || 
        input.includes('university') || 
        input.includes('college') || 
        input.includes('course') ||
        input.includes('education')) {
      return 'academic';
    }
    
    if (input.includes('design') || 
        input.includes('style') || 
        input.includes('aesthetic') || 
        input.includes('concept') || 
        input.includes('look')) {
      return 'design';
    }
    
    if (input.includes('service') || 
        input.includes('offer') || 
        input.includes('provide') || 
        input.includes('portfolio') || 
        input.includes('project')) {
      return 'services';
    }
    
    if (input.includes('consult') || 
        input.includes('meeting') || 
        input.includes('discuss') || 
        input.includes('talk') || 
        input.includes('appointment')) {
      return 'consultation';
    }
    
    return 'default';
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Determine which category to respond from based on user input
    const category = getCategoryFromInput(userMessage.text);
    const categoryResponses = responseCategories[category];
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const randomResponse = categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaRobot size={20} />}
      </motion.button>
      
      {/* Chatbot window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[450px] bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50 flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center">
              <FaRobot className="mr-2" size={20} />
              <h3 className="font-medium">Architecture Assistant</h3>
            </div>
            
            {/* Messages container */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-tl-none"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === "user" ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Bot typing indicator */}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input area */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                disabled={!inputValue.trim()}
              >
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
