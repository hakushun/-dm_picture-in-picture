import { Article } from './components/Article';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.wrapper}>
        <aside className={styles.sidebar}>
          <Nav />
        </aside>
        <main className={styles.main}>
          <Article />
        </main>
      </section>
    </div>
  );
}
