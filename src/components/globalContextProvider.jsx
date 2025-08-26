import { useState, useEffect } from "react";
import fetchTasks from "../api/tasksApi";
import GlobalContext from "../context/globalContext";


function GlobalContexProvider({ children }) {
    const [tasks, setTasks] = useState([])

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
                console.log(res.data)
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

        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>

    )

}

export default GlobalContexProvider