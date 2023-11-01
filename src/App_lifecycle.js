// lifecycle: UI framework - Component lifecycle(수명주기)
// onCreate, render
// class component
// life cycle method
//  will: 작동 전에 미래를 이야기 함
//  did: 작동 후
//  마운트->업데이트->언마운트
// 마운트: constructor->getDerivedStateFromProps->render
//          componentDidMount
// 업데이트: props, state, 부모의 화면, this.forceUpdate이/가 바뀔 때
//          getDerivedStateFromProps->shouldComponentUpdate
//          ->render->getSnapshotBeforeUpdate->componentDidUpdate
// 언마운트: componentWillUnmount

import React, {Component} from "react";
import LifeCycleSample from "./LifeCycleSample";

class App extends Component{
    state = {color:"#000000"}
    getRandomColor(){
        return '#'+Math.floor(Math.random() * 16777215).toString(16);
    }
    handleClick = ()=>{
        this.setState({color:this.getRandomColor()})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>랜덤 색상 생성</button>
                <LifeCycleSample color={this.state.color}/>
            </div>
        );
    }
}
export default App;