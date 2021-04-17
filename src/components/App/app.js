import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Accueil from '../Accueil/accueil';
import Playlist from '../Playlist/playlist';
import {PageContacts} from '../Contact/PageContacts';
import Mood from '../Mood/mood';
import './App.css';
import Navbar from '../Navbar/navbar';


class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path='/' component={Accueil} />
                        <Route path='/mood' component={Mood} />
                        <Route path='/playlist' component={Playlist} />
                        <Route path='/contact' component={PageContacts} />
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default App;
