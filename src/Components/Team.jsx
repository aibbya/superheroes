import React from 'react'
import '../App.css';

const Team = ({deleteSuper, superh}) => {

    

    return (

        <div className="card-deck mb-3 text-center mt-3 cardTeam col-3">
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h6>{superh.name}</h6>
                </div>
                <div className="card-body">
                    <div className="card-title"></div>
                    <img src={superh.image.url} alt="imgHero"/>
                    <ul className="list-unstyled mt-3 mb-4">
                        {/* <li> Powerstat</li>
                         <li> Average</li>
                        <li> otra cosa</li> */}
                        {/* <li> Combat: {superhero.}</li> */}
                    </ul>
                    <div className="btn-group">
                        <button className="btn btn-info my-1 py-0 px-1">Details</button>
                        <button onClick={() => {deleteSuper(superh.id)}} className="btn btn-danger my-1 py-0 px-1">Remove</button>
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default Team
