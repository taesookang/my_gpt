import { useRef } from 'react';
import { IChatContent } from '../interfaces';
import ChatContent from './ChatContent';

interface Props {
  chatContents: IChatContent[];
}

export const ChatContainer: React.FC<Props> = ({ chatContents }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const endLineRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="chat-container"
      className="flex flex-1 w-full overflow-y-scroll flex-col pb-5"
      ref={containerRef}
    >
      {chatContents.map((content) => (
        <ChatContent key={content.id} id={content.id} prompt={content.prompt} />
      ))}
      <div id="chat-line-end" ref={endLineRef} />
    </div>
  );
};

export default ChatContainer;
