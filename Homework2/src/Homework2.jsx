import React from "react";
import CustomInput from "./components/CustomInput";
import List from "./components/List";


class Homework2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ``,
            tasks: []
        }
        this.changeText = this.changeText.bind(this);
        this.addTask = this.addTask.bind(this);
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
    render() {

        const {text} = this.state;
        return (
            <>
                <CustomInput type={"text"} placeholder={"add your task"} value={text} change={(e,key)=>this.changeText(e,'text')}/>
                <button onClick={()=> {
                    text && this.addTask(text);
                    this.state.text = '';
                }}>Add Task</button>
                <List tasks={this.state.tasks}/>

            </>
        )
    }
}

export default Homework2;
