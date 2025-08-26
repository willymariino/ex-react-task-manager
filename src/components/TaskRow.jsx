import { memo } from "react"

function TaskRow({ task }) {

    const statusColor = status => { // funzione per cambiare il colore dinamicamente
        if (status === "To do") {
            return "To-do"
        }
        else if (status === "Doing") {
            return "Doing"
        }
        else if (status === "Done") {
            return "Done"
        }
        else {
            return "";
        }

    }

    /*
    In React, l’attributo className può ricevere:
    una stringa statica (es. "classname={To-do}")
    oppure una stringa dinamica calcolata da un’espressione JavaScript (es. statusColor(task.status)).
    */

    return (
        <>
            <tr>
                <td>{task.title}</td>
                <td className={statusColor(task.status)}>{task.status}</td>
                <td>{task.createdAt}</td>
            </tr>
            {/* passo la funzione statusColor con task.status come argomento */}
        </>
    )
}

export default memo(TaskRow)