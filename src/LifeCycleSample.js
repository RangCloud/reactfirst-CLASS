import React, {Component} from 'react';
class LifecycleSample extends Component{
    state={
        number:0,
        color:null
    }

    myRef = null;

    constructor(props){
        super(props);
        console.log('i\'m on constructor');
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return {color: nextProps.color};
        }
        return null;
    }
    handleClick = ()=>{
        this.setState({number:this.state.number})
    }
    render(){
        console.log('i\'m on render');
        const style = {color:this.props.color}
        return(
            <div>
                <h1 style={style}></h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}