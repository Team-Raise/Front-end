import React from 'react';
import Image from "next/image";
import styles from '../styles/index.module.scss'
import classNames from 'classnames/bind'
import { useRouter } from 'next/router';

const cs = classNames.bind(styles)

function Home() {
  const router = useRouter()
  const movePage = () => {
    alert("sex")
  }

  return (
    <div className={cs('main')}>

      <img
        src={'/images/logo.png'}
        alt="Picture of the author"
        className={cs('logo')}
      />

      <div className={cs("buttonContainer")}>
        <button className={cs('button', 'adminBtn')} onClick={movePage}>관리자로 시작</button>
        <br />
        <button className={cs('button', 'guestBtn')} onClick={() => router.push('/Datas')}>게스트로 시작</button>
      </div>

    </div>
  );
}

export default Home;
