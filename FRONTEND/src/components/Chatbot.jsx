import React, { useState } from "react";


const Chatbot = () => {

  const [openChat, setOpenChat] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "👋 Hello! Welcome to JOB_ADDA.\nHow can I help you?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  
  const sendMessage = () => {

    if (input.trim() === "") return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    let botReply = "Sorry, I didn't understand that.";

    const msg = input.toLowerCase();

    if (msg.includes("job")) {
      botReply =
        "💼 You can explore jobs in the Jobs section.";
    }

    else if (msg.includes("login")) {
      botReply =
        "🔐 Click the Login button in the navbar.";
    }

    else if (msg.includes("signup")) {
      botReply =
        "📝 Create your account from the Signup page.";
    }

    else if (msg.includes("contact")) {
      botReply =
        "📞 You can contact us from the Contact section.";
    }

    else if (msg.includes("hello") || msg.includes("hi")) {
      botReply =
        "👋 Hello! How can I assist you today?";
    }

    const botMessage = {
      text: botReply,
      sender: "bot",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput("");
  };

  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">

      
      <button
        className="chat-toggle"
        onClick={() => setOpenChat(!openChat)}
      >
        💬
      </button>

      
      {openChat && (

        <div className="chat-box">

          
          <div className="chat-header">

            <h3>JOB_ADDA Bot</h3>

            <span onClick={() => setOpenChat(false)}>
              ✖
            </span>

          </div>

          
          <div className="chat-messages">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "message user"
                    : "message bot"
                }
              >
                {msg.text}
              </div>

            ))}

          </div>

        
          <div className="chat-input">

            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />

            <button onClick={sendMessage}>
              Send
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default Chatbot;