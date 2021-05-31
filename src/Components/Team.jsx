

import React, { Fragment } from 'react'
import Swal from 'sweetalert'
import useLocalStorage from '../hooks/useLocalStorage'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import Btn from './Btn';
import Resume from './Resume';





const Team = () => {

    const redi = localStorage.getItem("token")
    console.log(redi)

    const [team, setTeam] = useLocalStorage('team')
    const deleteSuper = (id) =>{
        console.log(id);
        setTeam(team.filter(hero => hero.id !== id))
    }

    const showMember = (id) =>{
        
        let member = team.filter(hero => hero.id === id)
        console.log(member[0].name)
        Swal( member[0].biography["full-name"]+", Alias: "+ member[0].name, `Height: ${member[0].appearance.height[0]}, Weight: ${member[0].appearance.height[1]}, 
        Eyes: ${member[0].appearance["eye-color"]},  Hair: ${member[0].appearance["hair-color"]}, Work: ${member[0].work.base}`)

    }

   

    return (

        <div className="container-fluid row justify-content-between">            
                {
                    redi ?
                        (
                            team ?
                                (
                                    /* <div className="col-12 mt-3 row justify-content-around"> */
                                    <Fragment>
                                    <section className="col-xl-7">
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
                                                                <img className="img-responsive" src={hero.image.url}  alt="img-hero"/>
                                                            </div>
                                                            <div className="mc-description">
                                                                <p>
                                                                {/* Aliases: {hero.biography.aliases}, Alter-egos: {hero.biography["alter-egos"]},
                                                                First appearance in {hero.biography["first-appearance"]}. Born {hero.biography["place-of-birth"]},  */}
                                                                Group affiliation: {hero.connections["group-affiliation"]} 
                                                                {/* and relatives: {hero.connections["relatives"]} */}
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
                                                    <Btn deleteSuper={deleteSuper} showMember={showMember} superh={hero}></Btn>
                                                </div>
                                            )
                                        }
                                        
                                    </div>
                                </section>
                                 <section className="col-xl-4 justify-content-center">
                                <Resume team={team}></Resume>
                                
                                </section> 
                                </Fragment>
                                
                                )
                                :
                                (
                                    <div className="btn btn-info btn-inline"> <Link className="" to="/home">CREATE A TEAM</Link></div>
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
