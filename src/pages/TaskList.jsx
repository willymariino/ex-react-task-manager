import { useContext } from "react"
import GlobalContext from "../context/globalContext"
import TaskRow from "../components/TaskRow"

function TaskList() {

    // Recupero la lista dei task dallo stato globale (GlobalContext)
    const { tasks } = useContext(GlobalContext)

    return (
        <>

            <table className="To-do-list-table">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Stato</th>
                        <th>Data di Creazione</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.map(task => (
                        <TaskRow key={task.id} task={task} />
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default TaskList