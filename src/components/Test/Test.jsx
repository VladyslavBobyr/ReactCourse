import React from "react";
import './style.css'

class Test extends React.Component {

    render() {
        const {title} = this.props;
        const {age} = this.props;
        return (
            <>
                <h5>{title}</h5>
                <p className='title'>{age}</p>
            </>
        )
    }
}

export default Test;