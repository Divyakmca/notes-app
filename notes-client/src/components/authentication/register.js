import React from 'react'
import axios from '../../config/axios'


class NotesRegister extends React.Component{
    constructor(){
    super()
    this.state={
        username:'',
        email:'',
        password:''
    }
    this.handleInput=this.handleInput.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    //this.handleClick=this.handleClick.bind(this)
}
handleInput(e){
    e.persist()
    this.setState(()=>({
        [e.target.name]:e.target.value
    }))
}
handleSubmit(e){
    e.preventDefault()
    const formData={
        username:this.state.username,
        email:this.state.email,
        password:this.state.password
    }
    console.log(formData)
    axios.post(`/users/register`,formData)
    .then(response=>{
        console.log(response.data)
        if(response.data.errors){
            alert(response.data.message)
        }else{
            this.props.history.push('/users/login')
        }
    })
}

// handleClick(e){
//     this.setState((prevState) => ({
//         modal: !prevState.modal
//     }))

// }

render(){
    return(
        <div className="container">
         {/* <button type="button" class="btn btn-primary" data-toggle={this.state.modal} data-target="#exampleModal" onClick={this.handleClick}>
        Launch demo modal
      </button>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
     <div className="modal-content">

    <div className="modal-header">
           <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
        </button>
      </div>

     <div className="modal-body">  */}
            <form onSubmit={this.handleSubmit}>

         <div className="form-group">
            <label htmlFor="login">Username:</label>
                <input type="text" value={this.state.value}
                 onChange={this.handleInput} name="username" className="form-control" id="login"/>
         </div>

        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" value={this.state.value}
                 onChange={this.handleInput} name="email"  className="form-control" id="email"/>
            
        </div>
            

        <div className="form-group">
            <label htmlFor = "pass">Password:</label>
            <input type="password" value={this.state.value}
                 onChange={this.handleInput} name="password" className="form-control" id="pass"/>
            
        </div>
            

            
           <input type="submit"/>  
         
        </form>
        </div>

        //  </div>
        //  </div></div>
        //  </div>
        
     
       
       
        
    )
}
}

export default NotesRegister