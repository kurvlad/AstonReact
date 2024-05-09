import React from "react";
import { useState } from "react";

export default function FunComponent(props) {
    const [count, setCount] = React.useState(0);
    function upCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={upCount}>Press</button>
        </div>
    )
}