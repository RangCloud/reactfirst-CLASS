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

const TestUseEffect2 = ()=>{
    const [name, setName] = useState('');
    useEffect(
        ()=>{
        console.log('렌더링이 막 완료 되었습니다. 마운트 때만 실행합니다.');
        console.log({name});
        }, []
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

const TestUseEffect3 = ()=>{
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    useEffect(
        ()=>{
        console.log('렌더링이 막 완료 되었습니다. 마운트 때만 실행합니다.');
        console.log({name});
        console.log({address});
        }, []
    );
    const onChangeName = e=>setName(e.target.value);
    const onChangeAddress = e=>setAddress(e.target.value);
    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={address} onChange={onChangeAddress}/>
            </div>
            <div>
                <div>이름: {name}</div>
                <div>주소: {address}</div>
            </div>
        </div>
    )
}
const App = ()=>{
    return <TestUseEffect3 />
}

export default App;