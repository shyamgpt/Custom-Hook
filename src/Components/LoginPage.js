import { useState, useEffect } from "react";

export default function Login(){
   const [email,setEmail] = useState("");
   const [password, setPassword] = useState(""); 
   
   
   useEffect(() =>{
    let email = localStorage.getItem("email");

    if(email){
      //if(), will check, whether the email is present or not
      setEmail(email);
    }
  },[]);

   useEffect(() =>{
    localStorage.setItem("email", email)
    // localStorage.setItem("u can give any name ",u can give, what u want to save here(here u want to save "email") )
  //When do i want to this effect happen, whenever email is change or getting updated
  }, [email])
  // i want this effect will work, whenever my email is getting chnages

  


    return(
        <>
        <h1>Login to the Portal!</h1>
        <h3>Login</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log("Form submitted")
        }}
      >
        Submit
      </button>
      <br />
        </>
    )
}