

import React, { Fragment } from 'react'

import i_super from '../img/i-superpowers.svg'
import i_dummble from '../img/i-dumbbell.svg'
import i_bolt from '../img/i-bolt.svg'
import i_brain from '../img/i-brain.svg'
import i_history from '../img/i-history.svg'
import i_hand from '../img/i-hand.svg'
import i_weight from '../img/i-weight.svg'
import i_ruler from '../img/i-ruler.svg'





const Resume = ({team}) => {

    
    let intelligence = 0
    let combat = 0
    let durability = 0
    let power = 0
    let speed = 0
    let strength = 0
    let height = 0
    let weight =0
    let promH = 0
    let promW = 0
    
    if (team) {
    
        team.forEach(hero => {        
            hero.powerstats.intelligence !== "null" ?  intelligence += parseInt(hero.powerstats.intelligence) : intelligence +=0        
            hero.powerstats.combat !== "null" ? combat += parseInt(hero.powerstats.combat): combat+=0
            hero.powerstats.durability !== "null" ? durability += parseInt(hero.powerstats.durability) : durability +=0
            hero.powerstats.power !== "null" ? power += parseInt(hero.powerstats.power) : power += 0
            hero.powerstats.speed !== "null" ? speed += parseInt(hero.powerstats.speed): speed += 0
            hero.powerstats.strength !== "null" ? strength += parseInt(hero.powerstats.strength) : strength += 0
            height+= parseFloat(hero.appearance.height[1].slice(0,3))
            weight+= parseFloat(hero.appearance.weight[1].slice(0,3))
            
        })
        promH = (height/team.length).toFixed(2)
        promW = (weight/team.length).toFixed(2)
}
    
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


    return (

        <div className="container-fluid row justify-content-between">            
            {
                team ?
                (    <Fragment className="">
                        <section className="px-3 resume">
                            <h1>Resumen</h1>
                                {
                                    powerstats.map( powS =>{
                                        switch (powS.key){
                                            case "Intelligence": 
                                                return (
                                                    <div key={powS.key} className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_brain} alt="" />                                                
                                                        <label className="h5">{powS.key}</label>                                                
                                                        <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                        <span>{powS.value}</span>
                                                    </div> 
                                                    )  
                                            break
                                            case "Combat":
                                                return (
                                                    <div key={powS.key} className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_hand} alt="" />                                                
                                                        <label className="h5" for={powS.key}>{powS.key}</label>                                                
                                                        <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                        <span>{powS.value}</span>
                                                    </div> 
                                                    )  
                                            break
                                            case "Durability":
                                                return (
                                                    <div key={powS.key} className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_history} alt="" />                                                
                                                        <label className="h5" for={powS.key}>{powS.key}</label>                                                
                                                        <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                        <span>{powS.value}</span>
                                                    </div> 
                                                    )  
                                            break
                                            case "Power":
                                                return (
                                                    <div key={powS.key} className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_super} alt="" />                                                
                                                        <label className="h5" for={powS.key}>{powS.key}</label>                                                
                                                        <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                        <span>{powS.value}</span>
                                                    </div> 
                                                    )  
                                            break
                                            case "Speed":
                                                return (
                                                    <div key={powS.key} className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_bolt} alt="" />                                                
                                                        <label className="h5" for={powS.key}>{powS.key}</label>                                                
                                                        <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                        <span>{powS.value}</span>
                                                    </div> 
                                                    )  
                                            break
                                            case "Strength":
                                                return (
                                                    <div key={powS.key} className="row justify-content-between border p-2 center powS mb-1" >
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
                                    <div className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_ruler} alt="i_ruler" />                                                
                                                        <label className="h5" >Height</label>                                                
                                                        <progress max="200" value={promH}> {promH}% </progress>
                                                        <span>{promH}</span>
                                    </div>
                                    <div className="row justify-content-between border p-2 center powS mb-1" >
                                                        <img src={i_weight} alt="i_weight" />                                                
                                                        <label className="h5" >Weight</label>                                                
                                                        <progress max="200" value={promW}> {promW}% </progress>
                                                        <span>{promW}</span>
                                    </div>
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
