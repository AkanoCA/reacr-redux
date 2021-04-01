import React, { Component } from 'react'
import { connect } from 'react-redux'

function Button ({params})  {

    return (
        params.visible
        && <button
        className="button"
        style={{
            width: params.width,
            height: params.height,
            border: '1px solid #000',
            cursor: 'pointer'
        }}> {params.caption}</button>
    )
}

const mapStateToProps = (state, props) => {
    return {
        params: state.content[props.id].props
    }
}

export default connect(mapStateToProps, null)(Button)