import React, {useState} from "react";
import classNames from 'classnames/bind'
import style from '../../styles/growPlants.module.scss'
import Spinach from "../components/Spinach";
import Lettuce from "../components/Lettuce";
import CherryTomato from '../components/CherryTomato'
import Cabbage from "../components/Cabbage";
import Pepper from "../components/Pepper";
import Eggplant from "../components/Eggplant";
import Zucchini from "../components/Zucchini";
import Sesame from "../components/Sesame";
import DesktopNav from "../components/DesktopNav";

const cs = classNames.bind(style)

const GrowPlant = () => {

  const [selectedOption, setSelectedOption] = useState<string>('')

  console.log(selectedOption)

  return (
    <>
      <DesktopNav/>
      <h1>식물도감 페이지</h1>
      <div className={cs('buttonContainer')}>
        <button onClick={() => setSelectedOption('spinach')} className={cs('button')}>시금치</button>
        <button onClick={() => setSelectedOption('lettuce')} className={cs('button')}>상추</button>
        <button onClick={() => setSelectedOption('sesame')} className={cs('button')}>깻잎</button>
        <button onClick={() => setSelectedOption('cherryTomato')} className={cs('button')}>방울토마토</button>
        <button onClick={() => setSelectedOption('cabbage')} className={cs('button')}>배추</button>
        <button onClick={() => setSelectedOption('pepper')} className={cs('button')}>고추</button>
        <button onClick={() => setSelectedOption('eggplant')} className={cs('button')}>가지</button>
        <button onClick={() => setSelectedOption('zucchini')} className={cs('button')}>애호박</button>
      </div>

      {
        selectedOption === '' && (
          <div className={cs('beforeChoice')}>재배 할 식물을 선택하여주세요.</div>
        )
      }

      {
        selectedOption === 'spinach' && (
          <Spinach/>
        )
      }

      {
        selectedOption === 'lettuce' && (
          <Lettuce/>
        )
      }

      {
        selectedOption === 'sesame' && (
          <Sesame/>
        )
      }

      {
        selectedOption === 'cherryTomato' && (
          <CherryTomato/>
        )
      }

      {
        selectedOption === 'cabbage' && (
          <Cabbage/>
        )
      }

      {
        selectedOption === 'pepper' && (
          <Pepper/>
        )
      }

      {
        selectedOption === 'eggplant' && (
          <Eggplant/>
        )
      }

      {
        selectedOption === 'zucchini' && (
          <Zucchini/>
        )
      }

    </>
  )
}

export default GrowPlant