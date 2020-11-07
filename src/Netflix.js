import React from 'react';

function Netflix(props)
{
    const dash_card = {
        width : '100%'
    }

    const cards = {
        width : '100%',
        height : '100vh',
        //display : 'flex',
        backgroundColor : '#778899'
    }

    const card = {
        width : '200px',
        height : '300px',
        display : 'flex'
    }

    const card_img = {
        width : '300px',
        height : '300px'
    }

    const card_title = {
        width : '100%',
        height : '50px'
    }
    
    //console.log(props);
    return(
        <>
        <div style={cards} >
            
                        {/* <div className="card_info">
                            <h3 className="card_title" style={card_title}> A netflix Original Series </h3>
                        </div> */}
                        

                <div style={ card }>
                <a href="https://netflix.com"  target="_blank">
                    <img src={props.imgsrc} style={card_img} alt="error images" className="card_img" />
                </a>
                </div>
                        
        </div>
        </>


    );
}

export default Netflix;