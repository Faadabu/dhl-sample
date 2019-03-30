import React, { Component } from 'react';

class TablePanel extends Component {
    render() {
        return (
            <div class="tablepanel">
                <h2>Active Trips</h2>
                <table>
                <thead>
                    <th>ID & Date</th>
                    <th>Trip</th>
                    <th>Class</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    <tr>
                        <td><span>2343</span> <br />20/01/19</td>
                        <td>Apapa, Lagos, Nigeria <br /> <span className="text-color">to</span> Ore-Ondo road, Ondo, Nigeria</td>
                        <td>40ft Flatbed</td>
                        <td><span className="circle color-primary"></span>Delivered</td>
                    </tr>
                    <tr>
                        <td><span>2343</span> <br />20/01/19</td>
                        <td>Apapa, Lagos, Nigeria <br /> <span className="text-color">to</span> Ore-Ondo road, Ondo, Nigeria</td>
                        <td>40ft Flatbed</td>
                        <td><span className="circle color-danger"></span>Cancelled</td>
                    </tr>
                    <tr>
                        <td><span>2343</span> <br />20/01/19</td>
                        <td>Apapa, Lagos, Nigeria <br /> <span className="text-color">to</span> Ore-Ondo road, Ondo, Nigeria</td>
                        <td>40ft Flatbed</td>
                        <td><span className="circle color-warning"></span>Loading</td>
                    </tr>
                    <tr>
                        <td><span>2343</span> <br />20/01/19</td>
                        <td>Apapa, Lagos, Nigeria <br /> <span className="text-color">to</span> Ore-Ondo road, Ondo, Nigeria</td>
                        <td>40ft Flatbed</td>
                        <td><span className="circle color-primary"></span>Delivered</td>
                    </tr>
                    <tr>
                        <td><span>2343</span> <br />20/01/19</td>
                        <td>Apapa, Lagos, Nigeria <br /> <span className="text-color">to</span> Ore-Ondo road, Ondo, Nigeria</td>
                        <td>40ft Flatbed</td>
                        <td><span className="circle color-primary"></span>Delivered</td>
                    </tr>
                </tbody>
                
                </table>
            </div>
        );
    }
}

export default TablePanel;