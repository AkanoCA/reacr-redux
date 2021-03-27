import React, { Component } from 'react'

class Button extends Component {
    constructor() {
        super()

        this.state = {
            caption: 'Accept',
            width: 100,
            height: 50,
            isVisible: true
        }
    }
    render() {
        return (
            this.state.isVisible
            && <button
                className="panel"
                style={{
                    width: this.state.width,
                    height: this.state.height,
                    border: '1px solid #000',
                    cursor: 'pointer'
                }}> {this.state.caption}{console.log(this.props)}</button>
        )
    }
}

export default Button