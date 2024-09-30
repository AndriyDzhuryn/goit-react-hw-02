const Feedback = ({ feedbackType, totalFeedback, goodReviews }) => {
  return (
    <ul>
      <li>Good: {feedbackType.good}</li>
      <li>Neutral: {feedbackType.neutral}</li>
      <li>Bad: {feedbackType.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {goodReviews}%</li>
    </ul>
  );
};

export default Feedback;
