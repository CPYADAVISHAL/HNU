import {auth,googleProvider} from "./firebase";
import {createUserWithEmailAndPassword,signInWithPopup,  signOut,} from "firebase/auth";
import {useState} from "react";

 const Auth =()=>{
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("")
    const signIn = async() => {
        try{
        await createUserWithEmailAndPassword(auth,email,password);
        }
        catch(err){
            console.log(err);
        }
    };
    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth,googleProvider);

        }
        catch(err){
            console.log(err);
        }
    }
    const logout = async() =>{
        try{
            await signOut(auth);
        }
        catch(err){
            console.log(err);
        }
    }

    
    return(
        <>
            <input
             placeholder="Email..."
             onChange = {(e)  => setEmail(e.target.value)} 

             />
            <input
             placeholder="Password..."
             onChange={(e) => setPassword(e.target.value) }

             />
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}> Sign In With Google</button>
            <button >Sign in With facebook</button>
            <button onClick={logout}> Logout </button>
        </>
    )
}
export default Auth;