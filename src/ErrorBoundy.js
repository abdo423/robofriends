import React,{Component} from "react";

class ErrorBoundy extends Component {
constructor(props){
    super(props)
    this.state={
      "error":false,
    }

}
componentDidCatch(error,info){
    this.setState({"error":true}) 
}
render(){
    if(this.state.error) 
{

    return <h1>ooops looks like something went wrong</h1>
}
    else {
        return this.props.children
    }
  
}
}
export default ErrorBoundy