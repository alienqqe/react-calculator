import { useEffect } from "react"

export const Numbers = ({setNumbers, numbers, setAction, action, setNumbers2, numbers2, isNumberPassed, setisNumberPassed, setExpression, expression }) => {
   
    const onNumber2Click = (event) => {
        const value = [...numbers2, event.target.value]
        setNumbers2(value)
        console.log(numbers2)
      }

    const onNumberClick = (event) => {
        const value = [...numbers, event.target.value]
        setNumbers(value)
      }
    const onActionClick = (event) =>{
        setAction([event.target.value])
        console.log(action)
        setisNumberPassed(true)
    }


     const result = () =>{
        let result1 = numbers.join('').toString()
        console.log(result1)
        let result2 = numbers2.join('').toString()
        if (action[0] === '+'){
            const sum = Number(result1) + Number(result2)
            setNumbers([sum])
            setAction([])
            setNumbers2([])
        } else if (action[0] === '-'){
            const difference = Number(result1) - Number(result2)
            setNumbers([difference])
            setAction([])
            setNumbers2([])
        } else if (action[0] === '*'){
            const product =  Number(result1) *  Number(result2)
            setNumbers([product])
            setAction([])
            setNumbers2([])
        } else if (action[0] === '/'){
            const division =  Number(result1) / Number(result2)
            setNumbers([division])
            setAction([])
            setNumbers2([])
        } 
     }

     const clear = () =>{
       setisNumberPassed(false)
       setNumbers([])
       setAction([])
       setNumbers2([])
       setExpression([])
     }
  
    return (
    <table >
        <tr>
            <td><button onClick={isNumberPassed ? onNumber2Click : onNumberClick} value='7'>7</button></td>
            <td><button onClick={isNumberPassed ? onNumber2Click : onNumberClick} value='8'>8</button></td>
            <td><button onClick={isNumberPassed ? onNumber2Click : onNumberClick} value='9'>9</button></td>
            <td><button onClick={onActionClick} value='/'>/</button></td>
        </tr>
        <tr>
            <td><button onClick={isNumberPassed ? onNumber2Click : onNumberClick} value='4'>4</button></td>
            <td><button onClick={isNumberPassed ? onNumber2Click : onNumberClick} value='5'>5</button></td>
            <td><button onClick={isNumberPassed ? onNumber2Click : onNumberClick} value='6'>6</button></td>
            <td><button onClick={onActionClick} value='*'>*</button></td>
        </tr>
        <tr>
            <td><button onClick={isNumberPassed ? onNumber2Click : onNumberClick} value='1'>1</button></td>
            <td><button onClick={isNumberPassed ? onNumber2Click : onNumberClick} value='2'>2</button></td>
            <td><button onClick={isNumberPassed ? onNumber2Click : onNumberClick} value='3'>3</button></td>
            <td><button onClick={onActionClick} value='-'>-</button></td>
        </tr>
        <tr>
            <td><button onClick={isNumberPassed ? onNumber2Click : onNumberClick} value='0'>0</button></td>
            <td><button onClick={isNumberPassed ? onNumber2Click : onNumberClick} value='.'>.</button></td>
            <td><button onClick={result} value='='>=</button></td>
            <td><button onClick={onActionClick} value='+'>+</button></td>
            <td><button onClick={clear} >Clear</button></td>
        </tr>
    </table>
  )
}
