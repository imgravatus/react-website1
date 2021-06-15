import { useState, useEffect } from 'react'
import '../styles/Cakes.css'

export function Cakes(props) {
    const [cakes, setCakes] = useState()

    useEffect(() => {
        if (cakes === undefined) {
            getData(props.url)
        }
    })

    const getData = (source) => {
        fetch(source)
            .then((response) => response.json())
            .then((data) => {
                setCakes(data)
            })
            .catch((error) => { console.log(error) })
    }

    const Counter = () => {
        if (cakes !== undefined) {
            return (
                <p>We have {cakes.found} cakes </p>
            )
        }
        else {
            return (<p>Counting cakes ... </p>)
        }
    }

    const CakesList = () => {
        if (cakes !== undefined) {
            const Items = cakes.posts.map((item) => {
                const createContent = () => {
                    return { __html: item.content }
                }
                return (
                    <div className="single-cake">
                        <h3>{item.title}</h3>
                        <div className="cake-content" dangerouslySetInnerHTML={createContent()}></div>
                    </div>
                )
            })
            return (
                <div className="cakes-list">
                    {Items}
                </div>
            )
        }
        else {
            return (<p>Getting cakes ...</p>)
        }
    }

    return (
        <div className="cakes">
            <h2>Cakes</h2>
            <Counter />
            <CakesList />
        </div>
    )
}

export default Cakes