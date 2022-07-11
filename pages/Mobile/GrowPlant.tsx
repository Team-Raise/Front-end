import React, {useState} from 'react'
import Select from 'react-select'
import styles from '../../styles/MobileGrowPlants.module.scss'
import classNames from 'classnames/bind'
import MobileNav from "../components/MobileNav";
import Spinach from "../components/Spinach";
import Lettuce from "../components/Lettuce";
import Sesame from "../components/Sesame";
import CherryTomato from "../components/CherryTomato";
import Cabbage from "../components/Cabbage";
import Pepper from "../components/Pepper";
import Eggplant from "../components/Eggplant";
import Zucchini from "../components/Zucchini";

const cs = classNames.bind(styles)

const GrowPlant = () => {
  const [value, setValue] = useState<string>('')
  console.log(value)

  const options = [
    {value: 'spinach', label: '시금치'},
    {value: 'lettuce', label: '상추'},
    {value: 'sesame', label: '깻잎'},
    {value: 'cherryTomato', label: '방울토마토'},
    {value: 'cabbage', label: '배추'},
    {value: 'pepper', label: '고추'},
    {value: 'eggplant', label: '가지'},
    {value: 'zucchini', label: '애호박'},
  ];

  return (
    <>
      <MobileNav/>
      <h1>식물도감 페이지</h1>
      <Select options={options} className={cs('select')} onChange={(e: any) => {
        setValue(e.value)
      }}/>

      {
        value === '' && (
          <div className={cs('beforeChoice')}>재배 할 식물을 선택하여주세요.</div>
        )
      }

      {
        value === 'spinach' && (
          <Spinach/>
        )
      }

      {
        value === 'lettuce' && (
          <Lettuce/>
        )
      }

      {
        value === 'sesame' && (
          <Sesame/>
        )
      }

      {
        value === 'cherryTomato' && (
          <CherryTomato/>
        )
      }

      {
        value === 'cabbage' && (
          <Cabbage/>
        )
      }

      {
        value === 'pepper' && (
          <Pepper/>
        )
      }

      {
        value === 'eggplant' && (
          <Eggplant/>
        )
      }

      {
        value === 'zucchini' && (
          <Zucchini/>
        )
      }
    </>
  )
}

export default GrowPlant