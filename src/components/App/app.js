import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Accueil from '../Accueil/accueil';
import Playlist from '../Playlist/playlist';
import {PageContacts} from '../Contact/PageContacts';
import Mood from '../Mood/mood';
import './App.css';
import {Menu} from "./menu/Menu";
import {Logo} from "./logo/Logo";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="pure-container" data-effect="pure-effect-scaleRotate">
                    <Menu/>
                    <div className="pure-pusher-container">

                        <div className="pure-pusher">

                           <Logo/>

                            <Switch>
                                <Route exact path='/' component={Accueil}/>
                                <Route path='/mood' component={Mood}/>
                                <Route path='/playlist' component={Playlist}/>
                                <Route path='/contact' component={PageContacts}/>
                            </Switch>
                        </div>
                    </div>
                    <label className="pure-overlay" htmlFor="pure-toggle-left" data-overlay="left"></label>
                </div>
            </Router>
        );
    }
}

export default App;
