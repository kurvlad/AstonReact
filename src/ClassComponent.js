import React, { useRef } from "react";
import { Component } from "react";
import FunctionalComponent from "./FunctionalComponent";

export default class ClassComponent extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps')
    // };
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            input: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }



    // //mounting
    // componentDidMount() {
    //     console.log('componentDidMount')
    // }
    // // update
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate')
    //     return true
    // }
    // getSnapshotBeforeUpdate() {
    //     console.log('getSnapshotBeforeUpdate')
    // }
    // componentDidUpdate() {
    //     console.log('componentDidUpdate')
    // }

    // //unmounting
    // componentWillUnmount() {
    //     console.log('componentWillUnmount');
    // }

    handleClick(event) {
        event.preventDefault();
        this.setState(state => {
            return {
                count: this.state.input,
                input: ''
            }
        })
    }
    inputChange(event) {
        this.setState(state => { return { input: event.target.value } })
    }

    render() {
        return <div>
            <h1>{this.state.count}</h1>
            <form>
                <input onChange={this.inputChange} value={this.state.input} />
                <button onClick={this.handleClick}>Изменить состояние</button>
            </form>

            <FunctionalComponent name='Vlad'/>

        </div>
    }
}