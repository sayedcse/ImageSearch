import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onFromSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFromSubmit} className="ui form">
                    <div className="field">
                        <label>Search Image</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;

// <label style={{ marginTop: "10px" }}>
//     Enter password
// </label>
// <input
//     type="password"
//     value={this.state.pass}
//     onChange={(e) => {
//         this.setState({ pass: e.target.value });
//     }}
// />
// {this.state.pass.length < 4
//     ? "Password must be more than 4 character"
//     : "Make sure password is strong"}
