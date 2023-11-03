import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  
  const [wage, setWage] = useState(0)

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    console.log("HireForm.handleSubmit() called")
    console.log("wage=", wage)
    console.log("props.person=", props.person)
    navigate("/Dashboard")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
