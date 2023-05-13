
'use client'
import { auth } from "@lib/firebase/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const login = () => {
  const [signup, setSignup] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e)=>{
      e.preventDefault();
      if(!email){
          return alert("Email is required.")
      }
      if(!password){
          return alert("Password is required.")
      }

      createUserWithEmailAndPassword(auth,email,password).then((user)=>{
          
       }).catch(error=>alert(error))

      setEmail("");

      setPassword("");

  }

  const signin=(e)=>{
    e.preventDefault();
    if(!email){
        return alert("Email is required.")
    }
    if(!password){
        return alert("Password is required.")
    }

    signInWithEmailAndPassword(auth,email,password).then((user)=>{
       alert("signedin suceesfully")
    }).catch(error=>alert(error))

}
  return (
    <section className='loginScreen'>
    {
        signup===true ? (<form onSubmit={register}>
            <input type="email" placeholder="Enter your Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter your Password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <input type="submit" value="Sign Up"/>
            <h4>Already a member ? <span onClick={e=>setSignup(false)}>Login Here</span></h4>

        </form>) : (<form onSubmit={signin}>
            
            <input type="email" placeholder="Enter your Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter your Password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <input type="submit" value="Sign In"/>
            <h4>Not a member ? <span onClick={e=>setSignup(true)}>Sign Up Here</span></h4>

        </form>)
    }
 
    </section>
  )
}

export default login