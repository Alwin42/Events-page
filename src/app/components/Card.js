import styles from '../styles/Card.module.css';

const Card = ({ title, time, hosts, tags, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.showBadge}>SHOW</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.time}>{time}</p>
        <p className={styles.hosts}>HOSTED BY: {hosts}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
