import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { InputField } from './components/InputField'
import { Numbers } from './components/Numbers'

function App() {
  const [numbers, setNumbers] = useState([])
  const [action, setAction] = useState([])
  const [expression, setExpression] = useState([])
  const [numbers2, setNumbers2] = useState([])
  const [isNumberPassed, setisNumberPassed] = useState(false)

  const setInput = useCallback(() => {
    expression.map(() => expression)
    setExpression([...numbers, ...action, ...numbers2])
    console.log(expression.join(''))
    console.log(expression)
  }, [numbers, action, numbers2])

  useEffect(() => {
    setInput()
  }, [setInput])

  useEffect(() => {
    numbers.map(() => numbers)
    numbers.join('')
    console.log(numbers)
  }, [numbers])

  useEffect(() => {
    action.map(() => action)
    console.log(action)
  }, [action])

  useEffect(() => {
    numbers2.map(() => numbers2)
    numbers2.join('')
    console.log(numbers2)
  }, [numbers2])

  return (
    <>
      <InputField expression={expression} />
      <Numbers
        setAction={setAction}
        action={action}
        setNumbers={setNumbers}
        numbers={numbers}
        setNumbers2={setNumbers2}
        numbers2={numbers2}
        isNumberPassed={isNumberPassed}
        setisNumberPassed={setisNumberPassed}
        setExpression={setExpression}
        expression={expression}
      />
    </>
  )
}

export default App
