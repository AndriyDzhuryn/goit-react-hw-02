import { useEffect, useState } from 'react';
import './App.css';

import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Notification from './components/Notification/Notification.jsx';

function App() {
  const [reviews, setReviews] = useState(() => {
    const stringifiedValue = localStorage.getItem('reviewsValue');
    const parsedValue = JSON.parse(stringifiedValue) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return parsedValue;
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(reviews);
    localStorage.setItem('reviewsValue', stringifiedValue);
  }, [reviews]);

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const goodReviews = Math.round((reviews.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
    if (feedbackType === 'reset') {
      setReviews({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackType={reviews}
          totalFeedback={totalFeedback}
          goodReviews={goodReviews}
        />
      )}
    </>
  );
}

export default App;
