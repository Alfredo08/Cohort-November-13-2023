import { Component } from "react";
/*
const Student = (props) => {
    return(
        <>
            <h2> Full name: {props.firstName} {props.lastName}</h2>
            <p> Age: {props.age} Specialty: {props.specialty} </p>
        </>
    );
}
*/

class Student extends Component{
    state = {
        message: "Hey there!"
    }

    render = () => {
        return(
            <>
                <h2> {this.state.message} {this.props.firstName} {this.props.lastName}</h2>
                <p> Age: {this.props.age} Specialty: {this.props.specialty} </p>
                <button onClick={this.props.updateCounter}> Update Counter </button>
            </>
        );
    }
}

export default Student;