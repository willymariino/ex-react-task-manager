import { useContext } from "react";
import GlobalContext from "../context/globalContext";

function useTask() {

    const { tasks, setTasks } = useContext(GlobalContext)

    const addTask = task => {

        setTasks(curr => {

            const lastId = curr.length > 0 ? curr[curr.length - 1].id : 0

            // curr = array corrente
            // curr.length - 1 = indice dell’ultimo elemento
            // curr[curr.length - 1] = ultimo elemento
            // curr[curr.length - 1].id = id dell’ultimo elemento

            const taskToAdd = {
                ...task,
                id: lastId + 1,
                createdAt: new Date().toISOString
            }

            // sbagliato: non devo annidare un altro setTasks dato che lo sto già chiamando all'inizio della funzione in forma estesa.
            // setTasks(curr => [...curr, taskToAdd]) 


            // ✅ ritorno il nuovo array, non chiamo di nuovo setTasks
            return [...curr, taskToAdd]


        })

        return { task, addTask }

    }


}

export default useTask