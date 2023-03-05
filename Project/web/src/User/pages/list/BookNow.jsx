import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import axios from "axios";

import React, { Component } from 'react'

export default class BookNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wid:sessionStorage.getItem('wid'),
      uid:sessionStorage.getItem('user-id'),
      details:"",
      date:"",
    };
  }

 
  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };


  bookNow = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('date', this.state.date);
    formData.append('details', this.state.details);
    formData.append('user', this.state.uid);
    formData.append('worker', this.state.wid);


    axios({

        method: "POST",
        url: "http://localhost/HomCo/Project/api/User/BookNow.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            if (response.data) {
                window.location = '/User/Payment';
            }
        });

};



  render() {
    return (
      <div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer" >
          <div className="listWrapper" style={{width:"400px"}}>
            <form method="post" onSubmit={this.bookNow} className="listSearch">
              <h1 className="lsTitle">Booking</h1>
              <div className="lsItem">
                <label>Date</label>
                <input required type="date" name="date" onChange={this.inputSet}/>
              </div>
              <div className="lsItem">
                <label>Details</label>
                <textarea required name="details" rows="10" onChange={this.inputSet}></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
