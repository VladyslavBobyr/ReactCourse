import React from "react";
import List from "./components/List";


class Homework3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        console.log('Component did mounted');
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                this.setState({
                    products: json
                })
            });
    }
    render() {
        const {products} = this.state;
        return (
            <>
                <List tasks={products}/>
            </>
        )
    }
}

export default Homework3;
