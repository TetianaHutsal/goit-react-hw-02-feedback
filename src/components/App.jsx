import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  color: #1856ff;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;

  button {
    width: 100px;
    font-size: 18px;
    padding: 8px 16px;
    background-color: #029bff;
    color: beige;
    border: 10px;
    border-radius: 15%;
    cursor: pointer;

    &:hover {
      background-color: #029bff;
    }
  }
`;

const FeedbackContainer = styled.div`
  margin-top: 24px;
  text-align: left;
  width: 300px;
  margin: 0 auto;
`;

const FeedbackItem = styled.p`
  margin: 4px 0;
  color: #0c2269;
`;

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <Container>
      <h2>Please leave your feedback</h2>
      <ButtonsContainer>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </ButtonsContainer>

      {total > 0 ? (
        <FeedbackContainer>
          <h2>Statistics</h2>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </FeedbackContainer>
      ) : (
        <FeedbackItem>There is no feedback</FeedbackItem>
      )}
    </Container>
  );
};
