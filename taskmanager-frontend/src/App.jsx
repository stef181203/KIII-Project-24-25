import './App.css'
import Layout from "./ui/components/layout/Layout/Layout.jsx";
import {BrowserRouter, Routes, Route} from "react-router";
import TasksPage from "./ui/pages/TasksPage/TasksPage.jsx";
import TaskDetails from "./ui/components/tasks/TaskDetails/TaskDetails.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<TasksPage/>}/>
                    <Route path="details/:id" element={<TaskDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
