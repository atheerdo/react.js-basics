import {IUserData} from "../../interfaces";

interface IProps {
    user:IUserData;
}

const UserData = ({user}:IProps) => {
    return (
        <>
            <h2 style={{color:"green"}}>User Information:</h2>
            <h3>Email: {user.email}</h3>
            <h3>Address: {user.address}</h3>
            <h3>Username: {user.username}</h3>
            <h3>Password: {user.password}</h3>
        </>
    )
       
    
}
export default UserData;



