import { useContext } from "react"
import GlobalContext from "../context/globalContext"
import TaskRow from "../components/TaskRow"

function TaskList() {

    const { tasks } = useContext(GlobalContext)

    return (
        <>

            <table>
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