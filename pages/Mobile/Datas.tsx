import React, { useState, useEffect, useRef } from "react"
import useSWR from 'swr'
import fetcher from '../../utils/fetcher'
import classNames from 'classnames/bind'
import styles from '../../styles/MobileData.module.scss'
import { useRouter } from "next/router";
import MobileNav from '../components/MobileNav'
import Loading from "../components/Loading"
import Image from "next/image";
import FancyModal from "../components/FancyModal";
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { IoReloadOutline } from "react-icons/io5"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cs = classNames.bind(styles)

const Admin = () => {
  const router = useRouter()
  const [cookies, setCookie] = useCookies(['isAdmin']);
  const token = cookies.isAdmin

  const { data, error } = useSWR('/api/DB', fetcher)

  if (cookies.isAdmin) {
    toast.success('관리자님, 환영합니다!', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    })
  }

  const truncate = async () => {
    await axios.get('/api/DeleteData')
  }

  const onRemove = () => {
    if (window.confirm("정말로 모든 데이터를 초기화시키겠습니까?")) {
      truncate()
      alert('삭제되었습니다.')
      location.reload()
    }
  };

  if (error) {
    return (
      <div>error</div>
    )
  } else if (!data) {
    return <Loading />
  } else {
    if (data.values.length === 0) {
      return (
        <>
          <MobileNav />
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
          <MobileNav />

          <img
            src={'/images/logo.png'}
            alt={'Logo'}
            className={cs('logo')}
          />

          {Object.values(data.values).map((log: any) => (
            <div key={1}>


              <div className={cs('box')} style={{ marginTop: '2rem' }}>
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
                <div style={{ color: '#f00' }}>{log.date}</div>
              </div>

            </div>
          ))}

          <FancyModal />
          <br />
          <button className={cs('reloadButton')} onClick={() => location.reload()}>
            <IoReloadOutline /> 새로 고침
          </button>

          {token &&
            <button className={cs('deleteButton')} onClick={onRemove}>
              <AiOutlineDelete /> 데이터 초기화
            </button>
          }
          <ToastContainer />
        </>
      )
    }
  }
}

export default Admin