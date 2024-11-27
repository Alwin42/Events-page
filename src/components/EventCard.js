import styles from '../styles/EventCard.module.css';

const EventCard = ({ title, time, location, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.eventBadge}>EVENT</span>
        <p className={styles.time}>{time}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
