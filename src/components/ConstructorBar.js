import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePanelWidth, changePanelHeight, changePanelVisible } from '../redux/actions'
import Button from './Button'
import Label from './Label'
import Panel from './Panel'

class ConstructorBar extends Component {
  constructor(props) {
    super()

    this.state = {
      patch: '',
      value: '',
    }

  }


  handleClick = () => {

    switch (this.state.patch) {
      case 'width':
        this.props.changePanelWidth(+this.state.value)
        break;
      case 'height':
        this.props.changePanelHeight(+this.state.value)
        break;
      case 'visible':
        this.props.changePanelVisible(+this.state.value)
        break;
      default: 
      alert('Где-то ошибка...')

    }


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
            <input
              name="patch"
              type="text"
              className="field__input"
              onChange={this.handleChange} />
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
          <Panel />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  changePanelWidth,
  changePanelHeight,
  changePanelVisible
}

export default connect(null, mapDispatchToProps)(ConstructorBar);