import styles from './Feedback.module.css';

const Feedback = ({ feedbackType, totalFeedback, goodReviews }) => {
  return (
    <ul className={styles.list_reviews}>
      <li className={styles.list_item_reviews}>Good: {feedbackType.good}</li>
      <li className={styles.list_item_reviews}>
        Neutral: {feedbackType.neutral}
      </li>
      <li className={styles.list_item_reviews}>Bad: {feedbackType.bad}</li>
      <li className={styles.list_item_reviews}>Total: {totalFeedback}</li>
      <li className={styles.list_item_reviews}>Positive: {goodReviews}%</li>
    </ul>
  );
};

export default Feedback;
