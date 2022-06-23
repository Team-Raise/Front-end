import React from 'react';
import style from '../../styles/loading.module.scss'
import classNames from "classnames/bind";

const cs = classNames.bind(style)

const Loading = () => {
  return (
    <div className={cs('ring')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loading