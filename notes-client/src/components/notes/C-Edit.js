import React from 'react'
import CategoriesForms from './C-Foms'
import axios from '../../config/axios'

class CategoriesEdit extends React.Component{
    constructor(){
        super()
        this.state={
            category:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.put(`/categories/${id}`)
        .then(response=>{
            this.setState(()=>({
                category:response.data
            }))
        })
    }
        handleSubmit=(formData)=>{
            axios.put(`/categories/${this.state.note._id}`,formData)
            .then(response=>{
                if(response.data.hasOwnProperty('error')){
                    console.log(response.data.errors)
                }else{
                    this.props.history.push(`/categories/${response.data._id}`)
                }
            })
        }
        render(){
            return(
                <div>
                    <h2>Edit categories</h2>
                    <CategoriesForms handleSubmit={this.handleSubmit} category={this.state.category}/>
                </div>
            )
        }
}

export default CategoriesEdit