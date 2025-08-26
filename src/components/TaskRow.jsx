import { useMemo } from "react"

function TaskRow() {

    return (
        <>
            <tr>
                <td>{Task.title}</td>
                <td>{task.status}</td>
                <td>{task.createdAt}</td>
            </tr>

        </>
    )
}

export default useMemo(TaskRow)