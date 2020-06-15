import React from "react"
import ReactDOM from "react-dom"
import {observable, configure, action} from "mobx";
import {observer} from "mobx-react"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

@observer class Counter extends React.Component{

    render(){
        
        return(
            <div>
                <h2>Page 1</h2>
                <p>{this.props.appstate.count}</p>
                <button onClick={this.props.appstate.increaseCount}>+</button>
                <button onClick={this.props.appstate.decreaseCount}>-</button><br/><br/><br/>
                
                <Link to="/time">
                    <button>Page 2</button>
                </Link>
            </div>
        );
    }
}

export default Counter;