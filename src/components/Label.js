import React, { Component } from 'react'

class Label extends Component {
    constructor() {
        super()

        this.state = {
            caption: 'test',
            isVisible: true
        }
    }
    render() {
        return (
            this.state.isVisible
            && <div className="label">{ this.state.caption }</div>
        )
    }
}

export default Label