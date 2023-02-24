/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect, useRef } from 'react';
import { API } from 'aws-amplify';
import { IChatContent } from '../interfaces';
import { useGlobalContext } from '../context';
import ChatLine from './ChatLine';

export const ChatContent: React.FC<IChatContent> = ({ prompt }) => {
  const [response, setResponse] = useState<string>('');
  const [isError, setIsError] = useState(false);

  const { setIsAnswering } = useGlobalContext();

  const contentRef = useRef<HTMLDivElement | null>(null);

  const typeText = (text: string) => {
    let index = -1;

    const interval = setInterval(() => {
      if (index < text.length) {
        index++;
        setResponse((prev) => {
          return prev + text.charAt(index);
        });
        if (index === text.length) {
          setIsAnswering(false);
        }
      } else {
        clearInterval(interval);
      }
    }, 40);
  };
  useEffect(() => {
    // fetch data when a ChatContent component is created.
    const fetchData = () => {
      API.post('myGPTapi', '/gpt', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          prompt,
        },
      })
        .then((res) => {
          const parsedData = res.bot.trim(); // trims any trailing spaces/'\n'
          typeText(parsedData);
        })
        .catch((err) => {
          console.error(err);
          setIsError(true);
          typeText('Something went wrong :( Try again later.');
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Chat container scrolls to the end of line, whenever the height of content box changes.
    const container = document.getElementById('chat-container');
    const endLine = document.getElementById('chat-line-end');
    if (container && endLine) {
      container.scrollTo({
        top: endLine.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [contentRef.current?.getBoundingClientRect().height]);

  return (
    <div id="chat-content" ref={contentRef}>
      <ChatLine type="user" message={prompt} />
      <ChatLine type="bot" message={response} isError={isError} />
    </div>
  );
};

export default ChatContent;
