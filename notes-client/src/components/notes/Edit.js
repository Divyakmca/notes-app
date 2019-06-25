import  React from 'react'
import NotesForm from './Forms'
import axios from '../../config/axios'

class NotesEdit extends React.Component{
    constructor(){
        super()
        this.state={
            note:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/notes/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
            this.setState(()=>({
                note:response.data
            }))
        })

    }
    handleSubmit=(formData)=>{
       
        axios.put(`/notes/${this.state.note._id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('error')){
                console.log(response.data.errors)
            }else{
                this.props.history.push(`/notes/${response.data._id}`)
            }
        }) 
    }
    render(){
        // console.log('edit notes render',this.state.note)
        return(
            <div>
                <h2>edit notes</h2>
                <NotesForm handleSubmit={this.handleSubmit} note={this.state.note}/>
            </div>
        )
        }
    }

    export default  NotesEdit