import React, { Component } from 'react';
import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";

class MainBody extends Component {
    render() {
        return (
            <div className="main-body clearfix">
                    <Sidebar />
                    <Mainbar />
            </div>
        );
    }
}

export default MainBody;