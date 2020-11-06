import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
const name= 'prashidha';
const date1= new Date().toLocaleDateString();
const date= new Date();
const time= new Date().toLocaleTimeString();

const code = {
  width : '1300px',
  //height : '200px',
  textAlign: 'center',
  color: '#fa9191'
}

const dashboard = {
  width : '700px',
  textAlign: 'center',
  color: '#fa9191'
}
const main_div = {
  width : 'auto',
  height : '100vh',
  backgroundColor : '#778899'
}

const css_style = { } ;
let date_current = new Date(2020,11,6,22);
date_current = date_current.getHours();
let greeting = '';

if(date_current>=1 && date_current <=12)
{
  greeting = 'Good Morning';
  css_style.color = 'skyblue';
}
else if(date_current>=12 && date_current <=19)
{
  greeting = 'Good Afternoon';
  css_style.color = 'grey';
}
else
{
  greeting = "Good Night";
  css_style.color = 'black';
}



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode> 

  <>
  <div style={main_div}>
    <div style={ code }>
      <h1> My name is {`${name}`} </h1>
      <p> Current date : {`${date}`} </p>
      <p> New modified date : {date1} </p>
      <p> New modified time : {time} </p>
      <img src="https://picsum.photos/200/300" alt="Images" />
    </div>

    <div style={dashboard}>
      <h1> <span style={css_style}> {greeting}  </span> Admin </h1>
    </div>
    </div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
