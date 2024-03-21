import { useState } from "react";

const UserForm = (props) => {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [id, setId] = useState(0);

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleId = (event) => {
        setId(Number(event.target.value));
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            firstName, lastName, email, id
        };
        props.addNewUser(newUser);
    }

    return(
        <>
            <h2> User Form </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">
                        First name:
                    </label>
                    <input type="text"
                           id="firstName"
                           value={firstName}
                           onChange={handleFirstName} />
                </div>
                <div>
                    <label htmlFor="lastName">
                        Last name:
                    </label>
                    <input type="text"
                           id="lastName"
                           value={lastName}
                           onChange={handleLastName} />
                </div>
                <div>
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="email"
                           id="email" 
                           value={email}
                           onChange={handleEmail}/>
                </div>
                <div>
                    <label htmlFor="id">
                        Id:
                    </label>
                    <input type="number"
                           id="id"
                           value={id} 
                           onChange={handleId}/>
                </div>
                <button>
                    Add User
                </button>
            </form>
        </>);
};

export default UserForm;