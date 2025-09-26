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
      className={`flex flex-col ${isOwnMessage ? "items-end" : "items-start"} mb-3`}
    >
      <div
        className={`
          px-4 py-2 rounded-lg max-w-[65%] shadow
          ${isOwnMessage
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"}
        `}
      >
        <strong>{sender}</strong>
        <div className="mt-1">{message}</div>
      </div>
      {timestamp && (
        <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
          {timestamp}
        </span>
      )}
    </div>
  );
};

export default ChatMessage;