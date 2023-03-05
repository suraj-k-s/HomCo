import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user_email: "",
          user_password: "",
          type: "",
          id: "",
        };
      }
      inputSet = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });
      };
    
      saveData = (e) => {
        e.preventDefault();
    
    
        const formData = new FormData();
    
        formData.append('email',this.state.user_email);
        formData.append('password',this.state.user_password);
    
        axios({
    
          method: "POST",
          url: "http://localhost/HomCo/Project/api/Guest/Login.php",
          data: formData,
          headers:{ "Content-Type": "multipart/form-data"},
    
          }).then((response) => response.data)
          .then((data) => {
            if (JSON.stringify(data) === "") {
              alert("Invalid User");
            }
            else if (data[1] === "Admin") {
              window.sessionStorage.setItem('admin-id', data[0].admin_id);
              window.location = '/Admin';
            }
            else if (data[1] === "Worker") {
              window.sessionStorage.setItem('worker-id', data[0].worker_id);
              window.location = '/Worker';
            }
            else if (data[1] === "User") {
              window.sessionStorage.setItem('user-id', data[0].user_id);
              window.location = '/User';
            }
            
          });
      };
      render() {
    return (
        <div>
        <Navbar />
        <div className="homeContainer">
            <form onSubmit={this.saveData} method='post'  className="mail">
                <h1 className="mailTitle">Login</h1>
                <span className="mailDesc">Sign in and we'll send the best deals to you</span>
                <div className="mailInputContainer">
                    <input type="email" required name='user_email' onChange={this.inputSet} placeholder="Your Email" />
                </div>
                <div className="mailInputContainer">
                    <input type="password" required name='user_password' onChange={this.inputSet} placeholder="Your Password" />
                </div>
                <div className="mailInputContainer">
                    <button type='submit'>&nbsp;&nbsp;&nbsp;  Login &nbsp;&nbsp;&nbsp;  </button>
                </div>
            </form>
        </div>
    </div>
    )
  }
}
