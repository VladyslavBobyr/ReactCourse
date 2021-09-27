import React from "react";
import './style.css';

class Content extends React.Component {

    render() {
        const {text} = this.props;
        return (
            <>
                <p className={'content'}>
                    {text}
                </p>
            </>
        )
    }
}

export default Content;