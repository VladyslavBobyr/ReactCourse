import React from "react";

class AboutMe extends React.Component {

    render() {
        const {info} = this.props;
        return (
            <>
                <p>{info}</p>
            </>
        )
    }
}

export default AboutMe;