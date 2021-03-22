import React, { Component } from 'react'
import Button from '../Button';
import Label from '../Label';
import Panel from '../Panel';
import './style.scss'

class Constructor extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="constructor container__constructor">
        <div className="constructor__bar">
          <div className="field">
            <span className="field__title">Путь</span>
            <input type="text" className="field__input" />
          </div>
          <div className="field">
            <span className="field__title">Новое значение</span>
            <input type="text" className="field__input" />
          </div>
          <button className="constructor__button">Применить</button>
        </div>
        <div className="constructor__display">
          <Panel/>
          <Label/>
          <Button/>
        </div>
      </div>
    )
  }
}

export default Constructor;