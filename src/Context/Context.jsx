import axios from 'axios'
import {useContext, createContext, useState, useEffect} from 'react'

const OdontoStates = createContext()

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const Context = ({children}) => {
    const [odontologos, setOdontologos] = useState([])
    const [favs, setFavs] = useState(initialFavState)
    //const [theme, setTheme] = useState(true)
    
    const url = `https://jsonplaceholder.typicode.com/users`

    useEffect(() => {
        axios(url)
        .then(res => setOdontologos(res.data))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favs))
    },[favs])
   
    return (
        <OdontoStates.Provider value={{odontologos, favs, setFavs}}>
            {children}
        </OdontoStates.Provider>
    )
}

export default Context

export const useOdontoStates = () => useContext(OdontoStates)