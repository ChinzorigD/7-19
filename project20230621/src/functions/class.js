import React, {Component} from "react";



class ClassFunction extends Component{
constructor(props){
    super(props)
    this.state={
        color: "ajillaj baina",
        data: true
    }
    
}
    render(){
        return(
            <>
            <button onClick={()=>this.setState({data: false})}>{this.props.title}</button>
            {this.state.data ? null:this.state.color}
            </>
        )
    }
}
export default ClassFunction