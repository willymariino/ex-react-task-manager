import { useState, useRef } from "react"
import useTask from "../hooks/useTask"


function AddTasks() {

    const { addTask } = useTask()

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

    const handleSubmit = e => {
        e.preventDefault()


        // Qui creo un oggetto "newTask" che contiene SOLO i dati scritti dall'utente nel form.
        // È come un biglietto compilato a mano: ha titolo, descrizione e stato, ma ancora
        // non ha id progressivo né data di creazione (questi li aggiungerà il sistema tramite addTask).
        const newtask = {
            title: data.title,
            description: description.current.value,
            status: status.current.value,
        }

        addTask(newtask)

    }


    return (
        <form onSubmit={handleSubmit} className="task-form">

            <section>
                <label htmlFor="title" className="label"> nome task:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    placeholder="Nome task"
                />
            </section>

            <section className="description">
                <label htmlFor="description" className="label">descrizione task:</label>
                <textarea
                    ref={description}
                    placeholder="Descrizione task"
                    id="description"
                />
            </section>

            <section>
                <label htmlFor="status" className="label">status task:</label>
                <select
                    id="status"
                    ref={status}
                    defaultValue="To do">
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </section>

            <button type="submit" className="send-btn">Aggiungi</button>
        </form>
    )
}

export default AddTasks