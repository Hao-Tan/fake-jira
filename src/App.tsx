import logo from 'logo.svg'
import { useEffect, useState } from 'react'
import './App.css'

const useDebounce = (value: unknown, delay: number) => {
    const [debouncedValue, setdebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setdebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

function App() {
    const [count, setCount] = useState(0)
    const val = useDebounce(count, 500)
    console.log(val, count)

    useEffect(() => {
        console.log(val)
        return () => {
            console.log(val)
        }
    }, [val])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p
                    onClick={() => {
                        setCount(count + 1)
                    }}
                >
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
