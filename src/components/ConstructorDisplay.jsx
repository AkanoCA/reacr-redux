import React, { Component } from 'react'
import Button from './Button'
import Label from './Label'
import Panel from './Panel'

class ConstructorDisplay extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="constructor__display">
                <Panel />
                <Label />
                <Button />
            </div>
        )
    }
}

export default ConstructorDisplay;