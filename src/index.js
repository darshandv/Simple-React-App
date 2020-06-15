import React from "react"
import ReactDOM from "react-dom"
import {observable, configure, action} from "mobx";
import {observer} from "mobx-react"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

import Counter from './js/Counter.js'
import Timer from './js/Timer.js'
import Names from './js/Data.js'

const appstate = observable({
    count : 0,
    increaseCount : action("Increase Count",()=>{
        appstate.count+=1 ;
    }),
    decreaseCount: action("Decrease Count",()=>{
        appstate.count-= 1;
    })
});

var timerState = observable({
    time : new Date().toLocaleString(),
});

setInterval(() => {
    timerState.time = new Date().toLocaleString();
}, 1000);

class Home extends React.Component{
    render(){
        return (   
                
            <div>
                <Router>
                    <Link to="/home">
                        <li>Home</li>
                    </Link>
                    <div className="Home">
                        <Switch>
                            <Route path = "/home" exact component={() => <Counter appstate={appstate} />}/>
                            <Route path = "/time" render={(props) => <Timer {...props} timerState={timerState} />} />
                            <Route path = "/data" component={Names} />} />
                        </Switch>
                    </div>
                    
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById("root"));