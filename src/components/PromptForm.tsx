import React, { useState } from 'react';
import { IChatContent } from '../interfaces';
import { useGlobalContext } from '../context';

interface Props {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  setChatContents: React.Dispatch<React.SetStateAction<IChatContent[]>>;
}

export const PromptForm: React.FC<Props> = ({
  prompt,
  setPrompt,
  setChatContents,
}) => {
  const [height, setHeight] = useState('auto');
  const { isAnswering, setIsAnswering } = useGlobalContext();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
    setHeight('auto');
    // get scroll height for textarea
    const { scrollHeight } = event.target;

    if (scrollHeight > 50) {
      setHeight(`${scrollHeight}px`);
    }
  };
  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    setIsAnswering(true);
    const timestamp = Date.now();
    const id = `${timestamp}-${Math.random()}`;
    const content: IChatContent = { id, prompt };
    setChatContents((prev) => [...prev, content]);
    setHeight('auto');
    setPrompt('');
  };
  return (
    <form
      className="flex w-full h-fit items-center justify-center gap-4 sm:py-4 sm:px-[4vw]"
      onSubmit={handleSubmit}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          handleSubmit(e);
        }
      }}
    >
      <div
        className="flex w-full px-4 py-4 sm:py-2 bg-dark-100 shadow-sm shadow-gray-900  sm:max-h-[200px]"
        style={{ height }}
      >
        <textarea
          name="prompt"
          rows={1}
          cols={1}
          onChange={handleChange}
          value={prompt}
          disabled={isAnswering}
          placeholder={isAnswering ? 'Codex is answering...' : 'Ask codex...'}
          className="w-full focus:outline-none bg-transparent resize-none text-white tracking-wide py-2 overflow-y-hidden text-xl sm:text-base"
        />
        <button type="submit" disabled={isAnswering}>
          <img src="/assets/enter.svg" alt="send" />
        </button>
      </div>
    </form>
  );
};

export default PromptForm;
