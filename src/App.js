import React from "react";
import Header from "./components/Header";
import Applications from "./components/Applications";

class App extends React.Component {
    render() {
        return(
            <div>
                <Header title="Interview Tracker" />
                <main>
                    <Applications />
                </main>
            </div>
        )
    }
}

export default App