import React, { useState, useEffect } from 'react'


export default function App(){
    const [resourceType, setResourceType] = useState('posts')
    //const [windowwidth, setwindowwidth] = useState(window.innerWidth)
    const [items, setItems] = useState([])

    console.log('render')

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(responce => responce.json())
      .then(json => setItems(json))
    },[resourceType])

    return(
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>posts</button>
                <button onClick={() => setResourceType('users')}>users</button>
                <button onClick={() => setResourceType('comments')}>comments</button>
            </div>

            <h1>{resourceType}</h1>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>

        //<div>{windowwidth}</div>
    )
}