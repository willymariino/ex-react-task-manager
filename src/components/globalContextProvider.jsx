import { useState, useEffect } from "react";
import fetchTasks from "../api/tasksApi";
import GlobalContext from "../context/globalContext";



function GlobalContexProvider({ children }) {
    const [tasks, setTasks] = useState([])

    // funzione per aggiungere task
    // Qui trasformo il "biglietto scritto dall'utente" (newTask) in un "biglietto ufficiale del sistema".
    // Aggiungo infatti un id univoco progressivo e la data di creazione (createdAt).
    // Questo oggetto finale è quello che viene salvato nello stato globale delle tasks.
    const addTask = task => {

        setTasks(curr => {

            const lastId = curr.length > 0 ? curr[curr.length - 1].id : 0

            // curr = array corrente
            // curr.length - 1 = indice dell’ultimo elemento
            // curr[curr.length - 1] = ultimo elemento
            // curr[curr.length - 1].id = id dell’ultimo elemento

            const taskToAdd = {
                ...task, // prendo tutti i dati inviati dall'utente, salvati dentro newTask
                id: lastId + 1,
                createdAt: new Date().toISOString
            }

            console.log("Task aggiunto:", taskToAdd)
            console.log("Array aggiornato:", [...curr, taskToAdd])

            // sbagliato: non devo annidare un altro setTasks dato che lo sto già chiamando all'inizio della funzione in forma estesa.
            // setTasks(curr => [...curr, taskToAdd]) 

            // ✅ ritorno il nuovo array, non chiamo di nuovo setTasks
            return [...curr, taskToAdd]


        })

    }

    // funzione per rimuovere task
    const removeTask = taskId => {
        setTasks(curr => curr.filter(task => task.id !== taskId))
    }


    // funzione per aggiornare un task
    const updateTask = updatedTask => {
        setTasks(curr => curr.map(task => // percorre ogni task nell'array corrente
            task.id === updatedTask.id // se il task corrente ha lo stesso id del task da aggiornare
                ? { ...task, ...updatedTask } : task // crea un nuovo oggetto che copia le proprietà vecchie e le sovrascrive con quelle aggiornate, se invece è diverso lascia {task} invariato

        ))
    }




    // useEffect viene eseguito una sola volta al montaggio del componente (array di dipendenze vuoto)
    useEffect(() => {

        // Funzione asincrona per recuperare le tasks dall'API
        const getTasks = async () => {

            try {
                // Effettua la chiamata API per ottenere le tasks
                const res = await fetchTasks()
                // Aggiorna lo stato con i dati ricevuti
                setTasks(res.data)
                // Stampa i dati ricevuti nella console per debug
                console.table(res.data)
            }

            catch (error) {
                // Gestisce eventuali errori nella chiamata API
                console.error("Errore nel caricamento delle tasks:", error)
            }

            finally {
                // Viene eseguito sempre, sia in caso di successo che di errore
                console.log("operazione completata")
            }

        }

        // Chiama la funzione per recuperare le tasks
        getTasks()

    }, []) // L'effetto viene eseguito solo una volta al montaggio

    return (

        <GlobalContext.Provider value={{ tasks, setTasks, addTask, removeTask, updateTask }}>
            {children}
        </GlobalContext.Provider>

    )

}

export default GlobalContexProvider