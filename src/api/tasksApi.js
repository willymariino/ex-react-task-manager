import axios from "axios"

// url preso dal file .nev
const endPoint = process.env.REACT_APP_API_URL

// funzione per ottenere tutte le task
export const fetchTasks = () => {
    return axios.get(`${endPoint}/tasks`)
}

export default fetchTasks