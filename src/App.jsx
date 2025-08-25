import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./pages/TaskList"
import AddTasks from "./pages/AddTasks"
import DefaultLayout from "./layouts/defaultLayout"


function App() {


  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route Component={DefaultLayout}>

            <Route index Component={TaskList} />
            <Route path="/TaskList" Component={TaskList} />
            <Route path="AddTasks" Component={AddTasks} />

          </Route>

        </Routes>


      </BrowserRouter >

    </>
  )
}

export default App
