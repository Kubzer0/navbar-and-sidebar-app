import React from 'react'

import Button from './components/Button'


class Counter extends React.Component {

    state = {
        number: this.props.startNumber || 0
    }


    incHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }

    decHandler = () => {
        this.setState({ number: this.state.number - 1 })
    }

    multiplyHandler = () => {
        this.setState({ number: this.state.number * 2 })
    }
    multiplySelfHandler = () => {
        this.setState({ number: this.state.number * this.state.number })
    }

    resetHandler = () => {
        this.setState({ number: this.props.startNumber })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={this.incHandler}
                    label='+'
                />
                <Button
                    onClick={this.decHandler}
                    label='-'
                />
                <Button
                    onClick={this.resetHandler}
                    label='RESET'
                />
                <Button
                    onClick={this.multiplyHandler}
                    label='multiply self times 2'
                />
                <Button
                    onClick={this.multiplySelfHandler}
                    label='multiply self'
                />

            </div>
        )
    }
}

export default Counter