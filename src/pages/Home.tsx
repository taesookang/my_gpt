/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect } from 'react';
import ChatContainer from '../components/ChatContainer';
import Main from '../components/Main';
import { IChatLine } from '../interfaces';

// Chat Container [lines]
// - ChatLine
// Input form

const Home = () => {
  const [textValue, setTextValue] = useState<string>('');
  const [height, setHeight] = useState('auto');

  const [lines, setLines] = useState<IChatLine[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
    setHeight('auto');
    // get scroll height for textarea
    const { scrollHeight } = event.target;

    if (scrollHeight > 50) {
      setHeight(`${scrollHeight}px`);
    }
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    setHeight('auto');
    const newLine: IChatLine = {
      type: 'user',
      message: textValue,
    };

    const newBotLine: IChatLine = {
      type: 'bot',
      message: undefined,
    };
    setLines([...lines, newLine, newBotLine]);
    setTextValue('');

    const container = document.getElementById('chat-container');

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-full h-full flex flex-col items-center">
        {lines.length === 0 ? <Main /> : <ChatContainer lines={lines} />}
        <form
          className="flex w-full h-fit items-center justify-center gap-4 py-4 px-[4vw]"
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              handleSubmit(e);
            }
          }}
        >
          <div
            className="flex w-full px-4 py-2 bg-dark-100 shadow-sm shadow-gray-900 max-h-[200px]"
            style={{ height }}
          >
            <textarea
              name="prompt"
              rows={1}
              cols={1}
              onChange={handleChange}
              value={textValue}
              placeholder="Ask codex..."
              className="w-full focus:outline-none bg-transparent resize-none text-white tracking-wide py-2 overflow-y-hidden"
            />
            <button type="submit">
              <img src="assets/enter.svg" alt="send" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
