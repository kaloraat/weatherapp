import React, { Component } from "react";
import SearchBar from "../containers/SearchBar";
import WeatherList from "../containers/WeatherList";

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron bg-primary text-center">
                    <h1 className="display-3 text-light mt-2">Weather App Client</h1>
                    <hr />
                    <p className="lead">Build with React Redux and OpenWeatherMap API</p>
                </div>
                <div className="container-fluid">
                    <SearchBar />
                    <WeatherList />
                </div>
            </div>
        );
    }
}
