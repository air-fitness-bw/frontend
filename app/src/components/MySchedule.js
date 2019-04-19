import React from "react";
import ClientHeader from "./ClientHeader";
import ScheduleCard from "./ScheduleCard";
import Footer from "./Footer";
import AxiosWithAuth from "./axiosWithAuth";
import Loader from "react-loader-spinner";

class MySchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mySchedule: []
    };
  }
  componentDidMount() {
    console.log("Mounted");
    AxiosWithAuth()
      .get("https://airfitness-backend.herokuapp.com/api/punch")
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          mySchedule: res.data
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  }
  removeClass = id => {
    this.removeClassPromise(id).then(
      AxiosWithAuth()
        .get("https://airfitness-backend.herokuapp.com/api/punch")
        .then(res => {
          this.setState({
            ...this.state,
            mySchedule: res.data
          });
        })
        .catch(err => console.log(err.response))
    );
  };
  removeClassPromise = id => {
    return AxiosWithAuth()
      .delete(`https://airfitness-backend.herokuapp.com/api/punch/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    if (this.state.mySchedule.length === 0) {
      return (
        <div>
          <ClientHeader welcome="Loading Classes..." />
          <div className="loader">
            <Loader type="Oval" color="black" height={200} width={200} />
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="schedule-container">
          <ClientHeader welcome="My Schedule" />
          {this.state.mySchedule.map(item => {
            return (
              <ScheduleCard
                removeClass={this.removeClass}
                key={item.id}
                schedule={item}
              />
            );
          })}
          <Footer />
        </div>
      );
    }
  }
}
export default MySchedule;
