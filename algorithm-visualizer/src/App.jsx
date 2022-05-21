import React from "react";
import Main from "./Main";
import PathFindingVisualizer from "./PathFindingVisualizer/PathFindingVisualizer";
import Sort from "./SortingVisulizer/sort";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/PathFindingVisualizer" exact element={<PathFindingVisualizer />} />
                    {/* <Route path="/menu" exact element={<menu />} /> */}
                    <Route path='/SortingVisulizer' exact element={<Sort />} />
                </Routes>
            </BrowserRouter>
        );
    }
}