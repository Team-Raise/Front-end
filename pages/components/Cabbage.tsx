import React from "react";
import Image from "next/image";

const Cabbage = () => {
  return (
    <div className='descriptionPage'>
      <div>
        <div className='plantTitle'>배추</div>
        <Image
          src={'/images/lettuce.png'}
          alt="Picture of the author"
          width={270}
          height={270}
        />
      </div>

      <div className='description'>
        적정온도: 15~18도<br/>
        물 주는 주기: 물주기는 매일하는 것보다 포트에 충분히 물이 스며들도록 물주기한 후 겉흙이 건조할 정도까지
        물을 주지 않는 것이 좋은 묘를 만드는데 효과적이다.<br/>
        수확시기:11월 중순부터 11월 말, 남부지방은 12월 중순까지
      </div>

    </div>
  )
}

export default Cabbage