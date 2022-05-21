import React from "react";
import { Link } from 'react-router-dom';
import "./MainContent.css";
export default class MainContent extends React.Component {
    render() {
        return (
            <React.Fragment>

                <Link to="/PathFindingVisualizer">
                    <div className="first-box">
                        <p> PathFinding Algorithm Visualizer </p>
                    </div>
                </Link>

                <Link to="/SortingVisulizer">
                    <div className="second-box">
                        <p> Sorting Algorithm Visulizer </p>
                    </div>
                </Link>

            </React.Fragment>
        );
    }
}
