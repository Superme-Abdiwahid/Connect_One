import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TwitterFeed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('https://api.twitter.com/2/tweets/:id1526637910866284544', {
          headers: {
            Authorization: 'AAAAAAAAAAAAAAAAAAAAANELtQEAAAAAr9gBc0Z4VRO8%2BsEMcD4BGIio418%3DDuSygdzf1ekpQe4wkqfjdtCCnMPoK3Ca9wT4mBJY1AaH8tqtak',
          },
        });
        setTweets(response.data.data);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div>
      <h1>Twitter Feed - Warriors</h1>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TwitterFeed;
