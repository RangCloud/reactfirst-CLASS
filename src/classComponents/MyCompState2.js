import React, {Component} from 'react';

class MyCompState2 extends Component{
    state = {number:0, anotherNumber:0};
        // const [mode, setMode] = useState('welcome');
    render(){
        const {number, anotherNumber} = this.state;
        return(
            <div>
                <h1>바뀌는 값: {number}</h1>
                <h1>불변 값: {anotherNumber}</h1>
                <button onClick={
                    ()=>{this.setState({number: number+1});}
                }
                >+1</button>
            </div>
        );
    }
}
export default MyCompState2;
