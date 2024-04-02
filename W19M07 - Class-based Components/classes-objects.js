

class Person{
    // Constructor
    constructor(firstName, lastName, age){
        // Attributes
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Methods
    printInfo(){
        console.log(this.firstName, this.lastName, this.age);
    }
}

class Student extends Person{
    constructor(fN, lN, age, specialty){
        super(fN, lN, age);
        this.specialty = specialty;
    }
    studentInfo = () => {
        this.printInfo();
        console.log(this.specialty);
    }
}


const martha = new Person('Martha', 'Smith', 20);
const alex = new Student('Alex', 'Miller', 25, 'Web Development');
console.log(alex);
alex.studentInfo();

