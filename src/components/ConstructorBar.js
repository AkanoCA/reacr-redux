import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  changeWidth,
  changeHeight,
  changeVisible,
  changeCaption,
  newItem
} from '../redux/actions'
import Button from './Button'
import Label from './Label'
import Panel from './Panel'

class ConstructorBar extends Component {
  constructor(props) {
    super()

    this.state = {
      items: '',
      patch: '',
      value: '',
      prop: '',
      id: ''
    }

  }


  handleClick = () => {

    this.handlePatch();
    switch (this.state.prop) {

      case 'width':
        this.props.changeWidth({
          width: +this.state.value,
          id: +this.state.id
        })
        break;

      case 'height':
        this.props.changeHeight({
          height: +this.state.value,
          id: +this.state.id
        })
        break;

      case 'caption':
        this.props.changeCaption({
          caption: this.state.value,
          id: +this.state.id
        })
        break;

      case 'visible':
        this.props.changeVisible({
          visible: JSON.parse(this.state.value),
          id: +this.state.id
        }
        )
        break;

      case 'new':
        this.props.newItem({
          item: eval('('+ this.state.value+')')
        });

        this.renderItems();
        break;

      default:
        alert('Где-то ошибка...')

    }
  }

  handlePatch = () => { //преобразует значение из поля patch в id и свойство 
    if (this.state.patch != '') {
      let patchArr = this.state.patch.split(' ');
      this.state.id = patchArr[0];
      this.state.prop = patchArr[1];

    } else this.state.prop = 'new'

  }

  handleChange = e => {
    this.setState(prev => ({
      ...prev, ...{
        [e.target.name]: e.target.value
      }
    }
    ))
  };

  renderItems = () => {
    this.state.items = this.props.store
      .map((item, index) => {
        switch (item.type) {
          case 'panel':
            return <Panel key={index} id={index} />
          case 'label':
            return <Label key={index} id={index} />
          case 'button':
            return <Button key={index} id={index} />
        }
      })
  }


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
          {this.renderItems()}
          {this.state.items}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  changeWidth,
  changeHeight,
  changeVisible,
  changeCaption,
  newItem
}

const mapStateToProps = state => {
  return {
    store: state.content
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorBar);