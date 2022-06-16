import React from 'react'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import classNames from 'classnames/bind'
import styles from '../styles/arduinoValue.module.css'

const cs = classNames.bind(styles)

const Home = () => {
  const { data, error } = useSWR('/api/DB', fetcher)

  if (error) {
    return (
      <div>error</div>
    )
  } else if (!data) {
    return (
      <div>loading...</div>
    )
  } else {
    return (
      <>
        {Object.values(data.values).map((log: any) => (
          <div key={1}>
            <div className={cs('updatedTime')}><br/>{log.date}</div>

            <div className={cs('titleBox')}>
              <div className={cs('title')}>Smart Farm</div>
              <div className={cs('teamName')}>Team. Raise</div>
            </div>

            <div className={cs('boxContainer')}>

              <div className={cs('humiBox', 'box')}>
                <div className={cs('boxTitle', 'humi')}>습도</div>
                <div className={cs('supplement')}>{log.humi}%</div>
              </div>

              <div className={cs('humiBox', 'box', 'rightBox')}>
                <div className={cs('boxTitle', 'temp')}>온도</div>
                <div className={cs('supplement')}>{log.temp}℃</div>
              </div>

              <div className={cs('humiBox', 'box', 'rightBox')}>
                <div className={cs('boxTitle', 'feelTemp')}>체감온도</div>
                <div className={cs('supplement')}>{log.hic}℃</div>
              </div>

            </div>
          </div>
        ))}
      </>
    )
  }
}

export default Home