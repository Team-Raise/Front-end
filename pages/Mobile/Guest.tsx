import React, {useState, useEffect, useRef} from "react"
import useSWR from 'swr'
import fetcher from '../../utils/fetcher'
import classNames from 'classnames/bind'
import styles from '../../styles/MobileData.module.scss'
import MobileNav from '../components/MobileNav'
import Loading from "../components/Loading"
import Image from "next/image";
import FancyModal from "../components/FancyModal";
import {IoReloadOutline} from "react-icons/io5"

const cs = classNames.bind(styles)

const Guest = () => {

  const {data, error} = useSWR('/api/DB', fetcher)

  if (error) {
    return (
      <div>error</div>
    )
  } else if (!data) {
    return <Loading/>
  } else {
    if (data.values.length === 0) {
      return (
        <>
          <MobileNav/>

          <Image
            src={'/images/logo.png'}
            width={315}
            height={190}
            alt={'Logo'}
          />

          <h1 className={cs('notExist')}>현재 입력받은 데이터가 존재하지 않습니다.</h1>
        </>
      )

    } else {
      return (
        <>
          <MobileNav/>

          <img
            src={'/images/logo.png'}
            alt={'Logo'}
            className={cs('logo')}
          />

          {Object.values(data.values).map((log: any) => (
            <div key={1}>


              <div className={cs('box')} style={{marginTop: '2rem'}}>
                <div className={cs('supplement')}><label className={cs('humi')}>습도</label> - {log.humidity}%</div>
              </div>

              <div className={cs('box')}>
                <div className={cs('supplement')}><label className={cs('temp')}>온도</label> - {log.temperature}℃</div>
              </div>

              <div className={cs('box')}>
                <div className={cs('supplement')}><label className={cs('waterLevel')}>수위</label> - {log.water_level}
                </div>
              </div>

              <div className={cs('box')}>
                <div className={cs('supplement')}><label className={cs('ph')}>pH</label> - {log.ph}</div>
              </div>

              <div className={cs('updatedTime')}>최신 업데이트
                <div style={{color: '#f00'}}>{log.date}</div>
              </div>

            </div>
          ))}

          <FancyModal/>
          <br/>
          <button className={cs('reloadButton')} onClick={() => location.reload()}>
            <IoReloadOutline/> 새로 고침
          </button>

        </>
      )
    }
  }
}

export default Guest