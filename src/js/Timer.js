import React from "react"
import ReactDOM from "react-dom"
import {observable, configure, action} from "mobx";
import {observer} from "mobx-react"
import {Link} from "react-router-dom"


@observer    
class Timer extends React.Component{
    
      render(){
        return (
          <div className="Timer">
            <h2>Page 2</h2>
            <p>Current Time : {this.props.timerState.time}</p><br/><br/><br/>
            <Link to="/home">
              <button>Page 1</button>
            </Link>
            <Link to="/data">
                <button>Page 3</button>
            </Link>
          </div>
          
        );
      }
    
}



export default Timer;