import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Accueil from '../Accueil/accueil';
import Playlist from '../Playlist/playlist';
import Contact from '../Contact/contact';
import Mood from '../Mood/mood';
import './Header.css';
import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <header>
                <div>
                    <h2>Welcome to React Router Tutorial</h2>
                    <nav className="navbar">
                        <ul ClassName="ul-menu">
                            <li><Link to={'/'} className="nav-link">Accueil</Link></li>
                            <li><Link to={'/playlist'} className="nav-link">Playlist</Link></li>
                            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                        </ul>
                    </nav>
                   
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Accueil} />
                        <Route path='/mood' component={Mood} />
                        <Route path='/playlist' component={Playlist} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </div>
                </header>
            </Router>
        );
    }
}

export default App;
