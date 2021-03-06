import React from "react";
import Image from "next/image";

const Eggplant = () => {
  return (
    <div className='descriptionPage'>

      <div>
        <div className='plantTitle'>가지</div>
        <Image
          src={'/images/eggPlant.png'}
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </div>

      <div className='description'>
        적정온도: 적당한 주간 온도는 25~28℃이고 야간에는 18~20℃<br/>
        물 주는 주기: 기온이 낮을 때는 3~4일 간격으로 물을 주면 되지만, 여름철에는 1~2일에 한번씩 물<br/>
        수확시기: 7월 중순부터 서리가 내리기 전인 10월 중순
      </div>
    </div>
  )
}

export default Eggplant