import { Message } from '../types/chat';
import { OPENAI_CONFIG } from './api-config';
import { handleApiError } from '../utils/api-helpers';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

if (!API_KEY) {
  console.error('OpenAI API key is missing from environment variables');
}

export async function sendMessage(messages: Message[]) {
  try {
    const response = await fetch(OPENAI_CONFIG.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: OPENAI_CONFIG.MODEL,
        messages: messages.map(({ content, role }) => ({ role, content })),
        temperature: OPENAI_CONFIG.TEMPERATURE,
        max_tokens: OPENAI_CONFIG.MAX_TOKENS,
      }),
    });

    const data = await handleApiError(response);
    return data.choices[0].message.content;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    throw new Error(`OpenAI API Error: ${errorMessage}`);
  }
}