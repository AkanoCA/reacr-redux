import React, { Component } from 'react'
import { connect } from 'react-redux'

function Label (props)  {
    let {params} = props;
    let {id} = props;

    return (
        params[id].visible
        && <span className="label">{params[id].caption}</span>
    )
}

const mapStateToProps = state => {
    return {
        params: state.labels
    }
}

export default connect(mapStateToProps, null)(Label)