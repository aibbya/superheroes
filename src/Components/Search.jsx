import React, { useEffect, useState } from 'react'
import Detail from './Detail';
import Team from './MemberTeam';
import FormSearch from './FormSearch';
// import axios from 'axios';
import ListOfResultsByName from './ListOfResultsByName';
import Swal from 'sweetalert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useLocalStorage from '../hooks/useLocalStorage'
import Resume from './Resume';


const Search = () => {

    const [superhero, setSuperhero] = useState(null)
    const [team, setTeam] = useLocalStorage('team')
    const [idSuper, setIdSuper] = useState('')
    const [error, setError]= useState('')
    const [byName, setByName]= useState(null)
    const [results, setResults] = useState([])
    const [superOfTeam, setSuperOfTeam] = useState(null)
    const [stateResults, setStateResults] = useState(false);
    const [msnError, setMsnError] = useState('')


    useEffect(() => {
        
    }, [])    
    
    const getSuperhero = async (id, e) => {   
       const data = await fetch('https://superheroapi.com/api/10158049106275592/'+id)
            .then(r => r.json())
            .catch(e => console.log(e))
        // setResults('')
        setSuperhero(data)
        console.log(data);
    }

    const getSuperheroToName = async (e)=>{
        e.preventDefault()
        setSuperhero('')
        if (!byName.trim()){
            setError('Insert a name')
            return
        }

        const dataByName = await fetch('https://superheroapi.com/api/10158049106275592/search/'+byName)
        .then(r =>   r.json())
        .catch(e => console.log(e))        
        console.log(dataByName)
        if(dataByName.response === "success"){
            setResults(dataByName.results)
            setStateResults(true)
        } else{
            setResults([])
            setStateResults(false)
            setMsnError('Name not found')
        }
        
        console.log(results);

    }
    const notifyAdd = () => 
        toast.success('🦄 Added!', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    const notifyError = (msn) => 
        toast.error(`🦄 Error! ${msn}`, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    

    const addSuper = () =>{

        let heroes = team.filter(hero => hero.biography.alignment !== "bad")
        console.log("heroes", heroes);
        let villains = team.filter(hero => hero.biography.alignment === "bad")
        console.log("villi", villains);
        let acceptVillian = villains.length < 3 ? true : false
        console.log(acceptVillian);
        let acceptHeroes = heroes.length < 3 ? true: false
        console.log(acceptHeroes);
        let idsTeam = team.map(hero => hero.id)
        let validMember = !idsTeam.includes(superhero.id)
        console.log(team.length)
        if (validMember) {
            if( team.length < 6 ){
                // debugger
                
                
                if (superhero.biography.alignment !== "bad" &&  acceptHeroes){
                    return (
                        setTeam([
                            ...team, 
                            superhero
                        ]),
                        notifyAdd()
                    )
                } else if (superhero.biography.alignment === "bad" &&  acceptVillian){
                    return (
                        setTeam([
                            ...team, 
                            superhero
                        ]),
                        notifyAdd()
                    )
                }else if (acceptHeroes === false ) {
                    return(
                        notifyError("Only 3 members with good orientation are allowed")
                    )
                    
                } else if (acceptVillian === false){
                    return(
                        notifyError("Only 3 members with bad orientation are allowed")
                    )
                    
                }

                debugger
                
            }else{
                notifyError("Only 6 members are allowed")
            }
        }else{
            notifyError("This character is already a member")
        }
        
               
    }
    const viewSuper = () =>{
                
        setSuperOfTeam();
        // setValidTeam(true)
    }

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
        <div className="container-fluid row justify-content-around">
            <div className="ml-3 row justify-content-around search-secc col-xl-7">
                <div className="card searchCard">                    
                    <div className="card-body search">
                        <h5 className="card-title">Search by Id</h5>                        
                        <FormSearch getSuperhero={getSuperhero} ></FormSearch>
                        <h6 className="card-title mt-5">Search Id by Name</h6>
                        <form id="formularioByName" onSubmit={getSuperheroToName} className="form-inline justify-content-center">
                            <input required value={byName} onChange={(e) => { setByName(e.target.value)}} placeholder="Insert a Name"  className="mt-2 form-control" />                    
                            <input type="submit" value="Search" className="btn btn-primary mt-2 ml-2" />
                        </form>
                        {
                            stateResults ? 
                            (
                                
                                <div className="listResults">
                                    <h6>Results by Name</h6>
                                    <ListOfResultsByName results={results}></ListOfResultsByName>
                                </div>
                                
                                
                            )
                            :
                            (
                                <span>search Id suggestions by name</span>
                            )
                        }
                    </div>
                </div>
                <div className=" card-deck text-center row">
                {
                    superhero ? 
                    (
                        
                            <div className="col-12">
                                <Detail superh={superhero} ></Detail>
                                <button onClick={addSuper} className="mx-auto my-1 py-0 btn btn-success">Add</button>
                                <ToastContainer />
                            </div>     
                            
                        
                        
                    )
                    :
                    (
                        <div className="">Search a hero by his Id</div>                        
                    )
                }
                </div>
                {
                    team ?
                    (
                        <div className="col-12 mt-3 row justify-content-around">
                            {
                                team.map( hero => 
                                    <Team key={hero.id} deleteSuper={deleteSuper} showMember={showMember} superh={hero}></Team>
                                )
                            }
                    
                        </div>
                    )
                    :
                    (
                        <span> Create a Team </span>
                    )
                }
                

                
            </div>
            <div className="col-xl-4">
                <Resume team={team}></Resume>
                
            </div>
        </div>
    )
}

export default Search
