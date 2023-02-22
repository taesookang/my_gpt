export interface IChatLine {
  type: 'user' | 'bot';
  message: string | undefined;
}

export interface IChatContent {
  id: string;
  prompt: string;
}
