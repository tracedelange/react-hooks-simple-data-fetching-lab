import React, { useEffect, useState } from "react";
import Loading from './Loading'
import DogImage from './DogImage'


const App = () => {


    const [loading, setLoading] = useState(true)
    const [fetchData, setFetchData] = useState({})

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then( response => response.json())
        .then(data => {
            setFetchData(data)
            setLoading(false)
        })
    }, [])

    return (
        <>
        {loading ? <Loading /> : <DogImage url={fetchData.message} /> }
        </>
    )
}

export default App;