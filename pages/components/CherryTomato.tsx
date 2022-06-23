import React from "react";
import Image from "next/image";

const CherryTomato = () => {
  return (
    <div className='descriptionPage'>

      <div>
        <div className='plantTitle'>방울토마토</div>
        <Image
          src={'/images/cherryTomato.png'}
          alt="Picture of the author"
          width={300}
          height={200}
        />
      </div>

      <div className='description'>
      적정온도: 25~30도<br/>
      물 주는 주기: 오전에 흠뻑 물주기<br/>
      수확시기: 꽃이 피고 50일 정도 지나면 여름철에는 40%빨갛게  가을에는 70%가 익었을 때
      </div>
    </div>
  )
}

export default CherryTomato