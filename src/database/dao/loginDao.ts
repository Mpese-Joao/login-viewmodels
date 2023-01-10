


import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export default function useLoginDao () {
    
   function  login(email: string, password:string){

        return  signInWithEmailAndPassword(auth, email, password)
              .then(userCredential => {
                console.log("userCredential ", userCredential);
                
                
              })
              .catch(error => {return error})

    }
    
   function register(email: string, password: string) {
         createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            console.log("userCredential ", userCredential);
            try {
              const docRef = await addDoc(collection(db, "user"), {
                first: "David",
                email: email,
              });
              console.log("Document written with ID: ", docRef.id);
            
              
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          })
    
         
          
      }
 return{
login,
  register
  
 }
  

  
 
    
}