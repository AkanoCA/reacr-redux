import React, { Component } from 'react'
import { connect } from 'react-redux'

class Panel extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            this.props.isVisible
            && <div
                className="panel"
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    border: '1px solid #000',
                }}></div>
        )
    }
}

const mapStateToProps = state => {
    return {
        width: state.panel.width,
        height: state.panel.height,
        isVisible: state.panel.isVisible
    }
}

export default connect(mapStateToProps, null)(Panel)