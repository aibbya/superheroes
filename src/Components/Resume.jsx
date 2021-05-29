

import React, { useState, Fragment } from 'react'
import members from './MemberTeam';
import Swal from 'sweetalert'
import useLocalStorage from '../hooks/useLocalStorage'
import { Link, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import i_super from '../img/i-superpowers.svg'
import i_dummble from '../img/i-dumbbell.svg'
import i_bolt from '../img/i-bolt.svg'
import i_brain from '../img/i-brain.svg'
import i_history from '../img/i-history.svg'
import i_hand from '../img/i-hand.svg'




const Resume = ({team}) => {

    
    let intelligence = 0
    let combat = 0
    let durability = 0
    let power = 0
    let speed = 0
    let strength = 0   
    
    team.forEach(hero => {        
        hero.powerstats.intelligence !== "null" ?  intelligence += parseInt(hero.powerstats.intelligence) : intelligence +=0        
        hero.powerstats.combat !== "null" ? combat += parseInt(hero.powerstats.combat): combat+=0
        hero.powerstats.durability !== "null" ? durability += parseInt(hero.powerstats.durability) : durability +=0
        hero.powerstats.power !== "null" ? power += parseInt(hero.powerstats.power) : power += 0
        hero.powerstats.speed !== "null" ? speed += parseInt(hero.powerstats.speed): speed += 0
        hero.powerstats.strength !== "null" ? strength += parseInt(hero.powerstats.strength) : strength += 0
    });
    const powerstats = [
        { key : "Intelligence", value : intelligence},
        { key : "Combat", value : combat},
        { key : "Durability", value : durability},
        { key : "Power", value : power},
        { key : "Speed", value : speed},
        { key : "Strength", value : strength}
    ]
    
    powerstats.sort(function (a, b) {
          
        if (a.value > b.value) {
          return -1;
        }
        if (a.value < b.value) {
          return 1;
        }      
        return 0;
      });

    console.log(powerstats)
    console.log(intelligence, combat, durability, power, speed, strength)
    console.log(team)

    return (

        <div className="container-fluid row justify-content-between">            
            {
                team ?
                (    <Fragment className="p-5">
                        <section className="">
                            <h1>Resumen</h1>
                                {
                                    powerstats.map( powS =>{
                                        switch (powS.key){
                                            case "Intelligence": 
                                                return (
                                                    <div className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_brain} alt="" />                                                
                                                        <label className="h5" for={powS.key}>{powS.key}</label>                                                
                                                        <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                        <span>{powS.value}</span>
                                                    </div> 
                                                    )  
                                            break
                                            case "Combat":
                                                return (
                                                    <div className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_hand} alt="" />                                                
                                                        <label className="h5" for={powS.key}>{powS.key}</label>                                                
                                                        <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                        <span>{powS.value}</span>
                                                    </div> 
                                                    )  
                                            break
                                            case "Durability":
                                                return (
                                                    <div className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_history} alt="" />                                                
                                                        <label className="h5" for={powS.key}>{powS.key}</label>                                                
                                                        <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                        <span>{powS.value}</span>
                                                    </div> 
                                                    )  
                                            break
                                            case "Power":
                                                return (
                                                    <div className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_super} alt="" />                                                
                                                        <label className="h5" for={powS.key}>{powS.key}</label>                                                
                                                        <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                        <span>{powS.value}</span>
                                                    </div> 
                                                    )  
                                            break
                                            case "Speed":
                                                return (
                                                    <div className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_bolt} alt="" />                                                
                                                        <label className="h5" for={powS.key}>{powS.key}</label>                                                
                                                        <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                        <span>{powS.value}</span>
                                                    </div> 
                                                    )  
                                            break
                                            case "Strength":
                                                return (
                                                    <div className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_dummble} alt="" />                                                
                                                        <label className="h5" for={powS.key}>{powS.key}</label>                                                
                                                        <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                        <span>{powS.value}</span>
                                                    </div> 
                                                    )  
                                            break
                                            }
                                        })
                                    }
                                    
                                </section>
                                </Fragment>
                                
                )
                :
                (
                    <span></span>
                )

                       
                }
            
        </div>
            
    )
}

export default Resume
