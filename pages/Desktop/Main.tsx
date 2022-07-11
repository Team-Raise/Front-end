import React from 'react';
import styles from '../../styles/index.module.scss'
import classNames from 'classnames/bind'
import { useRouter } from 'next/router';
import DesktopLogin from "../components/DesktopLogin";

const cs = classNames.bind(styles)

function Main() {
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
        <DesktopLogin/>
        <button className={cs('button', 'guestBtn')} onClick={() => router.push('/Desktop/Guest')}>게스트로 시작</button>
      </div>

    </div>
  );
}

export default Main;
