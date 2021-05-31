import React, { Fragment } from 'react'
import { useFormik } from 'formik';


 const validate = values => {
    //  debugger
    const errors = {};
    if (!values.idHero) {
      errors.idHero = 'Required';
      console.log(typeof(values.idHero));
    } else if (parseInt(values.idHero) > 732 ) {
      errors.idHero = 'Must be 732 or less';
    }
    return errors;
  };
const FormSearch = (props) => {
     
      const formik = useFormik({
        initialValues: {
          idHero: ''          
        },
        validate,
        onSubmit: values => {
          props.getSuperhero(values.idHero)
        },
      });

    return (
        <Fragment>
            <form  onSubmit={formik.handleSubmit} id="formulario" className="form-inline justify-content-center">
                <input 
                    type="number" 
                    id="idHero" 
                    name="idHero"  
                    placeholder="Insert a Number" 
                    value={formik.values.idHero} 
                    onChange={formik.handleChange}  
                    className="mt-2 form-control"/>                    
                    <button type="submit" className="btn btn-primary mt-2 ml-2 text-small" >Search</button>
                    {formik.errors.idHero ? <span className="text-danger">{formik.errors.idHero}</span> : null}
            </form>
        </Fragment>
    )
}

export default FormSearch