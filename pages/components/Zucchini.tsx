import React from "react";
import Image from "next/image";

const Zucchini = () => {
  return (
    <div className='descriptionPage'>

      <div>
        <div className='plantTitle'>애호박</div>
        <Image
          src={'/images/zucchini.png'}
          alt="Picture of the author"
          width={400}
          height={300}
        />
      </div>

      <div className='description'>
        적정온도: 낮의 온도를 20~21℃, 밤의 온도를 10℃ 정도로 낮게 관리한다<br/>
        물 주는 주기: 3~6월까지는 3~5일 간격, 11~2월까지는 5~7일 간격이 좋았으며, 주당 관수량은
        10월~4월까지는 2ℓ정도, 5월~6월까지는 4ℓ정도<br/>
        수확시기: 보통 6월 초부터 호박 잎과 애호박을 수시로 수확가능
      </div>
    </div>
  )
}

export default Zucchini