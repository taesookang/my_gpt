export interface IChatLine {
  type: 'user' | 'bot';
  message: string;
  isError?: boolean;
}

export interface IChatContent {
  id: string;
  prompt: string;
}
