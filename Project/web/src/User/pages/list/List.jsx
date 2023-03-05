import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import axios from "axios";

import React, { Component } from 'react'

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtData: [],
      placeData: [],
      typeData:[],
      workerData:[],
      place:"",
      type:"",
    };
  }

 
  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };


  searchData = (e)=>{
    e.preventDefault();
    axios
    .get(
      "http://localhost/HomCo/Project/api/User/SearchWorker.php?pid=" +this.state.place+"&tid="+this.state.type
    )
    .then((response) => response.data)
    .then((data) => {
      this.setState({ workerData: data });
    });    
  }

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
        this.setState({ districtData: data });
      });
      axios 
      .get(
        "http://localhost/HomCo/Project/api/Admin/Workertype.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ typeData: data });
      });
      axios 
      .get(
        "http://localhost/HomCo/Project/api/Guest/Worker.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ workerData: data });
      });
  }

  bookNow = (id) =>{
    window.sessionStorage.setItem('wid', id);
              window.location = '/User/BookNow';
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <form method="post" onSubmit={this.searchData} className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>District</label>
                <select required onChange={this.getPlace} name="district">
                  <option value={""}>Select District</option>
                  {this.state.districtData.map((result) => (
                          <option key={result.district_id} value={result.district_id}>
                            {result.district_name}
                          </option>
                        ))}
                </select>
              </div>
              <div className="lsItem">
                <label>Place</label>
                <select required onChange={this.inputSet} name="place">
                  <option value={""}>Select Place</option>
                  {this.state.placeData.map((result) => (
                          <option key={result.place_id} value={result.place_id}>
                            {result.place_name}
                          </option>
                        ))}
                </select>
              </div>
              <div className="lsItem">
                <label>Type</label>
                <select required onChange={this.inputSet} name="type">
                  <option value={""}>Select Type</option>
                  {this.state.typeData.map((result) => (
                          <option key={result.wokertype_id} value={result.wokertype_id}>
                            {result.workertype_name}
                          </option>
                        ))}
                </select>
              </div>
              <button type="submit">Search</button>
            </form>
            
                          <div className="listResult">
                          {this.state.workerData.map((result) => (
                          <div className="searchItem" key={result.worker_id}>
                            <img
                              src={`http://localhost/HomCo/Project/api/Assets/Workerphoto/${result.worker_photo}`}
                              alt=""
                              className="siImg"
                            />
                            <div className="siDesc">
                              <h1 className="siTitle">{result.worker_name}</h1>
                              <span className="siDistance">{result.district_name}</span>
                              <span className="siTaxiOp">{result.place_name}</span>
                              <span className="siSubtitle">
                              {result.workertype_name}
                              </span>
                              {/* <span className="siFeatures">
                                Entire studio • 1 bathroom • 21m² 1 full bed
                              </span> */}
                              {/* <span className="siCancelOp">Free cancellation </span>
                              <span className="siCancelOpSubtitle">
                                You can cancel later, so lock in this great price today!
                              </span> */}
                            </div>
                            <div className="siDetails">
                              <div className="siRating">
                                {/* <span>Excellent</span>
                                <button>8.9</button> */}
                              </div>
                              <div className="siDetailTexts">
                                <span className="siPrice">500/day</span>
                                <span className="siTaxOp">Includes taxes and fees</span>
                                <button onClick={()=>this.bookNow(result.worker_id)} className="siCheckButton">Book Now</button>
                              </div>
                            </div>
                          </div>
                          ))}
                        </div>
                        
          </div>
        </div>
      </div>
    )
  }
}
