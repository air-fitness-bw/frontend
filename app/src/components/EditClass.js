import React from "react";
import InstructorHeader from "./InstructorHeader";
import EditCard from "./ScheduleCard";
import Footer from "./Footer";
import AxiosWithAuth from "./axiosWithAuth";

class EditClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myClasses: []
    };
  }
  componentDidMount() {
    AxiosWithAuth()
      .get("https://airfitness-backend.herokuapp.com/api/punch")
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          myClasses: res.data
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  }
  render() {
    return (
      <div className="schedule-container">
        <InstructorHeader welcome="My Schedule" />
        {this.state.myClasses.map(item => {
          return <EditCard key={item.id} classes={item} />;
        })}
        <Footer />
      </div>
    );
  }
}
export default EditClass;
