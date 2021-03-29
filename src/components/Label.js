import React, { Component } from 'react'
import { connect } from 'react-redux'

class Label extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            this.props.isVisible
            && <div className="label">{this.props.caption}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        caption: state.label.caption,
        isVisible: state.label.isVisible
    }

}

export default connect(mapStateToProps, null)(Label)