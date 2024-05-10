import React, { Fragment } from "react";
import Item from './Item'


export default function FunctionalComponent(props) {
    for (let i = 0; i < props.items.length; i++) {
        props.items[i].id = crypto.randomUUID();
    }
    return <React.Fragment>
        <ul>
            {props.items.map(item => {
                return <Item key={item.id} name={item.name} />
            })}
        </ul>
    </React.Fragment >
}