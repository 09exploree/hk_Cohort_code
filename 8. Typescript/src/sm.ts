
let newUser:User={
    id:1,
    name:"ahmad",
    // password:"password@q3"
}

interface User{
    id:number,
    name:string,
}

  class UserAccount {
    name:string;
    id:number;
    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }
  }
const user:User=new UserAccount("Ahmad",2);
