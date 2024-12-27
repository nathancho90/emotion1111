import React from 'react';
import { Brain, Smile, Frown, Meh, ThumbsUp } from 'lucide-react';
import { Message } from '../types/chat';

const emotionIcons = {
  happy: Smile,
  sad: Frown,
  neutral: Meh,
  thinking: ThumbsUp, // Changed from ThinkingFace to ThumbsUp as it's available in lucide-react
};

const emotionColors = {
  happy: 'text-green-500',
  sad: 'text-blue-500',
  neutral: 'text-gray-500',
  thinking: 'text-purple-500',
};

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const Icon = message.role === 'assistant' ? Brain : (message.emotion ? emotionIcons[message.emotion] : Meh);
  const colorClass = message.emotion ? emotionColors[message.emotion] : 'text-gray-500';
  const isAssistant = message.role === 'assistant';

  return (
    <div className={`flex items-start gap-2 mb-4 ${isAssistant ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`flex-shrink-0 ${colorClass}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className={`flex-1 max-w-[80%] ${isAssistant ? 'mr-12' : 'ml-12'}`}>
        <div className={`rounded-lg p-3 ${
          isAssistant ? 'bg-white shadow-md' : 'bg-blue-500 text-white'
        }`}>
          <p className="text-sm">{message.content}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1 block">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}