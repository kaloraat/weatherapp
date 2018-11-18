import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "sydney" };
        // bind
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    // methods
    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        if (this.state.term.length > 0) {
            this.props.fetchWeather(this.state.term)
            this.setState({ term: '' })
        }
    }

    componentDidMount() {
        this.props.fetchWeather(this.state.term)
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.onFormSubmit} className="row mt-3">
                        <div className="col-12 col-sm pr-sm-0">
                            <input
                                style={{ paddingBottom: "12px" }}
                                placeholder="Weather forecast for next 5 days"
                                className="form-control"
                                autoFocus
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div className="col-12 col-sm-auto pl-sm-0">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block btn-raised"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)