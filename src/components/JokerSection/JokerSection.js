"use client";

import React, { useEffect, useState } from "react";

import { contentJoke } from "./data";
import "./JokerSection.css";

const JokerSection = () => {
  const [count, setCount] = useState(0);
  const [likePost, setLikePost] = useState([]);
  const [ready, setReady] = useState(false);

  const handleFunny = () => {
    if (count === -1) return;

    const likePostPresent = likePost;
    likePostPresent.push({
      content: contentJoke[count].content,
      like: true,
    });

    setCount((prevState) => {
      const countPresent = prevState || 0;
      if (countPresent >= contentJoke.length - 1) {
        setLikePost(likePostPresent);
        return -1;
      } else {
        setLikePost(likePostPresent);

        return countPresent + 1;
      }
    });
  };

  const handleNotFunny = () => {
    if (count === -1) return;
    const likePostPresent = likePost;
    likePostPresent.push({
      content: contentJoke[count].content,
      like: false,
    });

    setCount((prevState) => {
      const countPresent = prevState;
      if (countPresent >= contentJoke.length - 1) {
        setLikePost(likePostPresent);

        return -1;
      } else {
        setLikePost(likePostPresent);

        return countPresent + 1;
      }
    });
  };

  const saveLocalStorege = () => {
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

  return (
    <div className='c-joker-section'>
      {ready ? (
        <div className='section'>
          <div className='c-joker-section-content-joke'>
            {count === -1
              ? `"That's all the jokes for today! Come back another day!"`
              : contentJoke[count].content}
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
