import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { IChatContent } from '../interfaces';
import ChatLine from './ChatLine';

export const ChatContent: React.FC<IChatContent> = ({ prompt }) => {
  const [data, setData] = useState<string | undefined>(undefined);
  const [response, setResponse] = useState<string | undefined>('');

  useEffect(() => {
    // Text typing effect

    let index = -1;
    let interval: NodeJS.Timeout | null = null;

    if (data) {
      if (index < data.length) {
        interval = setInterval(() => {
          setResponse((prev) => prev + data.charAt(index));
          index++;
        }, 40);
      }
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [data]);

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
          setData(parsedData);
        })
        .catch((err) => {
          console.error(err);
          setData('Something went wrong :(');
        });
    };
    fetchData();
  }, []);
  return (
    <div id="chat-content" className="">
      <ChatLine type="user" message={prompt} />
      <ChatLine type="bot" message={response} />
    </div>
  );
};

export default ChatContent;
