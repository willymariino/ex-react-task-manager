import axios from "axios"

// url preso dal file .nev
const endPoint = import.meta.env.VITE_API_URL

// funzione per ottenere tutte le task
export const fetchTasks = async () => {
    const res = await axios.get(`${endPoint}/tasks`)
    return res
}

export default fetchTasks