import { useState, useRef } from "react"
import useTask from "../hooks/useTask"


function AddTasks() {

    const { tasks, AddTasks } = useTask()

    const [data, setData] = useState({
        title: "",
    })

    const description = useRef()
    const status = useRef()

    const handleChange = e => {

        let { name, value } = e.target

        setData(prev => ({

            ...prev,
            [name]: value

        }))
    }


    return (
        <>

        </>
    )
}

export default AddTasks