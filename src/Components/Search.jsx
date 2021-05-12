import React, { useEffect, useState } from 'react'
import Detail from './Detail';
import Team from './Team';
import FormSearch from './FormSearch';
// import axios from 'axios';



const Search = () => {

    const [superhero, setSuperhero] = useState(null)
    const [team, setTeam] = useState([])
    const [idSuper, setIdSuper] = useState('')
    const [error, setError]= useState('')
    const [byName, setByName]= useState(null)
    const [results, setResults] = useState([])
    const [superOfTeam, setSuperOfTeam] = useState(null)
    // const [validTeam, setValidTeam] = false;


    useEffect(() => {
        
    }, [])    
    
    const getSuperhero = async (id, e) => {   
       
        const data = await fetch('https://superheroapi.com/api/10158049106275592/'+id)
            .then(r => r.json())
            .catch(e => console.log(e))
        setResults('')
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
        } else{
            setResults('')
            setError('Name not found')
        }
        
        console.log(results);

    }

    const addSuper = () =>{
                
        setTeam([
            ...team, 
            superhero
        ]);
        // setValidTeam(true)
    }
    const viewSuper = () =>{
                
        setSuperOfTeam();
        // setValidTeam(true)
    }

    const deleteSuper = (id) =>{
        console.log(id);
        setTeam(team.filter(hero => hero.id !== id))
    }


    return (
        <div className="container-fluid row">
            <div className="ml-3 row justify-content-around">
                <div className="card ">                    
                    <div className="card-body search">
                        <h5 className="card-title">Search by Id</h5>                        
                        <FormSearch getSuperhero={getSuperhero} ></FormSearch>
                        <h5 className="card-title mt-2">Search by Name</h5>
                        <form id="formularioByName" onSubmit={getSuperheroToName} className="form-inline justify-content-center">
                            <input required value={byName} onChange={(e) => { setByName(e.target.value)}} placeholder="Insert a Name"  className="mt-2 form-control" />                    
                            <input type="submit" value="Search" className="btn btn-primary mt-2 ml-2" />
                        </form>
                    </div>
                </div>
                <div className=" card-deck text-center row">
                {
                    superhero ? 
                    (
                        
                            <div className="col-12">
                                <Detail superh={superhero} ></Detail>
                                <button onClick={addSuper} className="mx-auto my-1 py-0 btn btn-success">Add</button>
                            </div>     
                            
                        
                        
                    )
                    :
                    (
                        <div className="col-6">Search a hero </div>,
                        results ? 
                        (
                            <div className="col-6"> Results, Search by Id</div>,
                            results.map(item =>
                                <li key={item.id}><strong>{item.id}</strong> {item.name}</li>
                            )
                            
                        )
                        :
                        (
                            <span></span>
                        )
                        
                    )
                }
                </div>
                {
                    team ?
                    (
                        <div className="col-12 mt-3 row">
                    {
                        team.map( hero => 
                            <Team key={hero.id} deleteSuper={deleteSuper} superh={hero}></Team>
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
            <div className="col-3">
                Resumen
                
            </div>
        </div>
    )
}

export default Search
