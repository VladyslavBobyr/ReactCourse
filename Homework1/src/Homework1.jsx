import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from './components/Content';

class Homework1 extends React.Component {
    render() {
        const items = ['Menu item 1','Menu item 2','Menu item 3','Menu item 4','Menu item 5'];
        return (
            <>
                <Header  title={'My first homework in React course is  -> 🤦‍'}/>
                <div className={'content-container'}>
                <Menu items={items}/>
                <Content/>
                </div>
            </>
        )
    }
}
export default Homework1;
