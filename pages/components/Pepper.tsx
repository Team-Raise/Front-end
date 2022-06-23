import React from "react";
import Image from "next/image";

const Pepper = () => {
  return (
    <div>
      <div>
        <div>고추</div>
        <Image
          src={'/images/pepper.png'}
          alt="Picture of the author"
          width={400}
          height={300}
        />
      </div>
      <div>
        적정온도: 낮 온도 25℃ 내외, 밤 온도 20℃ 내외<br/>
        물 주는 주기: 4~5일<br/>
        수확시기: 7월 말 ~ 10월 초
      </div>
    </div>
  )
}

export default Pepper