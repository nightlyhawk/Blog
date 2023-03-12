import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCookie, CSRFToken } from "./Cookie";


const Login = () => {
     const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
     })
     const history = useNavigate();
     const handleChange = (event) => {
        setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value }); 
     }
     const subMit = (event) => {
            event.preventDefault()
            // const formData = new FormData(loginInfo)
            fetch('http://127.0.0.1:8000/api/token/obtain/', { method: 'POST',
            headers:{ 'content-type' : 'application/json',
                    //  'X-CSRFToken':getCookie('csrftoken')
             },
            body: JSON.stringify(loginInfo) 
        })
        .then(res => {
            console.log(res);
            if(!res.ok) {
                  throw Error('could not fetch the data for that resource');
            }
            return res.json()
        })
        .then(data => {
            localStorage.setItem('access_token', data.access);
			localStorage.setItem('refresh_token', data.refresh);
;
        })   
            setLoginInfo({ email: "", password: "", }); 
            history('/Home')
        }

    return (
        <div className="form-container">
        <form method="POST" className="form" onSubmit={subMit}>
        <CSRFToken />
        <input type="text" className="inp" id="email" name="email" value={loginInfo.email} onChange={handleChange} required />
        <span className="floating-label" id="elabel">EMAIL ADDRESS</span>
        <input type="password" className="inp" id="pass" name="password" value={loginInfo.password} onChange={handleChange} required />
        <span className="floating-label" id="plabel">PASSWORD</span>
        <input type="button" id="su" value="submit" hidden />
        <button id="loginbtn">Login</button>
        </form>
        <span id="checkme"><input type="checkbox" /> Remember me</span> 
        <a href="" id="forge">forgot passsword?</a>
        {/* <label  for="su" id="loginbtn" onSubmit={subMit}>Login</label> */}
        <Link to="/SignUp" id="signup">Don't have an account? create one!</Link>
        </div>
    );
}

export default Login;