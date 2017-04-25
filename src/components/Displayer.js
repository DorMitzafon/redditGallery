import React from 'react';



class Displayer extends React.Component {
    constructor() {
        super();
    }
    render(){

        return (
            <div>
                <a href={'http://www.reddit.com' + this.props.postUrl}>
                    <img id="displayer" title={this.props.titleUrl} src={this.props.imageUrl} /></a>
            </div>
        )
    }
}

export default Displayer



