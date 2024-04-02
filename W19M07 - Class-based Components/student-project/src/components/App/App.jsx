import { Component } from 'react';
import './App.css';
import Student from '../Student/Student';
import Dog from '../Dog/Dog';
import DogForm from '../DogForm/DogForm';
import StudentForm from '../StudentForm/StudentForm';

class App extends Component{
  state = {
      students: [{
        firstName: 'Alex',
        lastName: 'Miller',
        age: 25,
        specialty: 'Web Development'
      },
      {
        firstName: 'Martha',
        lastName: 'Smith',
        age: 22,
        specialty: 'Java'
      },
      {
        firstName: 'Roger',
        lastName: 'Anderson',
        age: 28,
        specialty: 'Ruby/Rails'
      }],
      title: "Class-based Components lecture",
      counter: 0,
      dogImage: "",
      dogs: []
    }
    // this.updateCounter = this.updateCounter.bind(this);


  updateCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  addStudent = (newStudent) => {
    this.setState({
      students: [...this.state.students, newStudent]
    });
  }

  updateDogs = (dogList) => {
    this.setState({
      dogs: dogList
    });
  }

  componentDidMount = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    this.setState({
      dogImage: data.message
    }, () => {
      console.log(this.state.dogImage);
    });
    console.log(this.state.dogImage);
  }

  render = () => {
    return(
      <>
        <h1> {this.state.title} </h1>
        {
          this.state.students.map((student, index) => {
            return (<Student firstName={student.firstName}
                             lastName={student.lastName}
                             age={student.age}
                             specialty={student.specialty}
                             updateCounter={this.updateCounter}
                             key={index}/>);
          })
        }
        <h2> Counter: {this.state.counter} </h2>
        <button onClick={this.updateCounter}> Update counter </button>
        <StudentForm addStudent={this.addStudent}/>
        <h2> Random dog image </h2>
        <Dog dogImage={this.state.dogImage} />
        {this.state.dogs.map((dog, index) => {
          return(<Dog dogImage={dog} key={index}/>)
        })}
        <h2> Want to load more images? </h2>
        <DogForm updateDogs={this.updateDogs}/>
      </>
    );
  }
}




export default App;
