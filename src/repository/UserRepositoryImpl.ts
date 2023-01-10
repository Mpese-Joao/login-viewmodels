import useLoginDao from "../database/dao/loginDao";


export default function UserRepositoryImpl () {

   const {login} = useLoginDao();
   
   function signIn(email: string, password: string){
    return login(email, password)
   }
   
   return{
      signIn
   }
}