import React from "react";
import Block from "./components/Block";
import CustomInput from "./components/CustomInput";


class Classwork1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            position: 0,
            text: ``,
            password: ''
        }
        this.changeLikes = this.changeLikes.bind(this);
        this.moveBlock = this.moveBlock.bind(this);
        this.changeText = this.changeText.bind(this);
    }
    changeLikes(step) {
        this.setState({
            likes: this.state.likes + step
        })
    }
    moveBlock(step) {
        this.setState({
            position: this.state.position += step
        })
    }
    changeText(e, key) {

        this.setState({
            [key]: e.target.value
        })
    }
    render() {

        const {likes, position, text, password} = this.state;
        return (
            <>
            {/*<Block move={position}/>*/}
                <CustomInput type={"text"} value={text} change={(e,key)=>this.changeText(e,'text')}/>
                <CustomInput type={"password"} value={password} change={(e,key)=>this.changeText(e,'password')}/>
            <button onClick={()=> this.moveBlock(5)}>touch me!</button>
            </>
        )
    }
}

export default Classwork1;
