"use client";

import React, { useEffect, useState } from "react";

import "./JokerSection.css";

const JokerSection = () => {
  const [count, setCount] = useState(0);
  const [likePost, setLikePost] = useState([]);
  const [ready, setReady] = useState(false);

  const contentJoker = [
    {
      content: ` A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on.",

    The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."
    
    The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
    },
    {
      content: `Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`,
    },
    {
      content: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
    },
    {
      content: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
    },
  ];

  const handleFunny = () => {
    if (count === -1) return;

    const likePostPresent = likePost;
    likePostPresent.push({
      content: contentJoker[count].content,
      like: true,
    });

    setCount((prevState) => {
      const countPresent = prevState || 0;
      if (countPresent >= contentJoker.length - 1) {
        setLikePost(likePostPresent);
        return -1;
      } else {
        setLikePost(likePostPresent);

        return countPresent + 1;
      }
    });
  };

  const saveLocalStorege = () => {
    setReady(true);
    localStorage.setItem(
      "count",
      JSON.stringify({
        count,
        date: new Date().getTime().toString(),
      })
    );
  };

  useEffect(() => {
    // refresh the data if a new day begins
    const localStorageCount = JSON.parse(localStorage.getItem("count"));

    if (localStorageCount) {
      const localCount = Number(localStorageCount.count) || 0;
      const storedTime = localStorageCount.date;
      const storedTimeInt = parseInt(storedTime, 10);

      const currentTime = new Date().getTime();

      if (currentTime - storedTimeInt >= 24 * 60 * 60 * 1000) {
        setCount(0);
      } else {
        setCount(localCount);
      }
    }

    setReady(true);
  }, []);

  useEffect(() => {
    saveLocalStorege();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleNotFunny = () => {
    if (count === -1) return;
    const likePostPresent = likePost;
    likePostPresent.push({
      content: contentJoker[count].content,
      like: false,
    });

    setCount((prevState) => {
      const countPresent = prevState;
      if (countPresent >= contentJoker.length - 1) {
        setLikePost(likePostPresent);

        return -1;
      } else {
        setLikePost(likePostPresent);

        return countPresent + 1;
      }
    });
  };

  return (
    <div className='c-joker-section'>
      {ready ? (
        <div className='section'>
          <div className='c-joker-section-content-joke'>
            {count === -1
              ? `"That's all the jokes for today! Come back another day!"`
              : contentJoker[count].content}
          </div>

          <hr className='c-joker-section-hr' />

          <div className='c-joker-section-group-btn'>
            <span className='btn btn-funny' onClick={() => handleFunny()}>
              This is funny!
            </span>
            <span
              className='btn btn-not-funny'
              onClick={() => handleNotFunny()}
            >
              This is not funny.
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default JokerSection;
