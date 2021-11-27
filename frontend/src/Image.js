import React from 'react';

export class Image extends React.Component {
    render() {
        return (
            <img src={"./" + this.props.src} 
            value={this.props.value} 
            width={this.props.width} 
            height={this.props.height} 
            onClick={ () => this.props.handleChange(this)} />
        )
    }
}