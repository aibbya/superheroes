import React, { Fragment} from 'react'

const ListOfResultsByName = (props) => {
    
    const results = props.results;

    return (
        <Fragment>
            {
                results ? 
                    (
                        results.map(item =>
                            <li className="ml-2 d-inline" key={item.id}><strong>{item.id}</strong> {item.name}</li>
                        )
                    )
                    :
                    (
                        <span></span>
                    )
            }
        </Fragment>
    )
}

export default ListOfResultsByName





// const FormSearch = (props) => {

//     const {register, handleSubmit, errors} = useForm();

//     const onSubmit = (data, e)=>{
        
//         // e.preventDefault()
//         console.log('gfkygfkjyh');
//         console.log(data)

//         props.getSuperhero(data.idHero)

//         e.target.reset()
//     }

//     return (
//         <Fragment>
//             <form id="formulario" onSubmit={handleSubmit(onSubmit)} className="form-inline justify-content-center">
//                 <input type="number" name="idHero" {...register("idHero", { required: true })} placeholder="Insert a Number"  className="mt-2 form-control"/>
//                 <span className="alert-danger">
//                     {errors?.idHero?.message}
//                 </span>                    
//                 <input type="submit" value="Search" className="btn btn-primary mt-2 ml-2" />
//             </form>
//         </Fragment>
//     )
// }

// export default FormSearch
