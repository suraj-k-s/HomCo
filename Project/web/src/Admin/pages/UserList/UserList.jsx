import React, { Component } from 'react'
import axios from "axios";
export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }
 



  getuser = ()=>{
    axios
      .get(
        "http://localhost/HomCo/Project/api/Guest/user.php"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ userData: data });
      });
  }


  componentDidMount() {
    this.getuser();
  } 

  render() {
    return (
      <div className="widgetLg">
        <h3 className="widgetLgTitle">New user List</h3>
        <table className="widgetLgTable">
          <thead>
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Name</th>
              <th className="widgetLgTh">Contact</th>
              <th className="widgetLgTh">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userData.map((result) => (
              <tr className="widgetLgTr" key={result.user_id}>
                <td className="widgetLgUser">
                  <img
                    src={`http://localhost/Homco/Project/api/Assets/userphoto/${result.user_photo}`}
                    alt=""
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">{result.user_name}</span>
                </td>
                <td className="widgetLgDate">{result.user_contact}</td>
                <td className="widgetLgAmount">{result.user_email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
