import React from 'react';

const dashboard = {
    width : '30%',
    textAlign: 'center',
    color: '#fa9191',
    
  }
//let date_current = new Date(2020,11,6,13);

function Pro()
{
    let date_current = new Date();
    date_current = date_current.getHours();
    const date1= new Date().toLocaleDateString();
    const date= new Date();
    const time= new Date().toLocaleTimeString();
    let greeting = '';
    const css_style = { } ;
                   
                if(date_current>=1 && date_current <12)
                    {
                        greeting = 'Good Morning';
                        css_style.color = 'skyblue';
                    }
                else if(date_current>=12 && date_current <=19)
                    {
                         greeting = 'Good Afternoon';
                        css_style.color = 'green';
                    }
                else
                    {
                        greeting = "Good Night";
                        css_style.color = 'black';
                    }
    return (
        <>
                 <p> Current date : {`${date}`} </p>
                 <p> New modified date : {date1} </p>
                 <p> New modified time : {time} </p>
                 <div style={dashboard}>
                    <h1> <span style={css_style}> {greeting}  </span> Admin </h1>
                 </div>
        </>
    );
}

export default Pro;