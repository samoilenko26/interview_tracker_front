import React from "react";
import Header from "./components/Header";
import Applications from "./components/Applications";
import Footer from "./components/Footer";

class App extends React.Component {
    render() {
        return(
            <div>
                <Header title="Interview Tracker" />
                <main>
                    <Applications />
                </main>
                <Footer />
            </div>
        )
    }
}

export default App