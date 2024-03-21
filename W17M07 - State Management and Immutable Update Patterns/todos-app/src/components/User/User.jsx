
const User = (props) => {
    return(
        <>
            <h2> Full name: {props.firstName} {props.lastName} </h2>
            <p> Email: {props.email}</p>
            <p> Id: {props.id} </p>
        </>);
};

export default User;