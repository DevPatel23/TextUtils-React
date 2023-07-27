// import React, {useState} from 'react'

export default function About(props) {
    
    let myStyle = {
        // color: 'white',
        // backgroundColor: 'black'

        backgroundColor: props.mode ==='light' ? 'white':'#212529',
        color: props.mode ==='light' ? 'black':'white',
        }
        
    // const[myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    // const[btntext, setBtnText] = useState("Enable Dark Mode");
        
        
    // const toggleStyle = () =>{
    //     if (myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     } 
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    

  return (
    <>
    <div className="container ">
        <h1 className="my-3" style={myStyle}>About Us</h1>
        <div className="loadingIcon my-2" >
            <div className="spinner-border text-primary  mx-5" style={myStyle} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-secondary mx-5" style={myStyle} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-success mx-5" style={myStyle} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-danger mx-5" style={myStyle} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-warning mx-5" style={myStyle} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-info mx-5" style={myStyle} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-light mx-5" style={myStyle} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtils</strong> gives you a way to analyze your text quickly and efficiently. BE it word, character count.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong> Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtils</strong> is a free character counter tool that providesinstant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word lomit.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong> Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        This word conter works in any web browser such as Chrome, Firefox, Internet Explorer, Safari.
                    </div>
                </div>
            </div>
        </div>
{/* 
        <div className="container my-2" style={myStyle}>
            <button className="btn btn-warning mx-2 my-2" onClick={toggleStyle}>{btntext}</button>
        </div> */}

    </div>
    </>
  )
}
