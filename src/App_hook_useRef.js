import React, {useRef, useState, useMemo, useCallback} from "react";
const getAverage = (numbers)=>{
    console.log('평균값 계산 함수 진입');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b)=> a+b);
    return sum / numbers.length;
}
const MyAverage = ()=>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputE1 = useRef(null);
    /* const onChange = e=>{setNumber(e.target.value)};
    const onInsert = e=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }; */

    const avg_memo =  useMemo( ()=> getAverage(list), [list] )
    const onChange = useCallback(e=>{setNumber(e.target.value)}, []);
    const onInsert = useCallback(e=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputE1.current.focus();
    }, [number, list])

    return(
        <div>
            <input value={number} onChange={onChange} ref={inputE1}></input>
            <button onClick={onInsert}>숫자 등록</button>
            <ul>
                {list.map((value, index)=>(<li key={index}>{value}</li>))}
            </ul>
            <div>
                평균값: {avg_memo}
            </div>
        </div>
    )
}
const App = ()=>{
    return (
        <div>
            <MyAverage/>
        </div>
    )
}

export default App;