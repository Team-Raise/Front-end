import React from "react";
import Image from "next/image";

const Spinach = () => {
  return (
    <div className='descriptionPage'>

      <div>
        <div className='plantTitle'>시금치</div>
        <Image
          src={'/images/spinach.png'}
          alt="Picture of the author"
          width={300}
          height={300}
        />
        </div>

      <div className='description'>
        적정온도: 15~20도<br/>
        물 주는 주기: 보통(건조에 극히 약함)<br/>
        수확시기: 시금치 키가 20cm 이상되면 수확(가위나 칼로 잘라 수확)
      </div>

    </div>
  )
}

export default Spinach