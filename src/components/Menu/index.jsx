import React from "react";
import './style.css';

class Menu extends React.Component {

    render() {
        const {items} = this.props;
        return (
            <>
                <ul className={'menu'}>
                    {items.map((item)=>
                    <li>
                        <a href="#">{item}</a>
                    </li>)}
                </ul>
            </>
        )
    }
}

export default Menu;