import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from './Button';
import Label from './Label';


function Panel({ params, content }) {
    console.log(content);

    let items = [];

    function render() {
        if (content) items = content
            .map((item, index) => {
                switch (item.type) {
                    case 'panel':
                        return <Panel key={index} id={index} />
                    case 'label':
                        return <Label key={index} id={index} />
                    case 'button':
                        return <Button key={index} id={index} />
                }
            }
            )
    }


    return (
        params.visible
        && <div
            className="panel"
            style={{
                width: params.width,
                height: params.height,
                border: '1px solid #000',
            }}>
            {render()}
            {items}
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