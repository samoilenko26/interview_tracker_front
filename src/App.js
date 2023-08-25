import React from "react";
import Header from "./components/Header";

class App extends React.Component {
    render() {
        return(
            <div className="header">
                <Header title="Hello world" ></Header>
            </div>
        )
    }
}

export default App