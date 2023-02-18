import { IChatLine } from '../interfaces';
import ChatLine from './ChatLine';

interface Props {
  lines: IChatLine[];
}

export const ChatContainer: React.FC<Props> = ({ lines }) => {
  return (
    <div
      id="chat-container"
      className="flex flex-1 w-full overflow-y-scroll flex-col pb-5"
    >
      {lines.map((line) => (
        <ChatLine line={line} key={crypto.randomUUID()} />
      ))}
      <div id="chat-line-end" />
    </div>
  );
};

export default ChatContainer;
