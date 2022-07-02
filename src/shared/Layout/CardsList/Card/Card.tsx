import React from 'react';
import styles from './card.scss';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}/>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img 
            className={styles.avatar}
            src="https://img2.freepng.ru/20180705/kwf/kisspng-computer-icons-icon-design-user-5b3e529cdf3df9.8745700215308110369144.jpg" 
            alt="avatar" 
            />
            <a href="#user-url" className={styles.username}>
              Дмитрий Гришин
              </a>
          </div>
          <span className={styles.createdAt}>4 часа назад</span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности...
          </a>
        </h2>
      <div className={styles.preview}/>
      <div className={styles.menu}/>
      <div className={styles.controls}/>
    </li>
  );
}
