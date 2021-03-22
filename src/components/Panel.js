import React, { Component } from 'react'

class Panel extends Component {
    constructor() {
        super()

        this.state = {
            width: 200,
            height: 100,
            isVisible: true
        }
    }
    render() {
        return (
            this.state.isVisible
            && <div
                className="panel"
                style={{
                    width: this.state.width,
                    height: this.state.height,
                    border: '1px solid #000',
                }}></div>
        )
    }
}

export default Panel