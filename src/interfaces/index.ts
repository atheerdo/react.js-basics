

export interface IUserData {
    fullname:string;
    email:string;
    address:string;
    username:string;
    password:string;

}

export  interface IFormInput{
    type:string;
    id:string;
    name:keyof IUserData;
    placeholder:string;
}