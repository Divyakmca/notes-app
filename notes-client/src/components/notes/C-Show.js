import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

class CategoriesShow extends React.Component{
    constructor(){
        super()
            this.state={
                notes:[],
                category:{}
            } 
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/categories/${id}`)
        .then(response=>{
            console.log(response.data.category)
            console.log(response.data.notes)

        this.setState(()=>({
            category:response.data.category,
            notes:response.data.notes
        }))
        })
        
    }
     handleDelete=(e)=>{
         const id=this.props.match.params.id
         const confirmRemove=window.confirm('Are you sure?')
         if(confirmRemove){
             axios.delete(`/categories/${id}`)
             .then(()=>{
                 this.props.history.push('/categories')
                
             })
         }
     }

    render(){
        return(
            <div>
                {/* <p>{this.state.category.note && this.state.category.note.name}</p> */}
                {/* <p>{this.state.category.name}</p> */}
                <p>list of notes</p>
                <ul>
                 {this.state.notes.map((note)=>{
                return <li key={note._id}> {note.title}
                 </li>

                })}
                </ul>

            <Link to='/categories'>Back</Link>
            <Link to={`/categories/edit/${this.props.match.params.id}`}>Edit</Link>

            <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default CategoriesShow