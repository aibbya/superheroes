import React from 'react'
import '../App.css';
import Btn from './Btn';


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
                        <Btn deleteSuper={deleteSuper} showMember={showMember} superh={superh}></Btn>
                </div>
            </div>
        </div>
    )
}

export default MemberTeam
