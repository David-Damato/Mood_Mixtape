import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Accueil from '../Accueil/accueil';
import Playlist from '../Playlist/playlist';
import Contact from '../Contact/contact';
import Mood from '../Mood/mood';
import './App.css';
import Navbar from '../Navbar/navbar';


class App extends Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <div>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Accueil} />
                        <Route path='/mood' component={Mood} />
                        <Route path='/playlist' component={Playlist} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </div>
               
            </Router>
        );
    }
}

export default App;
