import React from "react";
import './style.css';

class Content extends React.Component {

    render() {
        const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aspernatur 
        dolore dolorem ducimus eligendi, expedita facere hic libero minima modi numquam pariatur quia, quis sequi 
        sunt tenetur voluptate voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid 
        aspernatur dolore dolorem ducimus eligendi, expedita facere hic libero minima modi numquam pariatur quia, quis 
        sequi sunt tenetur voluptate voluptates!`
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