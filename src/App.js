/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let posts='강남 고기 맛집';
 let [title,titleChange]= useState(['남자 코트 추천','강남 우동 맛집','회기 삼겹살']);
let[cnt,cntChange]=useState(0);

function 제목변경(){
  let newArray=[...title];//deep copy 를 해야 값 공유가 안됨, 무조건 이런식으로. 
  newArray[0]='여자코트 추천';//원하는 부분의 데이터 변경 후 스테이트변경. 
  titleChange(newArray);
}
  return (
    <div className="App">
     <div className="black-nav">
       <div>개발 Blog</div>
       {/* 리액트에서 style은 오브젝트형 */}
     </div>
     <button onClick={제목변경}>버튼</button>
     <div className='list'>
       <h4>{title[0]} <span onClick={()=>{
         cntChange(cnt++);
       }}>👍</span> {cnt} </h4>
       <p>2월 17일 발행</p>
       <hr/>
       </div>
       <div className='list'>
       <h4>{title[1]}</h4>
       <p>2월 17일 발행</p>
       <hr/>
       </div>
       <div className='list'>
       <h4>{title[2]}</h4>
       <p>2월 17일 발행</p>
       <hr/>
       </div>
    </div>
  );
}

export default App;
