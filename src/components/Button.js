import React, { Component } from 'react'
import { connect } from 'react-redux'

class Button extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            this.props.isVisible
            && <button
                className="panel"
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    border: '1px solid #000',
                    cursor: 'pointer'
                }}> {this.props.caption}{console.log(this.props)}</button>
        )
    }
}

const mapStateToProps = state => {
    return {
        width: state.button.width,
        height: state.button.height,
        caption: state.button.caption,
        isVisible: state.button.isVisible
    }
}

export default connect(mapStateToProps, null)(Button)