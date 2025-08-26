import { memo } from "react"

function TaskRow({ task }) {

    const statusColor = status => {
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

    return (
        <>
            <tr>
                <td>{task.title}</td>
                <td className={statusColor(task.status)}>{task.status}</td>
                <td>{task.createdAt}</td>
            </tr>

        </>
    )
}

export default memo(TaskRow)