import React from 'react'
import '../App.css';

const MemberTeam = ({deleteSuper, showMember, superh}) => {

    

    return (

        <div className="card-deck mb-3 text-center mt-3 cardTeam ">
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h6>{superh.name}</h6>
                </div>
                <div className="card-body">
                    <div className="card-title"></div>
                    <img src={superh.image.url} alt="imgHero"/>
                    
                        <small className="">Alignment: {superh.biography.alignment}</small>
                   
                    <div className="btn-group">
                        <button onClick={() => {showMember(superh.id)}} className="btn btn-info my-1 py-0 px-1">Details</button>
                        <button onClick={() => {deleteSuper(superh.id)}} className="btn btn-danger my-1 py-0 px-1">Remove</button>
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default MemberTeam
