import { useState, lazy, Suspense } from 'react';
import { IChatContent } from '../interfaces';
import Main from '../components/Main';
import PromptForm from '../components/PromptForm';

const ChatContainer = lazy(() => import('../components/ChatContainer'));

const Home = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [chatContents, setChatContents] = useState<IChatContent[]>([]);

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-full h-full flex flex-col items-center">
        {!chatContents.length ? (
          <Main />
        ) : (
          <Suspense fallback={null}>
            <ChatContainer chatContents={chatContents} />
          </Suspense>
        )}
        <PromptForm
          prompt={prompt}
          setPrompt={setPrompt}
          setChatContents={setChatContents}
        />
      </div>
    </div>
  );
};

export default Home;
