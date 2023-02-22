import { IChatLine } from '../interfaces';
import Loader from './Loader';

export const ChatLine: React.FC<IChatLine> = ({ type, message }) => {
  return (
    <div
      id="chat-line"
      className={`w-full py-4 px-[4vw] flex gap-4 ${
        type === 'bot' ? 'bg-dark-100' : 'bg-transparent'
      }`}
    >
      <div
        className={`h-[30px] aspect-square flex items-center justify-center rounded-md ${
          type === 'bot' ? 'bg-green-600' : 'bg-blue-600'
        }`}
      >
        <img
          src={`/assets/${type === 'bot' ? 'bot' : 'user'}.svg`}
          alt={type === 'bot' ? 'bot' : 'user'}
        />
      </div>
      {type === 'bot' && !message ? (
        <Loader />
      ) : (
        <p className="text-white whitespace-pre-line">{message}</p>
      )}
    </div>
  );
};

export default ChatLine;
