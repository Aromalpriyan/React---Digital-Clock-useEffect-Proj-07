import React, { useEffect, useState } from 'react'
import img from './assets/digitalbg.jpg'

const App = () => {
    const [date,setDate] = useState(new Date())

    //function

    const clock = () =>{
        setInterval(() => {setDate(new Date())} , 1000)
    }


    useEffect(() => {
        // code to run when comp mount
        clock()

        // return (code to run when comp unmount)
        return function cleanUp(){
            clearInterval(clock)
        }
    }, [])


    // Emty depenedency array

    // component => lifecycle
    /*
    componentDidmount => Comp appears on the document
    componentDidUpdate => Comp gets updated
    ComponentDidUnmount => Comp disappears from the document
    */
    
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50" />
        <div className="flex flex-col items-center gap-10 text-center sm:gap-4 md:gap-5 lg:gap-6 px-4">
            <h1 className="font-effect text-gray-200 text-2xl lg:text-5xl">UseEffect Clock</h1>
            <div className="font-time text-gray-400  text-xl lg:text-2xl font-semibold">{date.toLocaleDateString()}</div>
            <div className="font-time bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold text-4xl lg:text-6xl xl:text-7xl" >{date.toLocaleTimeString()}</div>
        </div>

    </div>
  )
}

export default App
