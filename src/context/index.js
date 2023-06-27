//can create with fucntion and class component

// 1 first create instance of a context
// 2 instance need a provider
//Main idea to create a context is that it creates state

import React, {Component} from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        users: [
            {id: 1, name: "Yash"},
            {id: 2, name: "Jay"},
            {id: 3, name: "Prashant"},
        ],
        active: true,
    };

    toggleActive = () => {
        this.setState({active: !this.state.active});
    };

    render() {
        const {users, active} = this.state;
        return (
            <MyContext.Provider
                value={{
                    users,
                    active,
                    toggleActive: this.toggleActive,
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export {MyContext, MyProvider};
