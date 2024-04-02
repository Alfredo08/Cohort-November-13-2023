import { Component } from "react";

class Dog extends Component{
    render = () => {
        return(<img src={this.props.dogImage} alt="Dog image"/>);
    }
}

export default Dog;