import React from "react";
import './style.css'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0
        }
        this.updateCart = this.updateCart.bind(this);
    }
updateCart(price) {
    this.setState({
        sum: Math.round((this.state.sum + Number((price)))*100)/100
    })
}
render() {
   const {tasks} = this.props
    return (
        <>
        <ul className={'list'}>
            {tasks.length? tasks.map((e, key)=>{
                return <>
                    <li className='task' key={e.id}>
                        <p>{e.title}</p>
                        <img className={'pic'} src={e.image} alt=""/>
                        <a href="#" onClick={()=> {
                            this.updateCart(e.price);
                        }}>Add</a>
                    </li>
            </>
            }) : <h4>Loading...</h4>}
        </ul>
            <div className={'cart'}>
                <h1>{this.state.sum}$</h1>
            </div>
            </>
    )
}
}
export default List