
import "./home.css";
import "../../components/widgetLg/widgetLg.css";
import axios from "axios";
import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workerData: [],
    };
  }
  getWorker = ()=>{
    axios
      .get(
        "http://localhost/HomCo/Project/api/Admin/Bookings.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ workerData: data });
      });
  }


  componentDidMount() {
    this.getWorker();
  } 
  render() {
    return (
      <div className="home">
      <div className="homeWidgets">
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Latest Bookings</h3>
          <table className="widgetLgTable">
            <thead>
              <tr className="widgetLgTr">
                <th className="widgetLgTh">User</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Worker</th>
                <th className="widgetLgTh">Status</th>
              </tr>
            </thead>
            <tbody>
            {this.state.workerData.map((result) => (
              <tr className="widgetLgTr">
                <td className="widgetLgUser">
                  <img
                    src={`http://localhost/Homco/Project/api/Assets/Userphoto/${result.user_photo}`}
                    alt=""
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">{result.user_name}</span>
                </td>
                <td className="widgetLgDate">{result.request_for_date}</td>
                <td className="widgetLgAmount">{result.worker_name}</td>
                <td className="widgetLgStatus">
                {(() => {
                    if (result.worker_vstatus === '0') {
                      return (
                        <button className="widgetLgButton Pending">Pending</button>
                      )
                    }
                    if (result.worker_vstatus === '1') {
                      return (
                        <button className="widgetLgButton Approved">Approved</button>
                      )
                    }
                    if (result.worker_vstatus === '2') {
                      return (
                        <button className="widgetLgButton Declined">Declined</button>
                      )
                    }
                  })()}

                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
  }
}
