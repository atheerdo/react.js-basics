import "./index.scss";

interface IProps {
     companyName:string,
     aboutText:string,
     isLoggedIn:boolean,
     setIsLoggedIn: (value:boolean) => void,
}


const Navbar = ({companyName,aboutText,isLoggedIn,setIsLoggedIn}:IProps) =>{
 
    return (
        <>
            <nav>
                <ul className="navbar-list" >
                         <li>
                            <a href="#">{companyName}</a>
                        </li>
                              
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">{aboutText}</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <button onClick={() =>{
                                
                              {setIsLoggedIn(!isLoggedIn)}  
                               
                            }}>{isLoggedIn ? "Logout" : "Login"}</button>
                        </li>
                       
                                     
                </ul>
            </nav>        
        </>
    )
}

export default Navbar;



