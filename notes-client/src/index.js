import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route,Link,Switch} from 'react-router-dom'
import NotesList from'./components/notes/List'
import NotesShow from './components/notes/Show'
import NotesNew from './components/notes/New'
import NotesEdit from './components/notes/Edit'
import CategoriesList from './components/notes/C-List'
import CategoriesShow from './components/notes/C-Show'
import CategoriesNew from './components/notes/C-New'
import CategoriesEdit from './components/notes/C-Edit'



//authentication part
import NotesRegister from './components/authentication/register'
import NotesLogin  from './components/authentication/login'
import NotesAccount from './components/authentication/account'
import NotesLogout from './components/authentication/logout'
   
class App extends React.Component{
      constructor(props){
        super(props)
        this.state={
          isAuthenticated:false //updating state from different components
        }
      }
      handleAuth=(bool)=>{
        console.log('am hadle')
        this.setState({isAuthenticated:bool})
      }
      
      //when i reload the page componentdidmount will happen by state is false, in my view it is showing true
      componentDidMount(){
        // console.log('componentdidmount'+this.state.isAuthenticated)
        if(localStorage.getItem('userAuthToken')){
          this.setState({isAuthenticated:true})
          // console.log('am in')

        }
      }
 
  render(){
    console.log(this.state)
    return(
      <BrowserRouter>
      <div>
        <h2>MY NOTE-APP</h2>
        <ul>
          {this.state.isAuthenticated && (
            <div>
              <li><Link to='users/account'>Account</Link></li>
              <li><Link to='users/logout'>Logout</Link></li>
              <Link to ="/notes">List Notes</Link><br/>
              <Link to="/categories">List Categories</Link>

            </div>
          )}
          {!this.state.isAuthenticated && (
            <div>
               <li><Link to="/users/register">Register</Link><br/></li>
               <li><Link to="/users/login">Login</Link><br/></li>
            </div>
          )}
        </ul>
      
        
          {/* logged out routes */}
        {!this.state.isAuthenticated && (
          <div>
             <Route path="/users/register" component={NotesRegister} exact={true}/>
            <Route path="/users/login" render={(props)=>{
              return <NotesLogin {...props } handleAuth={this.handleAuth}/>
        }} exact={true}/>
          </div>
        )}
        {/* <logged in router */}
        {this.state.isAuthenticated &&(
        <div>
        <Switch>
        <Route path="/users/account" component={NotesAccount} exact/>
        <Route path="/notes" component={NotesList} exact={true}/>
        <Route path="/notes/new" component={NotesNew}/>
        <Route path="/notes/edit/:id" component={NotesEdit} exact={true}/>
        <Route path="/categories/edit/:id" component={CategoriesEdit}/>
        <Route path="/categories/new" component={CategoriesNew}/> 
        <Route path="/categories/:id" component={CategoriesShow}/>
        <Route path="/notes/:id" component={NotesShow} exact/>
        <Route path="/categories" component={CategoriesList}/> 
        <Route path="/users/logout" render={(props)=>{
        return <NotesLogout {...props} handleAuth={this.handleAuth}/> }} exact={false}/>
        </Switch>
          </div>
        )}
      
       </div>
      </BrowserRouter>
    )
  } 
}
ReactDOM.render(<App/>,document.getElementById('root'))










