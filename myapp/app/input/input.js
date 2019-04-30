import React from "react"

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    // componentDidUpdate() {
    //     const { value } = this.state;
    //     const { inputSelection } = this;
    //     if (inputSelection) {
    //         if (inputSelection.start < this.toCardSpace(value).length) {
    //             const input = this.input;
    //             input.selectionStart = inputSelection.start;
    //             input.selectionEnd = inputSelection.end;
    //             this.inputSelection = null;
    //         }
    //     }
    // }

    handeChange(e) {
        // if (this.input) {
        //     this.inputSelection = {
        //         start: this.input.selectionStart,
        //         end: this.input.selectionEnd,
        //     };
        // }
        let value = e.target.value;
        let changeValue = this.toCardSpace(value);
        setTimeout(() => {
            this.setState({
                value: changeValue
            })
        });
    }

    toCardSpace(cardNumber) {
        let card = cardNumber.replace(/\D/g, '');
        let ncard = '';
        for (var n = 0; n < card.length; n = n + 4) {
            ncard += card.substring(n, n + 4) + " ";
        }
        return ncard.replace(/(\s*$)/g, "");
    }

    render() {
        return (
            <div>
                <input
                    style={{ "height": "30px", "width": "100%" }}
                    type="text"
                    ref={(c) => { this.input = c }}
                    maxLength={31}
                    value={this.state.value}
                    onChange={(e) => { this.handeChange(e) }}
                />
            </div>
        )
    }
}