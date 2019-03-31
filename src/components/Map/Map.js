import React, { Component } from 'react';
import './App.css';
import ControlPanel from '../components/ControlPanel/ControlPanel';
import KosiceMap from "../components/KosiceMap/KosiceMap";
import {Provider} from "react-redux";
import { store } from '../store/store';

class Map extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <ControlPanel />
                    <KosiceMap />
                </div>
            </Provider>
        );
    }
}

export default Map;