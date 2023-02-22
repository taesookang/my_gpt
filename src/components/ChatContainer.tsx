import { IChatContent } from '../interfaces';
import ChatContent from './ChatContent';

interface Props {
  chatContents: IChatContent[];
}

export const ChatContainer: React.FC<Props> = ({ chatContents }) => {
  return (
    <div
      id="chat-container"
      className="flex flex-1 w-full overflow-y-scroll flex-col pb-5"
    >
      {chatContents.map((content) => (
        <ChatContent key={content.id} id={content.id} prompt={content.prompt} />
      ))}
      <div id="chat-line-end" />
    </div>
  );
};

export default ChatContainer;
