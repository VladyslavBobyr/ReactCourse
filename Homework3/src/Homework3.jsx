import React from "react";
import CustomInput from "./components/CustomInput";
import List from "./components/List";

class Homework3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ``,
            tmpTxt: `on`,
            tasks: []
        }
        this.changeText = this.changeText.bind(this);
        this.addTask = this.addTask.bind(this);
        this.press = this.press.bind(this);
    }


    addTask(text) {
        let arr = this.state.tasks;
        arr.push(text);
        this.setState({
            tasks: arr
        })
    }
    changeText(e, key) {

        this.setState({
            [key]: e.target.value
        })
    }

    componentDidMount() {
        console.log('Component did mounted');
    }

    static getDerivedStateFromProps(state, props) {
        console.log('getDerivedStateFromProps');
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate-->>  ', prevState.tmpTxt, this.state.tmpTxt );
        return prevState !== this.state.tmpTxt;
       /* return true*/
    }
    press() {
        this.setState({
            tmpTxt: this.state.tmpTxt === 'on' ? 'off' : 'on'
        })
    }

    render() {
        console.log('render');
        const {text} = this.state;
        const {tmpTxt} = this.state;
        return (
            <>
                <CustomInput type={"text"} placeholder={"add your task"} value={text} change={(e,key)=>this.changeText(e,'text')}/>
                <button onClick={()=> {
                    text && this.addTask(text);
                    this.setState({
                        text: ''
                    })
                }}>Add Task</button>
                <button onClick={this.press}>{tmpTxt}</button>
                <List tasks={this.state.tasks}/>

            </>
        )
    }
}

export default Homework3;
