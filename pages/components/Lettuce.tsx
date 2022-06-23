import React from "react";
import Image from 'next/image'

const Lettuce = () => {
  return (
    <div>
      <div>
        <div>상추</div>
        <Image
          src={'/images/lettuce.png'}
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </div>
      <div>
        적정온도: 15~20도<br/>
        물 주는 주기: 봄, 가을에는 3∼5일 간격, 여름에는 2∼3일 간격<br/>
        수확시기: 5월 중순~6월말, 9월 중순~ 11월초
      </div>
    </div>
  )
}

export default Lettuce