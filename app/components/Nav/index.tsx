import styles from './index.module.css';

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <h2>関東</h2>
        <ul className={styles.nav_list}>
          <li>
            <a href="#">東京</a>
          </li>
          <li>
            <a href="#">神奈川</a>
          </li>
          <li>
            <a href="#">千葉</a>
          </li>
          <li>
            <a href="#">埼玉</a>
          </li>
          <li>
            <a href="#">茨城</a>
          </li>
          <li>
            <a href="#">栃木</a>
          </li>
          <li>
            <a href="#">群馬</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>関西</h2>
        <ul className={styles.nav_list}>
          <li>
            <a href="#">大阪</a>
          </li>
          <li>
            <a href="#">京都</a>
          </li>
          <li>
            <a href="#">兵庫</a>
          </li>
          <li>
            <a href="#">奈良</a>
          </li>
          <li>
            <a href="#">和歌山</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
