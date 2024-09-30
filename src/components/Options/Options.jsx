import styles from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className={styles.btn_add_reviews_box}>
      <button
        className={styles.btn_reviews}
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        className={styles.btn_reviews}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={styles.btn_reviews}
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={styles.btn_reviews}
          onClick={() => updateFeedback('reset')}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
