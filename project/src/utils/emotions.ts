export function detectEmotion(text: string): 'happy' | 'sad' | 'neutral' | 'thinking' {
  const lowerText = text.toLowerCase();
  
  if (lowerText.match(/(\b|^)(happy|great|awesome|excellent|😊|😃|🙂)(\b|$)/)) {
    return 'happy';
  }
  
  if (lowerText.match(/(\b|^)(sad|sorry|unfortunate|😢|😔|☹️)(\b|$)/)) {
    return 'sad';
  }
  
  if (lowerText.match(/(\b|^)(hmm|think|consider|analyze|🤔)(\b|$)/)) {
    return 'thinking';
  }
  
  return 'neutral';
}