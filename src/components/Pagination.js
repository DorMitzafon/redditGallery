import React from 'react';

class Pagination extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        if (this.props.text === 'Next') {
            return (
                <button className="navigationBtn" onClick={this.props.onPress.bind(this)}>{this.props.text}</button>
            )
        } else {
            return (
                <button className="navigationBtn" onClick={this.props.onPress.bind(this)}>{this.props.text}</button>
            )
        }
    }
}

export default Pagination



