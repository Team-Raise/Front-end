import React from 'react';
import styles from '../../styles/index.module.scss'
import classNames from 'classnames/bind'
import { useRouter } from 'next/router';
import MobileLogin from "../components/MobileLogin";

const cs = classNames.bind(styles)

function Main() {
  const router = useRouter()

  return (
    <div className={cs('main')}>
      <img
        src={'/images/logo.png'}
        alt="Picture of the author"
        className={cs('logo')}
      />

      <div className={cs("buttonContainer")}>
        <MobileLogin/>
        <br />
        <button className={cs('button', 'guestBtn')} onClick={() => router.push('/Mobile/Guest')}>게스트로 시작</button>
      </div>

    </div>
  );
}

export default Main;
