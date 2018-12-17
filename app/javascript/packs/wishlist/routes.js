import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import LandingPage from './components/landingPage';
import TicTacToe from './components/ticTacToe';

const App = (props) => (
    <Router>
        <div>
            <Route exact path='/' component={LandingPage} />
            <Route path='/ticTacToe' component={TicTacToe} />
        </div>
    </Router>
)
export default App;