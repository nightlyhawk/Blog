import { useState } from "react";
import { getCookie, CSRFToken } from "./Cookie"
import './signup.css';

const SignUp = () => {
    const [signUpInfo, setSignUpInfo] = useState({
            email: "",
            user_name: "",
            first_name: "",
            last_name: "",
            password: "",
            password2: "",
         })
    const [page, setPage] = useState(false)
         const handleChange = (event) => {
            setSignUpInfo({ ...signUpInfo, [event.target.name]: event.target.value }); 
         }
         const subMit = (event) => {
                event.preventDefault()
                // const formData = new FormData(loginInfo)
                fetch('http://127.0.0.1:8000/api/user/signup/', {
                method: 'POST',
                headers:{ 'content-type': 'application/json',
                          'X-CSRFToken': getCookie('csrftoken') },
                body: JSON.stringify(signUpInfo) 
            })
            .then(res =>{
             if (res.ok){
              setPage(true) 
              console.log('success')
              if(page){
              return res.redirect("/");
            //   { page=true && <Redirect to="/" />}
              }}
      })
              setSignUpInfo({   email: "",  user_name: "", first_name: "", last_name: "", password: "", password2: "" }); 
            }

    return (
     <div>
        <form action="" method="POST" className="form" onSubmit={subMit}>
            <CSRFToken />
            <input type="email" className="inp" name="email" onChange={handleChange} required/>
            <span className="label" >EMAIL ADDRESS</span>
            <input type="text" className="inp" name="user_name" onChange={handleChange}/>
            <span className="label" >USERNAME</span>
            <input type="text" className="inp" name="first_name" onChange={handleChange} required/>
            <span className="label" >FIRST NAME</span>
            <input type="text" className="inp" name="last_name" onChange={handleChange} required />
            <span className="label" >LAST NAME</span>
            <input type="password" className="inp" name="password" onChange={handleChange} required/>
            <span className="label" >PASSWORD</span>
            <input type="password" className="inp" name="password2" onChange={handleChange} required/>
            <span className="label" >CONFIRM PASSWORD</span>
            <button id="inbtn">Sign Up</button>
        </form>
     </div>
);
}

export default SignUp;