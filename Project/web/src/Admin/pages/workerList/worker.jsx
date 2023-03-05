import React, { Component } from 'react'
import axios from "axios";
export default class worker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workerData: [],
    };
  }
 


  verifyWorker = (vs,id) =>{

    const formData = new FormData();
    
    formData.append('action',vs);
    formData.append('id',id);


    axios({

      method: "POST",
      url: "http://localhost/HomCo/Project/api/Admin/Workerverification.php",
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

  getWorker = ()=>{
    axios
      .get(
        "http://localhost/HomCo/Project/api/Guest/Worker.php"
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
      <div className="widgetLg">
        <h3 className="widgetLgTitle">New Worker List</h3>
        <table className="widgetLgTable">
          <thead>
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Name</th>
              <th className="widgetLgTh">Contact</th>
              <th className="widgetLgTh">Email</th>
              <th className="widgetLgTh">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.workerData.map((result) => (
              <tr className="widgetLgTr" key={result.worker_id}>
                <td className="widgetLgUser">
                  <img
                    src={`http://localhost/Homco/Project/api/Assets/Workerphoto/${result.worker_photo}`}
                    alt=""
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">{result.worker_name}</span>
                </td>
                <td className="widgetLgDate">{result.worker_contact}</td>
                <td className="widgetLgAmount">{result.worker_email}</td>
                <td className="widgetLgStatus">

                  {(() => {
                    if (result.worker_vstatus === '0') {
                      return (
                        <button onClick={()=>this.verifyWorker("Accept",result.worker_id)} className="widgetLgButton Approved">Accept</button>
                      )
                    }
                    if (result.worker_vstatus === '1') {
                      return (
                        <button className="widgetLgButton Approved">Accepted</button>
                      )
                    }
                  })()}
                  
                  {(() => {
                    if (result.worker_vstatus === '0') {
                      return (
                        <button onClick={()=>this.verifyWorker("Reject",result.worker_id)} className="widgetLgButton Declined">Reject</button>
                      )
                    }
                    if (result.worker_vstatus === '2') {
                      return (
                        <button className="widgetLgButton Declined">Rejected</button>
                      )
                    }
                  })()}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
