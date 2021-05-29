import React from 'react'
import '../App.css';

const Btn = ({deleteSuper, showMember, superh}) => {

    

    return (

        
                    <div className="btn-group">
                        <button onClick={() => {showMember(superh.id)}} className="btn btn-info my-1 py-0 px-1">Details</button>
                        <button onClick={() => {deleteSuper(superh.id)}} className="btn btn-danger my-1 py-0 px-1">Remove</button>
                    </div>                  
           
    )
}

export default Btn
