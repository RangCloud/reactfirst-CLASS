import './App.css';
import React, {Component} from 'react';
import MyComponent from './classComponents/MyComponent_f';

class App extends Component{
    render(){
        const name = 'React class';
        const teacher = "호준쌤";
        return (
            <div>
                <div className='react'>{name}</div>
                <MyComponent name={name} teacher={teacher}/>
            </div>
        )
    }
}



export default App;