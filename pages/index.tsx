import React, {useState, useEffect, useRef} from "react"
import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import classNames from 'classnames/bind'
import styles from '../styles/arduinoValue.module.scss'
import {useRouter} from "next/router";
import Nav from './components/Nav'
import Loading from "./components/Loading";
import Image from "next/image";
import FancyModal from "./components/FancyModal";
import {AiOutlineDelete} from "react-icons/ai"
import axios from 'axios';

const cs = classNames.bind(styles)

const Home = () => {
  const router = useRouter()

  const {data, error} = useSWR('/api/DB', fetcher)

  const onRemove = async () => {
    if (window.confirm("정말로 모든 데이터를 초기화시키겠습니까?")) {
      alert("삭제되었습니다.")
      await axios.get('/api/DeleteData')
    }
  };

  if (error) {
    return (
      <div>error</div>
    )
  } else if (!data) {
    return <Loading/>
  } else {
    return (
      <>
        <Nav/>

        <Image
          src={'/images/logo.png'}
          width={315}
          height={190}
          alt={'Logo'}
        />

        {Object.values(data.values).map((log: any) => (
          <div key={1}>

            <div className={cs('boxContainer')}>

              <div className={cs('humiBox', 'box')}>
                <div className={cs('boxTitle', 'humi')}>습도</div>
                <div className={cs('supplement')}>{log.humidity}%</div>
              </div>

              <div className={cs('humiBox', 'box', 'rightBox')}>
                <div className={cs('boxTitle', 'temp')}>온도</div>
                <div className={cs('supplement')}>{log.temperature}℃</div>
              </div>

              <div className={cs('humiBox', 'box', 'rightBox')}>
                <div className={cs('boxTitle', 'feelTemp')}>수위</div>
                <div className={cs('supplement')}>{log.water_level}</div>
              </div>

              <div className={cs('humiBox', 'box', 'rightBox')}>
                <div className={cs('boxTitle', 'ph')}>pH</div>
                <div className={cs('supplement')}>{log.ph}</div>
              </div>

            </div>
            <br/>
            <div className={cs('updatedTime')}>최신 업데이트
              <div style={{color: '#f00'}}>{log.date}</div>
            </div>
          </div>
        ))}

        <FancyModal/>
        <br/>
        <button className={cs('deleteButton')} onClick={onRemove}>
          <AiOutlineDelete/> 데이터 초기화
        </button>

        <div className="footer">
          <a href={'https://github.com/jinhyo-dev/Capstone-Project'} target={"blank"} className='footerFont'>© 2022 GBSW
            Team. Raise</a>
        </div>
      </>
    )
  }
}

export default Home