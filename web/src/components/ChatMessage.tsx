/* eslint-disable prettier/prettier */
import React from "react";

type ChatMessageProps = {
  message: string;
  sender: string;
  isOwnMessage: boolean;
  timestamp?: string;
};

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  sender,
  isOwnMessage,
  timestamp,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isOwnMessage ? "flex-end" : "flex-start",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          background: isOwnMessage ? "#daf8cb" : "#f1f0f0",
          padding: "10px 14px",
          borderRadius: "8px",
          maxWidth: "65%",
          boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
        }}
      >
        <strong>{sender}</strong>
        <div style={{ marginTop: "4px" }}>{message}</div>
      </div>
      {timestamp && (
        <span style={{ fontSize: "0.75rem", color: "#888", marginTop: "2px" }}>
          {timestamp}
        </span>
      )}
    </div>
  );
};

export default ChatMessage;