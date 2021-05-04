import React from 'react'
import '../App.css'

const Detail = ({superh}) => {

    return (
            <div className="card shadow-sm detail">
                <div className="card-header"><h3>{superh.name}</h3></div>
                    <div className="card-body">
                    <div className="card-title">{superh.biography['full-name']}</div>
                    <div className="row">
                        <div className="col-4">
                            <img src={superh.image.url} alt=""/>
                        </div>
                        <div className="col-8">
                            <ul className="list-unstyled mt-3 mb-4">
                                <li> Power {superh.powerstats.power}</li>
                                <li> Intelligence: {superh.powerstats.intelligence}</li>
                                <li> Combat: {superh.powerstats.combat}</li>
                                <li> Alignment: {superh.biography.alignment}</li>                               
                            </ul> 
                        </div>
                    </div>            
                </div>
            </div>
    )
}

export default Detail
