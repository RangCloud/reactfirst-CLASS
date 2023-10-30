import React, {Component} from 'react';

class MyComponent_c extends Component{
    static defaultProps = { name:"리액트", cs:'1장'};

    render(props){
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
}
export default MyComponent_c;