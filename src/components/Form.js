import React, { useReducer } from 'react'
import useForm from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  
  const [user, dispatch] = useReducer((state, action) => {
     switch(action.type){
       case 'LIST_OF_USER':
         return [...state,
                 { 
                  fname: action.pay load.firstName, 
                  gender: action.payload.gender
                 }
                ]
       return state
     }
  },[]);


  const onSubmit = (data) => {
    dispatch({
      type: 'LIST_OF_USER',
      payload:  data 
    })
    console.log(user)
  }
  
  return (
    <React.Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" ref={register({ required: true })} />
        <select name="gender" ref={register}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        {errors.firstName && '<span>This field is required</span>'}
        <input type="submit" />
      </form>
      <table>
        <tr>
          <th>firstName</th>
          <th>Gender</th>
        </tr>
        
          {user.map(({ fname, gender }) => (
            <tr>
              <td>{fname}</td>
              <td>{gender}</td>
            </tr>
          ))}
       
      </table>
    </React.Fragment>
  );

}

export default Form;