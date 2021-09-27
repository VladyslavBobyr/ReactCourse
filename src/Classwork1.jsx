import React from "react";
import Test from "./components/Test/Test";
import Title from "./components/Title/Title";
import AboutMe from "./components/AboutMe/AboutMe";

class Classwork1 extends React.Component {
    render() {
        const user = [
            {name: 'test1', age: 1},
            {name: 'test2', age: 2},
            {name: 'test3', age: 3}];
        return (
            <>
                <Title title={'React -> 🤦‍'}/>

                {user?.map(({name, age})=>
                    <Test
                        title = {name}
                        age = {age}
                          />
            )}
                <AboutMe info={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at corporis debitis `}/>

            </>
        )
    }
}

export default Classwork1;
