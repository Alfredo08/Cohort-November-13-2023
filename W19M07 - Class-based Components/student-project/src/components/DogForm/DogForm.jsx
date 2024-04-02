import { Component } from "react";

class DogForm extends Component{
    state = {
        numberOfDogs: 0
    }

    loadDogImages = async (event) => {
        event.preventDefault();

        const URL = "https://dog.ceo/api/breeds/image/random/" + this.state.numberOfDogs;
        const response = await fetch(URL);
        const data = await response.json();
        this.props.updateDogs(data.message);
    }

    render = () => {
        return(
            <form onSubmit={this.loadDogImages}>
                <div>
                    <label htmlFor="numberOfDogs">
                        How many dogs do you want to load?
                    </label>
                    <input type="number"
                           id="numberOfDogs"
                           value={this.state.numberOfDogs}
                           onChange={(event) => this.setState({numberOfDogs: event.target.value})} />
                </div>
                <button>
                    Get the dogs!
                </button>
            </form>
        );
    }
}

export default DogForm;