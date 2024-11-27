import Card from '../components/Card';
import EventCard from '../components/EventCard'; // New Component
import styles from '../styles/Home.module.css';

export default function Home() {
  const shows = [
    {
      title: "TRESSURE HUNT",
      time: "SUNDAY 5.00PM - 7.00PM",
      hosts: "Annika Moses | Drew Krapljanov | Jas Hughes | Tim Fairbanks + 4",
      tags: ["BOOK", "NEXT", "+8"],
      image: "/images/image.png",
    },
    {
      title: "AI & ML WORKSHOP",
      time: "SUNDAY 7.00PM - 9.00PM",
      hosts: "Inayah | Oliver Laing | Dimitri Kapetas | Grant Warner + 4",
      tags: ["BOOK", "NEXT", "+1"],
      image: "/images/image2.jpg",
    },
    {
      title: "ELECTRONICS PCB DESIGN",
      time: "SATURDAY 11.00PM - 1.00AM",
      hosts: "Lala | i33a | Bella Guard | Tran Scended + 4",
      tags: ["BOOK", "NEXT", "+2"],
      image: "/images/image3.jpg",
    },
    {
      title: "AUTO SHOW",
      time: "SATURDAY 1.00AM - 4.00AM",
      hosts: "Flaunt | Tizer | DMC | Bamm B + 2",
      tags: ["BOOK", "NEXT", "+2"],
      image: "/images/image4.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>FIND YOUR PROGRAMS</h1>
        <a href="#" className={styles.viewAll}>
          VIEW ALL SHOWS →
        </a>
      </header>

      <div className={styles.grid}>
        {shows.map((show, index) => (
          <Card key={index} {...show} />
        ))}
      </div>
    </div>
  );
}
