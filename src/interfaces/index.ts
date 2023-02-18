export interface IChatLine {
  type: 'user' | 'bot';
  message: string | null | undefined;
}
