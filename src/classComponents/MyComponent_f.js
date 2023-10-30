import React from "react";

const MyComponent_f = (props)=>{
    const {name, teacher, ch} = props;
    return (
        <div>
            <div>
                {props.name} - My Component_f (함수형) - ch{props.ch} by {props.teacher}
            </div>
            <div>
                {name} - My Component_f (함수형) - ch{ch} by {teacher}
            </div>
        </div>
    );
}
MyComponent_f.defaultProps = {name:'리액트', ch:'1장'}

export default MyComponent_f;