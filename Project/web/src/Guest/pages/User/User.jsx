import React, { Component } from 'react'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
          districtData: [],
          placeData: [],
          name:"",
          email : "",
          phone : "",
          address:"",
          place:"",
          password:"",
          photo:"",
          proof : "",
        };
      }
    
      saveData = (e) => {
        e.preventDefault();
            const formData = new FormData();
    
        formData.append('name',this.state.name);
        formData.append('email',this.state.email);
        formData.append('phone',this.state.phone);
        formData.append('address',this.state.address); 
        formData.append('place',this.state.place);
        formData.append('password',this.state.password);
        formData.append('proof',this.state.proof);
        formData.append('photo',this.state.photo);
    
    
        axios({
    
          method: "POST",
          url: "http://localhost/HomCo/Project/api/Guest/User.php",
          data: formData,
          headers:{ "Content-Type": "multipart/form-data"},
          })
          .then(function (response){
            if(response.data)
          {
            window.location='/Login';
          }
          });
    
      };
    
    
    
      inputSet = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });
      };
    
      inputPhoto = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] });
      };
    
      getPlace = (e) => {
        axios
          .get(
            "http://localhost/HomCo/Project/api/Admin/GetPlace.php?id=" +
              e.target.value
          )
          .then((response) => response.data)
          .then((data) => {
            console.log(data);
            this.setState({ placeData: data });
          });
      };
    
      componentDidMount() {
        axios 
          .get(
            "http://localhost/HomCo/Project/api/Admin/District.php"
          )
          .then((response) => response.data)
          .then((data) => {
            console.log(data);
            this.setState({ districtData: data });
          });
      }
  render() {
    return (
        <div style={{zIndex:1}}>
        <Navbar />
        <div className="homeContainer">
            <form   onSubmit={this.saveData} className="mail">
                <h1 className="mailTitle">User</h1>
                <span className="mailDesc">Sign up and we'll send the best deals to you</span>
                <div className="mailInputContainer">
                    <input type="text" required onChange={this.inputSet} name='name' placeholder="Your Name" />
                </div>
                <div className="mailInputContainer">
                    <input type="text" required onChange={this.inputSet} name='phone' placeholder="Your Contact" />
                </div>
                <div className="mailInputContainer">
                    <input type="email" required onChange={this.inputSet} name='email' placeholder="Your Email" />
                </div>
                <div className="mailInputContainer">
                    <input type="text" required onChange={this.inputSet} name='address' placeholder="Your Address" />
                </div>
                <div className="mailInputContainer">
                    <select name='district' required  onChange={this.getPlace} style={{borderRadius:"5px", padding:"15px 109px",marginLeft:"-13px"}}>
                        <option value={""}>Select District</option>
                        {this.state.districtData.map((result) => (
                          <option key={result.district_id} value={result.district_id}>
                            {result.district_name}
                          </option>
                        ))}
                    </select>
                </div>
                <div className="mailInputContainer">
                    <select  name='place'required onChange={this.inputSet} style={{borderRadius:"5px", padding:"15px 109px",marginLeft:"-13px"}}>
                        <option value={""}>Select Place</option>
                        {this.state.placeData.map((result) => (
                          <option key={result.place_id} value={result.place_id}>
                            {result.place_name}
                          </option>
                        ))}
                    </select>
                </div>
                <div className="mailInputContainer">
                    <input type="file" required onChange={this.inputPhoto} name="photo" style={{backgroundColor:"white",color:"black"}} placeholder="Your Photo" />
                </div>
                <div className="mailInputContainer">
                    <input type="password" name='password' required onChange={this.inputSet} placeholder="Your Password" />
                </div>
                <div className="mailInputContainer">
                    <button>&nbsp;&nbsp;&nbsp;  Submit &nbsp;&nbsp;&nbsp;  </button>
                </div>
            </form>
        </div>
    </div>
    )
  }
}
