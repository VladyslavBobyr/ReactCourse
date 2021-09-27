import React from "react";
import './style.css';
import {Button} from "@material-ui/core";



class Header extends React.Component {

    render() {
        const {title} = this.props;
        return (
            <>
                <h1 className={'header'}>{title}</h1>
                <div className="buttons">
                    <Button>Primary</Button>
                    <Button disabled>Disabled</Button>
                    <Button href="#text-buttons">Link</Button>
                </div>
            </>
        )
    }
}

export default Header;