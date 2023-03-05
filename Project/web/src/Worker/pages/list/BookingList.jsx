import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import axios from "axios";

import React, { Component } from 'react'

export default class BookingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workerData: [],
        };
    }


    verifyWork = (vs,id) =>{

        const formData = new FormData();
        
        formData.append('action',vs);
        formData.append('id',id);
    
    
        axios({
    
          method: "POST",
          url: "http://localhost/HomCo/Project/api/Worker/Workverification.php",
          data: formData,
          headers:{ "Content-Type": "multipart/form-data"},
          })
          .then(function (response){
            if(response.data)
          {
            window.location.reload();
          }
          });
    
    
    
      }


    componentDidMount() {

        axios
            .get(
                "http://localhost/HomCo/Project/api/Worker/BookingList.php?wid=" + sessionStorage.getItem('worker-id')
            )
            .then((response) => response.data)
            .then((data) => {
                this.setState({ workerData: data });
            });
    }


    render() {
        return (
            <div>
                <Navbar />
                <Header type="list" />
                <div className="listContainer">
                    <div className="listWrapper">
                        <div className="listResult">
                            {this.state.workerData.map((result) => (
                                <div className="searchItem" key={result.worker_id}>
                                    <img
                                        src={`http://localhost/HomCo/Project/api/Assets/Userphoto/${result.user_photo}`}
                                        alt=""
                                        className="siImg"
                                    />
                                    <div className="siDesc">
                                        <h1 className="siTitle">{result.user_name}</h1>
                                        <span className="siDistance">{result.district_name}</span>
                                        <span className="siTaxiOp">{result.place_name}</span>
                                        <span className="siSubtitle">
                                        </span>
                                        <span className="siFeatures">
                                            {result.request_for_date}
                                        </span>
                                        {/* <span className="siCancelOp">Free cancellation </span> */}
                                        <span className="siCancelOpSubtitle">
                                            {result.request_details}
                                        </span>
                                    </div>
                                    <div className="siDetails">
                                        <div className="siRating">
                                            {/* <span>Excellent</span>
                                <button>8.9</button> */}
                                        </div>
                                        <div className="siDetailTexts">
                                            <span className="siPrice">500/day</span>
                                            {(() => {
                                                if (result.request_status === '0') {
                                                    return (
                                                        <button onClick={()=>this.verifyWork("Accept",result.request_id)} className="widgetLgButton Approved">Accept</button>
                                                    )
                                                }
                                            })()}
                                            {(() => {
                                                
                                                if (result.request_status === '0') {
                                                    return (
                                                        <button onClick={()=>this.verifyWork("Reject",result.request_id)} className="widgetLgButton Declined">Reject</button>
                                                    )
                                                }
                                            })()}
                                            {(() => {
                                                
                                                if (result.request_status === '2') {
                                                    return (
                                                        <button className="widgetLgButton Declined">Rejected</button>
                                                    )
                                                }
                                            })()}
                                            {(() => {
                                                
                                                if (result.request_status === '1') {
                                                    return (
                                                        <button className="widgetLgButton Approved">Accepted</button>
                                                    )
                                                }
                                            })()}
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
