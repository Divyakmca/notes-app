import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

class CategoriesList extends React.Component{
    constructor(){
        super()
        this.state={
        categories:[]
    }
}
componentDidMount(){
    axios.get(`/categories`)
    .then(response=>{
        this.setState(()=>({
            categories:response.data
        }))
})
}

render(){
    return(
        <div>
            <h2>categories list:{this.state.categories.length}</h2>
            <ul>
            {this.state.categories.map((category)=>{
                return <li key={category._id}><Link to={`/categories/${category._id}`}> {category.name}</Link>
               </li>

            })}
            </ul>

            <Link to='/categories/new'>Add categories</Link>
            
        </div>
    )
}
}
export default CategoriesList