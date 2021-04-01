import React, { Component } from 'react'
import { connect } from 'react-redux'

function Panel ({params, content})  {
    console.log(content);
    return (
        params.visible
        && <div
            className="panel"
            style={{
                width: params.width,
                height: params.height,
                border: '1px solid #000',
            }}>


            </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        params: state.content[props.id].props,
        content: state.content[props.id].content,
    }
}

export default connect(mapStateToProps, null)(Panel)