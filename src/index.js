import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Linker from './Linker';
import Module1 from './Module1';
//import App from './App';
import Netflix from './Netflix';
import CardDetails from './CardDetails';

const main_div = {
  width : '100%',
  height : '100vh',
  backgroundColor : '#778899',
  display :'flex',
  overflow: 'hidden'
}

const flex_div = {
  width : '90%',
  height : '100vh',
  textAlign : 'center',
  marginRight : 'auto',
  marginLeft : 'auto',
  //display :'flex'
}

const card_title = {
  width : '100%',
  height : '50px'
}
const card_flexs = {
  width : '90%',
  height : '100vh',
  textAlign : 'center',
  marginRight : 'auto',
  marginLeft : 'auto',
  display : 'flex'
}

console.log(CardDetails[0]);
console.log(CardDetails[1]);
console.log(CardDetails[2]);
console.log(CardDetails[3]);
console.log(CardDetails[4]);
console.log(CardDetails[5]);
ReactDOM.render(
  <>
  {/* <React.StrictMode>
    <App />
  </React.StrictMode>  */}
  
  <div style={main_div}>
        <Module1/>
        <Linker/>
        
    </div>

<div style={flex_div}>
                        <div className="card_info">
                            <h3 className="card_title" style={card_title}> A netflix Original Series </h3>
                        </div>
           <div className="card_flexs" style={card_flexs}>
              <Netflix imgsrc={CardDetails[0].imgsrc} title="" link="https://netflix.com"/>
              {/* <Netflix imgsrc="breathe.jpg" title="" link="https://netflix.com"/>
              <Netflix imgsrc="heist.jpg" title="" link="https://netflix.com"/>
              <Netflix imgsrc="jj.jpg" title="" link="https://netflix.com"/>
              <Netflix imgsrc="purge.jpg" title="" link="https://netflix.com"/>
              <Netflix imgsrc="heist.jpg" title="" link="https://netflix.com"/> */}
              </div>
    </div>
    
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
