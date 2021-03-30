import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePanel, changeLabel, changeButton } from '../redux/actions'
import Button from './Button'
import Label from './Label'
import Panel from './Panel'

class ConstructorBar extends Component {
  constructor() {
    super()

    this.state = {
      value: '',
    }

  }


  handleClick = () => {

    this.props.changePanel({
      width: this.state.value,
    })
  }

  handleChange = e => {
    this.setState(prev => ({
      ...prev, ...{
        [e.target.name]: e.target.value
      }
    }
    ))
  };


  render() {
    return (
      <div className="constructor__container">
        <div className="constructor__bar">
          <div className="field">
            <span className="field__title">Путь</span>
            <input type="text" className="field__input" />
          </div>
          <div className="field">
            <span className="field__title">Новое значение</span>
            <input
              name="value"
              type="text"
              className="field__input"
              onChange={this.handleChange} />
          </div>
          <button
            className="constructor__button"
            onClick={this.handleClick}
          >Применить</button>
        </div>

        <div className="constructor__display">

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  changePanel,
  changeLabel,
  changeButton,
}

export default connect(null, mapDispatchToProps)(ConstructorBar);