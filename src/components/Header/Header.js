import React from 'react';
import styles from './Header.module.css';
import YandexGo from '../../images/YandexGo.svg'
import price2 from '../../images/price2.png';
import smkt from '../../images/smkt.svg';

function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
      <img src={YandexGo} alt='YandexGo'/>
      <h1 className={styles.header__title}>Вступайте в клуб самокатов</h1>
      <p className={styles.header__subtitle}>Купите абонемент, чтобы стать частью клуба в новом сезоне-2024. 8 месяцев за 499 ₽ <img src={price2} alt='price'/> </p>
      <button className={styles.header__button} type='submit'>Стать частью клуба</button>
      </div>
      <img src={smkt} alt='push-cicle'/>
    </header>

  )
}

export default Header;
