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
        caption: 'test1',
        visible: true
      }
    },
    {
      type: 'button',
      props: {
        width: 100,
        height: 50,
        caption: 'Accept',
        visible: true
      }
    }
  ];

  handleClick = () => {
    this.props.changePanel(+this.state.value);
  }

  handleChange = e => {
    this.setState(prev => ({
      ...prev, ...{
        [e.target.name]: e.target.value
      }
    }
    ))
  };

  handleContent = (content) => {
    return content.map((item) => {
      switch (item.type) {
        case 'panel':
          this.props.changePanel(item.props);
          return <Panel />
        case 'label':
          this.props.changeLabel(item.props)
          return <Label />
        case 'button':
          this.props.changeButton(item.props)
          return <Button />
      }
    }
    )
  }

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
          {this.handleContent(this.content)}
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