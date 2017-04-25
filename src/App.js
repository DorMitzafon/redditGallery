import React from 'react';
import fetch from 'isomorphic-fetch';
import SearchInput from "./components/SearchInput";
import Displayer from "./components/Displayer";
import Pagination from "./components/Pagination";
import style from './style/styles.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentImageIndex: 0,
            images: []
        }
    }

    nextImage() {
        {
            this.state.currentImageIndex !== this.state.images.length - 1 ?
                this.setState({currentImageIndex: this.state.currentImageIndex += 1})
                : null
        }
    }

    previousImage() {
        {
            this.state.currentImageIndex !== 0 ?
                this.setState({currentImageIndex: this.state.currentImageIndex -= 1})
                : null
        }
    }

    searchInput(input) {
        fetch(`https://www.reddit.com/r/${input}.json`)
            .then(response => response.json())
            .then(json => this.setState({images: json.data.children}))

    }

    render(){
        return (
            <div id="container">

                <SearchInput getQuery={(query) => this.searchInput(query)} />
                {this.state.images.length > 0 ?
                    <Displayer imageUrl={this.state.images[this.state.currentImageIndex].data.url}
                            postUrl={this.state.images[this.state.currentImageIndex].data.permalink}
                            titleUrl={this.state.images[this.state.currentImageIndex].data.title} />
                            : <h1 id="beforeDisplay">Image will appear after search</h1>}
                <span className="innerContainer">
                    <Pagination text="Previous" onPress={() => this.previousImage()}/>
                    <Pagination text="Next" onPress={() => this.nextImage()} />
                </span>
            </div>
        )
    }
}

export default App



