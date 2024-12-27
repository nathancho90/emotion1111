export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  emotion?: 'happy' | 'sad' | 'neutral' | 'thinking';
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}