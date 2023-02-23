import { useEffect, useRef } from 'react';
import { IChatContent } from '../interfaces';
import ChatContent from './ChatContent';

interface Props {
  chatContents: IChatContent[];
}

export const ChatContainer: React.FC<Props> = ({ chatContents }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chatContents]);

  return (
    <div
      id="chat-container"
      className="flex flex-1 w-full overflow-y-scroll flex-col pb-5"
      ref={containerRef}
    >
      {chatContents.map((content) => (
        <ChatContent key={content.id} id={content.id} prompt={content.prompt} />
      ))}
      <div id="chat-line-end" />
    </div>
  );
};

export default ChatContainer;
