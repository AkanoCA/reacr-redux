import React, { Component } from 'react'
import { connect } from 'react-redux'

function Label ({params})  {
    return (
        params.visible
        && <span className="label">{params.caption}</span>
    )
}

const mapStateToProps = (state, props) => {
    return {
        params: state.content[props.id].props
    }
}

export default connect(mapStateToProps, null)(Label)