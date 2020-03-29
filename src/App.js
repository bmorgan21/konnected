import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from './home';
import Info from './info';

// board  mac                host          port  t      wifi    uptime       memory    sensors
// -------  -----------------  ----------  ------  -----  ------  -----------  --------  ---------------
//       1  2c:f4:32:56:b5:89  10.0.0.122   13682  0.34s  50%     (3, 44, 16)  15.21k    [ X X _ _ _ _ ]
//       2  84:f3:eb:da:12:4a  10.0.0.60    22291  0.54s  56%     (8, 49, 2)   15.55k    [ X _ _ _ _ _ ]
//       3  2c:f4:32:56:b0:64  10.0.0.197   13681  0.21s  42%     (0, 18, 17)  15.75k    [ X _ _ _ _ _ ]
//       4  84:f3:eb:d9:9d:79  10.0.0.62    22261  0.21s  50%     (0, 11, 28)  15.77k    [ O _ _ _ _ _ ]

class App extends Component {
  state = {
    boards: [],
    format: 'card'
  }

  updateState(idx, board) {
    let update = {};
    update['board_' + idx] = board;

    this.setState(update);
    this.setState({
      boards: this.props.boardHosts.map((data, idx2) => {
        if (idx === idx2) {
          return board;
        } else {
          return this.state['board_' + idx2] || this.state.boards[idx2];
        }
      })
    });
  }

  componentDidMount() {
    const sendDate = (new Date()).getTime();

    this.setState({
      boards: this.props.boardHosts.map(({ host, port }, idx) => {
        return { 'name': 'Board ' + (idx + 1), 'mac': 'Loading...', ip: host, port: port }
      })
    })

    this.props.boardHosts.forEach(({ host, port }, idx) => {
      fetch('http://' + host + ':' + port + '/status')
        .then(res => res.json())
        .then((data) => {
          const receiveDate = (new Date()).getTime();
          const board = { ...data, t: receiveDate - sendDate, 'name': 'Board ' + (idx + 1) };

          this.updateState(idx, board);
        })
        .catch((data) => {
          this.updateState(idx, { 'name': 'Board ' + (idx + 1), 'mac': '' + data, ip: host, port: port });
          console.log(data);
        });
    })
  }

  render() {
    return (
      <Router basename='/konnected'>
        <Child boards={this.state.boards} />
      </Router>
    )
  }
}

function Child({ boards }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          <svg className="bi bi-house-door align-text-top" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.646 1.146a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5H9.5a.5.5 0 01-.5-.5v-4H7v4a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clipRule="evenodd" />
          </svg>
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/info" className="nav-item nav-link">
              Board Info
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="m-4">
        <Switch>
          <Route exact path="/" children={<Home boards={boards} />} />
          <Route path="/info" children={<Info />} />
        </Switch>
      </div>
    </>
  );
}

export default App;
