

import React, { useState, Fragment } from 'react'
import members from './MemberTeam';
import Swal from 'sweetalert'
import useLocalStorage from '../hooks/useLocalStorage'
import { Link, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


const Team = () => {

    const redi = localStorage.getItem("token")
    console.log(redi)
    const team = JSON.parse(localStorage.getItem("team"));
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
                    redi ?
                        (
                            team ?
                                (
                                    /* <div className="col-12 mt-3 row justify-content-around"> */
                                    <Fragment>
                                    <section className="col-xl-8">
                                        <div className="page-header">
                                            <h1>Team</h1>
                                        </div>
                                    <div className="row active-with-click teamView">
                                        {
                                            team.map(hero =>
                                                <div key={hero.id} className="col-md-4 col-sm-6 col-xs-12">
                                                    <article className="material-card Red">
                                                        <h2>
                                                            <span>{hero.name}</span>
                                                            <strong><i className="fa fa-fw fa-star"></i>
                                                            {
                                                                hero.biography.alignment !==  "bad" ? "Hero" : "Villian"
                                                            }
                                                            </strong>
                                                        </h2>
                                                        <div className="mc-content">
                                                            <div className="img-container">
                                                                <img className="img-responsive" src={hero.image.url} />
                                                            </div>
                                                            <div className="mc-description">
                                                                <p>
                                                                Aliases: {hero.biography.aliases}, Alter-egos: {hero.biography["alter-egos"]},
                                                                First appearance in {hero.biography["first-appearance"]}. Born {hero.biography["place-of-birth"]}, 
                                                                Group affiliation: {hero.connections["group-affiliation"]} and relatives: {hero.connections["relatives"]}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <a className="mc-btn-action">
                                                            <i className="fa fa-bars"></i>
                                                        </a>
                                                        <div className="mc-footer">
                                                            <h4>Powerstats</h4>    
                                                            <div>
                                                                <a class="" ><i class="fas fa-hand-rock"></i> {hero.powerstats.combat}</a>
                                                                <a class=""><i class="fas fa-history"></i> {hero.powerstats.durability}</a>
                                                                <a class=""><i class="fas fa-brain"></i> {hero.powerstats.intelligence}</a>
                                                                <a class=""><i class="fab fa-superpowers"></i> {hero.powerstats.power} </a>
                                                                <a class=""><i class="fas fa-bolt"></i> {hero.powerstats.speed}</a>
                                                                <a class=""><i class="fas fa-dumbbell"></i> {hero.powerstats.strength}</a>
                                                            </div>                    
                                                            
                                                        </div>
                                                    </article>
                                                </div>
                                            )
                                        }
                                        
                                    </div>
                                </section>
                                <section className="col-xl-3">
                                    <h1>Resumen</h1>
                                    {
                                        powerstats.map( powS =>{
                                            let icon = ''
                                            switch (powS.key){
                                                case "Intelligence": 
                                                    icon = "../../public/img/i-superpowers.svg"
                                                break
                                                case "Combat":
                                                    <i class="fas fa-hand-rock"></i>
                                                break
                                                case "Durability":
                                                    <i class="fas fa-history"></i>
                                                break
                                                case "Power":
                                                    icon = "../../public/img/i-superpowers.svg"
                                                break
                                                case "Speed":
                                                    <icon class="fas fa-bolt"></icon>
                                                break
                                                case "Strength":
                                                    <i class="fas fa-dumbbell"></i>
                                                break
                                            }
                                            
                                            return (
                                            <div className="row justify-content-between border p-2 center powS mb-1" >
                                                <img src="../../public/img/i-superpowers.svg" alt="" />
                                                <label className="h5" for={powS.key}>{powS.key}</label>                                                
                                                <progress id={powS.key} max="500" value={powS.value}> </progress>
                                                <span>{powS.value}</span>
                                            </div> )    
                                        })
                                    }
                                    
                                </section>
                                </Fragment>
                                
                                )
                                :
                                (
                                    <button className="btn btn-primary btn-inline"> <Link className="nav-link" to="/home">CREATE A TEAM</Link></button>
                                )

                        )
                        :
                        (
                            <Redirect to="/home" />
                        )
                }
            
        </div>
            
    )
}

export default Team
