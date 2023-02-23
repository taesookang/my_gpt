/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { IChatContent } from '../interfaces';
import { useLoading } from '../context';
import ChatLine from './ChatLine';

export const ChatContent: React.FC<IChatContent> = ({ prompt }) => {
  const [data, setData] = useState<string | undefined>(undefined);
  const [response, setResponse] = useState<string>('');
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setData(
      'Lorem ipsum dolor,\n sit amet consectetur adipisicing elit.\n Quibusdam dicta \nperspiciatis repud\niandae animi \nnumquam vel necessitatib\nus dolore, enim nihil \nuod veritatis quas explic\nabo sapien\nte. Autem sin\nt a natus eaque doloremque!'
    );
  }, []);

  // useEffect(() => {
  //   // fetch data when a ChatContent component is created.
  //   const fetchData = () => {
  //     setIsLoading(true);
  //     API.post('myGPTapi', '/gpt', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: {
  //         prompt,
  //       },
  //     })
  //       .then((res) => {
  //         const parsedData = res.bot.trim(); // trims any trailing spaces/'\n'
  //         setData(parsedData);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         setData('Something went wrong :(');
  //       });
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    // Text typing effect
    let index = -1;
    let interval: NodeJS.Timeout | null = null;

    if (data) {
      interval = setInterval(() => {
        if (index < data.length) {
          setResponse((prev) => prev + data.charAt(index));
          index++;
          if (index === data.length) {
            setIsLoading(false);
          }
        } else {
          clearInterval(interval!);
        }
      }, 40);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [data]);

  return (
    <div id="chat-content" className="">
      <ChatLine type="user" message={prompt} />
      <ChatLine type="bot" message={response} />
    </div>
  );
};

export default ChatContent;
