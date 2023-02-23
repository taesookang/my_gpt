export interface IChatLine {
  type: 'user' | 'bot';
  message: string;
}

export interface IChatContent {
  id: string;
  prompt: string;
}
