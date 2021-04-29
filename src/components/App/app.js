import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Accueil from '../Accueil/accueil';
import Playlist from '../Playlist/playlist';
import {PageContacts} from '../Contact/PageContacts';
//import Mood from '../Mood/mood';
import {Menu} from "./menu/Menu";
import {Logo} from "./logo/Logo";
import Footer from "../Footer/footer";
import MoodInLove from '../Mood/MoodInLove';
import MoodSad from '../Mood/MoodSad';

class App extends Component {
    render() {





        return (
            <Router>
                <div className="pure-container" data-effect="pure-effect-slide">
                    <Menu/>
                    <div className="pure-pusher-container">
                        <div className="pure-pusher">
                            <Logo/>
                            <Switch>
                                <Route exact path='/' component={Accueil}/>
                                <Route path='/MoodInLove' component={MoodInLove}/>
                                <Route path='/MoodSad' component={MoodSad}/>
                                <Route path='/playlist' component={Playlist}/>
                                <Route path='/contact' component={PageContacts}/>
                            </Switch>
                            <Footer/>
                        </div>
                    </div>
                    <label className="pure-overlay" htmlFor="pure-toggle-left" data-overlay="left"></label>
                </div>
            </Router>
        );
   }
}

export default App;
