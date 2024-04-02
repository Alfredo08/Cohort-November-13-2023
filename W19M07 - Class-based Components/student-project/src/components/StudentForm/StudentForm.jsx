import { Component } from "react";

class StudentForm extends Component{
    state = {
        firstName: "",
        lastName: "",
        age: 0,
        specialty: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addStudent(this.state);
    }

    render = () => {
        return(
            <>
                <h2> Add student </h2>
    
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstName">
                            First name:
                        </label>
                        <input type="text" 
                            id="firstName"
                            value={this.state.firstName}
                            onChange={(event) => this.setState({firstName: event.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="lastName">
                            Last name:
                        </label>
                        <input type="text" 
                            id="lastName"
                            value={this.state.lastName}
                            onChange={(event) => this.setState({lastName: event.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="age">
                            Age:
                        </label>
                        <input type="number" 
                            id="age"
                            value={this.state.age}
                            onChange={(event) => this.setState({age: event.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="specialty">
                            Specialty:
                        </label>
                        <input type="text" 
                            id="specialty"
                            value={this.state.specialty}
                            onChange={(event) => this.setState({specialty: event.target.value})}/>
                    </div>
                    <button>
                        Add student
                    </button>
                </form>
            </>
        );
    }
}

export default StudentForm;