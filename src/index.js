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
  height : '50vh',
  textAlign : 'center',
  marginRight : 'auto',
  marginLeft : 'auto',
  display : 'flex'
}


ReactDOM.render(
  
  <>
  {/* <div style={main_div}>
        <Module1/>
        <Linker/>
  </div> */}

    <div style={flex_div}>
         <div className="card_info">
                <h3 className="card_title" style={card_title}> A netflix Original Series </h3>
          </div>

         <div className="card_flexs" style={card_flexs}>
              <Netflix 
                  imgsrc={CardDetails[0].imgsrc} 
                  title="" 
                  link="https://netflix.com" 
              />
              <Netflix 
                  imgsrc={CardDetails[1].imgsrc} 
                  title="" 
                  link="https://netflix.com"
              />
              <Netflix 
                  imgsrc={CardDetails[2].imgsrc} 
                  title=""
                  link="https://netflix.com"
              />
              <Netflix 
                  imgsrc={CardDetails[3].imgsrc} 
                  title="" 
                  link="https://netflix.com"
              />
              <Netflix 
                  imgsrc={CardDetails[4].imgsrc} 
                  title="" 
                  link="https://netflix.com"
              />
              {/* <Netflix 
                  imgsrc={CardDetails[5].imgsrc} 
                  title="" 
                  link="https://netflix.com"
              /> */}
          </div>

          
         {/* <div className="card_info">
                <h3 className="card_title" style={card_title}> A Shardians Original Series </h3>
          </div>
          <div className="card_flexs" style={card_flexs}>
              <Netflix 
                  imgsrc={CardDetails[6].imgsrc} 
                  title="" 
                  link="https://netflix.com" 
              />
              <Netflix 
                  imgsrc={CardDetails[7].imgsrc} 
                  title="" 
                  link="https://netflix.com"
              />
              <Netflix 
                  imgsrc={CardDetails[8].imgsrc} 
                  title=""
                  link="https://netflix.com"
              />
              <Netflix 
                  imgsrc={CardDetails[9].imgsrc} 
                  title="" 
                  link="https://netflix.com"
              />
              <Netflix 
                  imgsrc={CardDetails[10].imgsrc} 
                  title="" 
                  link="https://netflix.com"
              />
             
          </div> */}
    </div>
    
  </>,
  document.getElementById('root')
);

