import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeStyle } from '../redux/actions'

class ConstructorBar extends Component {
  constructor() {
    super()

    this.state = {
      value: ''
    }

  }

  content = [
    {
      type: 'panel',
      props: {
        width: 500,
        height: 200,
        visible: true
      }
    },
    {
      type: 'label',
      props: {
        caption: 'test',
        visible: true
      }
    },
    {
      type: 'button',
      props: {
        width: 100,
        height: 50,
        visible: true
      }
    }
  ];

  handleClick = () => {
    this.props.changeStyle(+this.state.value);
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
    )
  }
}

const mapDispatchToProps = {
  changeStyle
}

export default connect(null, mapDispatchToProps)(ConstructorBar);