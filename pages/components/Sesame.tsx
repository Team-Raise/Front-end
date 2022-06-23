import React from "react";
import Image from "next/image";

const Sesame = () => {
  return (
    <div>
      <div>
        <div>깻잎</div>
        <Image
          src={'/images/sesame.png'}
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </div>
      <div>
        적정온도: 15~25도<br/>
        물 주는 주기: 식물이 힘이 없어 보일 때 물을 푹 싹 다 젖을 때까지<br/>
        수확시기: 줄기 위에 잎이 자라기 시작하면 여름(3~5일), 겨울(15~20일)간격으로 수확
      </div>
    </div>
  )
}

export default Sesame