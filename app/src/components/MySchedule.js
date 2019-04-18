import React from "react";
import MainHeader from "./MainHeader";
import ScheduleCard from "./ScheduleCard";
import Footer from "./Footer";

class MySchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mySchedule: this.props.schedule
    };
  }
  render() {
    console.log(this.state.mySchedule);
    return (
      <div className="schedule-container">
        <MainHeader welcome="My Schedule" />
        {this.state.mySchedule.map(item => {
          return <ScheduleCard key={item.id} schedule={item} />;
        })}
        <Footer />
      </div>
    );
  }
}
export default MySchedule;
