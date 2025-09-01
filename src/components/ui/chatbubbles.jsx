import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Chatbubbles = () => {
  return (
    <div className="relative py-16 px-4 md:px-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-100"></div>

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-3xl"></div>

      {/* Content container */}
      <div className="relative text-xl mt-10 flex flex-col items-end space-y-6">
        {[
          {
            text: "Heyyy!\nBeautiful nails!",
            type: "chat-start",
            style: "chat-bubble-error",
          },
          {
            text: "Thank you! \nI got them done at Taylor Kates!",
            type: "chat-end",
            style: "chat-bubble-secondary",
          },
          {
            text: "Wow! I love them!",
            type: "chat-start",
            style: "chat-bubble-success",
          },
          {
            text: "I know and I got them at such a great price!",
            type: "chat-end",
            style: "chat-bubble-secondary",
          },
          {
            text: "And don't forget, the lashes are to die for!",
            type: "chat-start",
            style: "chat-bubble-warning",
          },
          {
            text: "I'm getting those too! 💕",
            type: "chat-end",
            style: "chat-bubble-success",
          },
        ].map((chat, i) => {
          const ChatBubble = () => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`chat ${chat.type}`}
              >
                <div
                  className={`chat-bubble ${chat.style} whitespace-pre-line shadow-md`}
                >
                  {chat.text}
                </div>
              </motion.div>
            );
          };

          return <ChatBubble key={i} />;
        })}
      </div>
    </div>
  );
};

export default Chatbubbles;
