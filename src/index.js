import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* Hide and Show Header on Scroll */
  // let doc = document.documentElement
  // let w = window
  
  // let curScroll =  w.scrollY || doc.scrollTop;
  // let prevScroll = w.scrollY || doc.scrollTop;
  
  // let curDirection =  0;
  // let prevDirection = 0;

  // let treshold = 400;
  // let toggled;

  // // scroll Up => 1
  // // scroll Down => 2
  // // initial scroll => 0

  // const header = document.getElementById("header")
  // const checkScroll = () => {
  //   curScroll = w.scrollY || doc.scrollTop
  //   if(curScroll > prevScroll){
  //     // scrolled down
  //     curDirection = 2
  //   } else {
  //     // scrolled up
  //     curDirection = 1
  //   }
  //   if(curDirection !== prevDirection){
  //     toggled = toggleHeader()
  //   }

  //   if(toggled){
  //     prevDirection = curDirection
  //   }
  //   prevScroll = curScroll
  // }
  // const toggleHeader = () => {
  //   if(curDirection === 2 && curScroll > treshold){
  //     // when scrolling down
  //       header.classList.add('hide')
  //   } else if(curDirection === 1){
  //     // when scrolling up
  //     header.classList.remove('hide')
  //     header.classList.add('white')
  //     // header.style.display = "flex"
  //   } else {
  //     toggled = false
  //   }
  //   return toggled
  // }
  // window.addEventListener('scroll', checkScroll)
/* End hide and show header */
