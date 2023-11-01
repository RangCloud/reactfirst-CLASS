import React, {useEffect, useState} from "react";

const TestUseEffect = ()=>{
    const [name, setName] = useState('');
    useEffect(
        ()=>{
        console.log('렌더링이 막 완료 되었습니다.');
        console.log({name});
        }
    );
    const onChangeName = e=>setName(e.target.value);
    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
            </div>
            <div>
                이름: {name}
            </div>
        </div>
    )
}
const App = ()=>{
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <div><button onClick={()=>{setVisible(!visible)}}>{visible? '숨기자' : '보이자'}</button></div>
            <div>{visible && <TestUseEffect/>} </div>
        </div>
    )
}

export default App;