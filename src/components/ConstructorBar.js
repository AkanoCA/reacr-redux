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
      id: 0
    }

  }


  handleClick = () => {

    switch (this.state.patch) {
      case 'width':
        this.props.changePanelWidth({
          width: +this.state.value,
          id: +this.state.id
        })
        break;
      case 'height':
        this.props.changePanelHeight({
          height: +this.state.value,
          id: +this.state.id
        })
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
          {this.props.store.map((item, index) => {
            switch (item.type) {
              case 'panel':
                return <Panel key={index} id={index} />
              case 'label':
                return <Label key={index} id={index} />
              case 'button':
                return <Button key={index} id={index} />
            }
          })}
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

const mapStateToProps = state => {
  return {
    store: state.content
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorBar);