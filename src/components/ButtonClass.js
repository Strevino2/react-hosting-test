import React from "react";

export class ButtonClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleClick = () => console.log("I am Default"), label = "Default" } = props;
        return <button onClick={this.props.handleClick}></button>
    }
}