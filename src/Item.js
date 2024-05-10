import React, { useId } from "react";

export default function Item(props) {

    return <>
        <li key={props.id}>{props.name}</li>
    </>
}