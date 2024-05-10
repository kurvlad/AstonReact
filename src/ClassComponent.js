import React, { useRef } from "react";
import { Component } from "react";
import FunctionalComponent from "./FunctionalComponent";
import { useId } from "react";

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            input: '',
            btnIsDisabled: false,
            inputRef: React.createRef(),
            arrList: []
        }
        this.btnRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.changeFocus = this.changeFocus.bind(this);
    }
    // добавляет значение инпута в заголовок
    handleClick(event) {
        event.preventDefault();
        this.setState(state => {
            return {
                count: this.state.input,
                arrList: [...this.state.arrList, { name: this.state.input }]
            }
        })
    }
    // Контролируемый компонент input
    inputChange(event) {
        this.setState(state => { return { input: event.target.value } })
    }

    //изменяем фокус на инпут
    changeFocus() {
        this.state.inputRef.current.focus()
    }

    // Изменение состояния кнопки если есть слово react в цикле componentDidUpdate
    componentDidUpdate() {
        function disabledButton() {
            if (this.state.input.includes('react')) {
                this.btnRef.current.disabled = true;
            } else {
                this.btnRef.current.disabled = false;
            }
        }
        disabledButton.bind(this)();
    };

    render() {
        return <div>
            <h1>{this.state.count}</h1>
            <form>
                <input onChange={this.inputChange} value={this.state.input} ref={this.state.inputRef} />
                <button onClick={this.handleClick} disabled={false} ref={this.btnRef} >Изменить состояние</button>
            </form>
            <button onClick={this.changeFocus}>Перевести фокус</button>
            <div className="list">
                <FunctionalComponent items={this.state.arrList} />
            </div>
        </div>
    }
}