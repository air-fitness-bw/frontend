import React from "react";
import ClientHeader from "./ClientHeader";
import ScheduleCard from "./ScheduleCard";
import Footer from "./Footer";
import axios from "axios";
import AxiosWithAuth from "./axiosWithAuth";

class MySchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mySchedule: this.props.schedule
    };
  }
  componentDidMount() {
    AxiosWithAuth()
      .get("https://airfitness-backend.herokuapp.com/api/class/role")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }
  render() {
    return (
      <div className="schedule-container">
        <ClientHeader welcome="My Schedule" />
        {this.state.mySchedule.map(item => {
          return <ScheduleCard key={item.id} schedule={item} />;
        })}
        <Footer />
      </div>
    );
  }
}
export default MySchedule;
