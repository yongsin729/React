/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


// function forUI(){
//   let arr= [];
//   for(let i=0;i<3;i++){
//     arr.push(<div>내용</div>);
//   }
//   return arr;
// }// react 에서 반복문 사용법  

function App() {

  let posts='강남 고기 맛집';
 let [title,titleChange]= useState(['남자 코트 추천','강남 우동 맛집','회기 삼겹살']);
let[cnt,cntChange]=useState([0,0,0]);
let[modal,modalChange]=useState(false);

function 제목변경(){
  let newArray=[...title];//deep copy 를 해야 값 공유가 안됨, 무조건 이런식으로. 
  newArray[0]='여자코트 추천';//원하는 부분의 데이터 변경 후 스테이트변경. 
  titleChange(newArray);
}
function 따봉(i){
  let tmp=[...cnt];
  tmp[i]++;
  cntChange(tmp);
}


  return (
    
    <div className="App">
     <div className="black-nav">
       <div>개발 Blog</div>
       {/* 리액트에서 style은 오브젝트형 */}
     </div>
    
       {
         title.map(function(a,i){
           return (
            <div className='list'>
            <h4>{a} <span onClick={()=>{//i 는 state안에 있는 각각의 데이터 
              따봉(i)
            }}>👍</span> {cnt[i]} </h4>
            <p>2월 17일 발행</p>
            <hr/>
            </div>
           )
         })
       }


       <button onClick={()=>{
        modalChange(!modal)
        //  modal===false
        //  ? modalChange(modal=true)
        //  : modalChange(modal=false)
       }}>버튼</button>

       {
         modal===true
         ? <Modal></Modal>
         : null
       }

    </div>
  );
}

function Modal(){// Component는 대괄호로 
  return(
    <>
    <div className='modal'>
         <h2>제목</h2>
         <p>날짜</p>
         <p>내용</p>
       </div>
       <div></div>
       </>
  )

}
export default App;
