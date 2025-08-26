import { memo } from "react"

function TaskRow({ task }) {

    return (
        <>
            <tr>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.createdAt}</td>
            </tr>

        </>
    )
}

export default memo(TaskRow)