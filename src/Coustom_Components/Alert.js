import React from 'react'

export default function Alert(props) {

    const capitalize = (word) =>{
        let lowerWord = word.toLowerCase();
        return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    }

    return (
        <div style={{height: '30px'}}>
            {props.alert && 
            <div className={ `alert alert-${props.alert.type} alert-dismissible fade show` } role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
        </div>
        
    )
}


