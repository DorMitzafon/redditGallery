import React from 'react';


class SearchInput extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }


    }

    update(e){
        this.setState({text: e.target.value})
    }

    render(){
        return (
            <div className="innerContainer">
                <input id="searchBar" text onChange={this.update.bind(this)} />
                <button id="searchButton" className="navigationBtn" onClick={() => this.props.getQuery(this.state.text)}>Search</button>
            </div>
        )
    }
}


export default SearchInput




