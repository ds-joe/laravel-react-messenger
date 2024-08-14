export type ChatMessageInputProps = {
  hasRecord?: boolean; // Enabled voice message
}

export type ChatBubbleProps = {
  message: string;
  date: string;
  avatar?: string;
  position: 'start' | 'end'
}