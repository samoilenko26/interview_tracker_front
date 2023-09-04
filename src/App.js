import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Applications from "./components/Applications";
import Footer from "./components/Footer";
import ApplicationDetails from './components/ApplicationDetails';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header title="Interview Tracker" />
                    <main>
                        <Routes>
                            <Route path="/" element={<Applications />} />
                            <Route path="/applications/:applicationId" element={<ApplicationDetails />} />
                      </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
