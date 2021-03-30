import React, { Component } from 'react'
import { connect } from 'react-redux'

function Panel ({params})  {

    console.log(params);
    return (
        params.visible
        && <div
            className="panel"
            style={{
                width: params.width,
                height: params.height,
                border: '1px solid #000',
            }}></div>
    )
}

const mapStateToProps = (state) => {
    return {
        params: state.panelReducer
    }
}

export default connect(mapStateToProps, null)(Panel)