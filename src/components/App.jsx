import React, { Component } from 'react';
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

const Section = styled.div`
  margin-top: 24px;
  text-align: left;
  width: 300px;
  margin: 0 auto;
`;

const Notification = styled.p`
  margin: 4px 0;
  color: #0c2269;
`;

class App extends Component {
  state = {
    feedback: { good: 0, neutral: 0, bad: 0 },
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      feedback: { ...prevState.feedback, [type]: prevState.feedback[type] + 1 },
    }));
  };

  render() {
    const { good, neutral, bad } = this.state.feedback;
    const total = good + neutral + bad;
    const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

    return (
      <Container>
        <h2>Plese leave feedback</h2>
        <Section>
          <h2>Statistics</h2>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification>There is no feedback</Notification>
          )}
        </Section>
        <Section>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
