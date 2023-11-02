import React, {useState, useReducer} from "react";

/* function App(){
    function down(){
        setCount(count-1);
    }
    function up(){
        setCount(count+1);
    }
    function reset(){
        setCount(0);
    }
    const [count, setCount] = useState(0);
    return(
        <div>
            <div>
                {count}
            </div>
            <div>
                <input type="button" value="-" onClick={down} />
                <input type="button" value="0" onClick={reset} />
                <input type="button" value="+" onClick={up} />
            </div>
        </div>
    );
} */

function App(){
    function countReducer(oldCount, action){
        
    }
    const [count, countDispatch] = useReducer(countReducer, 0);
    function down(){
        countDispatch('DOWN');
    }
    function up(){
        countDispatch('UP');
    }
    function reset(){
        countDispatch('RESET');
    }
    // const [count, setCount] = useState(0);
    return(
        <div>
            <div>
                {count}
            </div>
            <div>
                <input type="button" value="-" onClick={down} />
                <input type="button" value="0" onClick={reset} />
                <input type="button" value="+" onClick={up} />
            </div>
        </div>
    );
}
export default App;