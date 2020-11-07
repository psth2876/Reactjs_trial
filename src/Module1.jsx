import React from 'react';

function Module1()
{
        const name= 'prashidha';
        const code = {
                width : '25%',
                height : '100px',
                // textAlign: 'center',
                color: '#fa9191'
            }

            const logos = {
                width : '55%',
                height : '200px',
                // textAlign: 'center',
                color: '#fa9191'
            }

    return (
        <>
                <div style={ code }>
                    <img src="logo192.png" style={logos} alt="Images" />
                    {/* <h1> My name is {`${name}`} </h1> */}
                </div>
        </>
    );
}

export default Module1;


