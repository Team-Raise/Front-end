import React from 'react';
import styles from '../../styles/index.module.scss'
import classNames from 'classnames/bind'
import { useRouter } from 'next/router';
import MobileLogin from "../components/MobileLogin";
import { useCookies } from 'react-cookie';

const cs = classNames.bind(styles)

function Main() {
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['isAdmin']);

  const isCorrectGuest= () => {
    if (cookies.isAdmin) {
      alert('관리자 계정으로 로그인 되어있어 관리자 페이지로 이동합니다.')
      router.push('/Mobile/Datas')
    } else {
      router.push('/Mobile/Datas')
    }
  }

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
        <button className={cs('button', 'guestBtn')} onClick={isCorrectGuest}>게스트로 시작</button>
      </div>

    </div>
  );
}

export default Main;
