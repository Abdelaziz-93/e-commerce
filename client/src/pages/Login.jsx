import axios from "axios";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

import { Link , useNavigate} from "react-router-dom";

  function Login() {
    const navigate=useNavigate()
      const [email , setEmail] = useState("");
      const [password , setPassword] = useState("")
      
    
      function changeEmail(e){
          setEmail(e.target.value)
      }
      function changePassword(e){
          setPassword(e.target.value)
      }
      function sendEmail(e){
        e.preventDefault();
        axios.post(`https://e-commerce-server-dnm8.onrender.com/customers/login`,{

          email:email,
          password:password
        }).then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            const user = jwtDecode(res.data.token);
              if(user.user.role =='admin'){
                navigate('/products-admin')
              }else{
                navigate('/all')
              }
              localStorage.setItem('Token', res.data.token)
          } else if (res.status === 500) {
              alert('error')
          }
      })
            setEmail("")
            setPassword("")
      }
    return <>
    <div className="container">
        <div className="row justify-content-center align-item-center py-5 my-5">
            <div className="col-md-4 sign">
            <h5 className="mb-4">GET ACCESS</h5>
            <form onSubmit={sendEmail}>
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
  <button  className="btn mt-4 btn-dark w-100">Log in</button>
  </div>
  <div className="text-center mt-4"><p>Don't have an account?<span><Link className="sign-link " to='/signup'>Sign up</Link></span></p></div>
  
  
  
</form>
            </div>
        </div>
    </div>
       
    </>
  }
  
  export default Login;