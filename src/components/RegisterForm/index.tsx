import {ChangeEvent} from "react";
import "./index.scss";
import {IUserData} from "../../interfaces";
import {formInputList} from "../../Data";



interface IProps { 
    setIsLoggedIn: (value:boolean) => void,
    userData:IUserData,
    setUserData:(user:IUserData) => void,
}



const RegisterForm = ({setIsLoggedIn,userData,setUserData}:IProps) => {

    //Handle
    const onChangedHandler = (Event:ChangeEvent<HTMLInputElement>) => {
        const {value,name} = Event.target;

        setUserData({...userData,[name]:value});
    };

    //Render
    const renderFormInputList = formInputList.map(input =>(
        <div className="input-wrapper">
            <input 
                type={input.type} 
                name={input.name}
                id={input.id}
                placeholder={input.placeholder}
                value={userData[input.name]}
                onChange={onChangedHandler}/> 
    </div>))


    return (
        <>
            <form onSubmit={Event => {

               Event.preventDefault();
               
               }}>
                   
                {renderFormInputList}

                <button onClick={() => {
                    setIsLoggedIn(true);
                   
                }} className="btnlogin">Login</button>
            </form>
        
        </>
    )
}
export default RegisterForm;


