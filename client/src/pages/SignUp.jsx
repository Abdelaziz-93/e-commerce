import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

  function SignUp() {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
   
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("")
    function changeFirstName(e){
        setFirstName(e.target.value)
    }
    function changeLastName(e){
        setLastName(e.target.value)
    }
      function changeEmail(e){
          setEmail(e.target.value)
      }
      function changePassword(e){
          setPassword(e.target.value)
      }
      function sendEmail(e){
        e.preventDefault();
        axios.post('http://localhost:5000/customers/signup',{
          first_name:firstName,
          last_name:lastName,
          email:email,
          password:password
        }).then(()=>{
          console.log("your signup is done succefully!")
        })
    
        
       
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            
           
        }
      
  
    return <>
    <div className="container">
        <div className="row justify-content-center align-item-center py-5 my-5">
            <div className="col-md-4 col-sm-8 sign">
            <h5 className="mb-4">SIGN UP TO BELLA SHOES</h5>
            <form onSubmit={sendEmail}>
            <div className="mb-3">
    <label for="exampleInputFirstName" className="form-label">First name</label>
    <input type="text" value={firstName} onChange={changeFirstName} className="form-control" id="exampleInputFirstName" />

  </div>
            <div className="mb-3">
    <label for="exampleInputLastName" className="form-label">Last name</label>
    <input type="text" value={lastName} onChange={changeLastName} className="form-control" id="exampleInputLastName" />

  </div>
            <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} onChange={changeEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange={changePassword} className="form-control" id="exampleInputPassword1"/>
  </div>

  <div>
  <button  className="btn mt-4 btn-dark w-100">Sign up</button>
  </div>
  <div className="text-center mt-4"><p>Already have an account?<span><Link className="sign-link " to='/login'>Sign in</Link></span></p></div>
  
  
  
</form>
            </div>
        </div>
    </div>
       
    </>
  }
  
  export default SignUp;