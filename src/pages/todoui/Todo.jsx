import "./Todo.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { FaEdit, FaTrash } from "react-icons/fa";

const Todo = () => {
  const percentage = 70;
  return (
    <div className="todo-container">
      <div className="content-wrapper">
        <div className="top-text-container">
          <h2>
            Hello, <span>Justine!</span>
          </h2>
          <p>Good pace, keep it going.</p>
        </div>

        <div className="date-progress-container">
          <div className="date">
            <h3>Sunday, 7th</h3>
            <p>January</p>
          </div>

          <div className="progression">
            <div className="percentage">
              {" "}
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  strokeLinecap: "round",
                  textSize: "20px",
                  pathColor: `rgba(255, 255, 255, ${percentage / 100})`,
                  textColor: "#fff",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
            <div className="progression-detail">
              <h4>Today</h4>
              <p>
                You have <span>12</span> Tasks left to do
              </p>
            </div>
            <div className="add">
              <p>+</p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
              <h4>TODO</h4>
            <p>
              React Js Hooks
              <FaEdit style={{color:'rgb(6, 162, 66)'}}/>
              <FaTrash style={{color:'red'}}/>
            </p>
            <p>
              React Js Hooks
              <FaEdit style={{color:'rgb(6, 162, 66)'}}/>
              <FaTrash style={{color:'red'}}/>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Todo;
