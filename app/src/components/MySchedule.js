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
  //// after this component loads CDM fires off a get request for all
  //// of the classes the current client user is signed up for then state
  //// is set using the response
  componentDidMount() {
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
  //// this function takes in a class id and executes a promise, after the
  //// promise resolves another axios promise is chained to get a newly
  //// updated list of classes specific to this user only
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
  ///// this function returns a promise that will be used in a promise
  //// chain above
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
