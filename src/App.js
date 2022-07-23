import React,{Component} from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from "./SearchBox";
import './App.css'
import Scroll from'./Scroll.js'
class App extends Component{
  constructor(){
    super()
    this.state={
     'robots':[],
     'searchFeild':''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots:users}))
  }
 onSearch=(event)=>{
 this.setState({ searchFeild  : event.target.value });


}

    render(){
        const filteredRobots= this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchFeild.toLowerCase())
         
        })
        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>
        }else{        return(
            <div className="tc ">
                <h1 className="f1">Robofriends</h1>
                <SearchBox onSearch={this.onSearch}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
              
            </div>
              
                    );
                }

    }
}
export default App