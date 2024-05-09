import React from 'react';
import { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loading: false,
            item: []

        }
    }

    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
            .then(res => res.json())
            .then(result => {
                this.setState(state => {
                    return {
                        error: null,
                        loading: true,
                        items: result.drinks,
                    }
                })
            })
            .catch(rej => {
                this.setState(state => {
                    return {
                        error: true,
                        loading: true,
                    }
                })
            })
    }

    render() {
        const { error, loading, items } = this.state;
        if (error) {
            return <div>
                <h1>Error</h1>
            </div>
        } else if (loading) {
            return <div>
                <ul>
                    {items.map(item => {
                        return <li key={item.strGlass}>{item.strGlass}</li>
                    })}
                </ul>
            </div>
        }

    }
}