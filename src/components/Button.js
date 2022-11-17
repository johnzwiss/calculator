import { calculateNewValue } from "@testing-library/user-event/dist/utils"
import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"


const Button = ({ value }) => {
    const {calc, setCalc} = useContext(CalcContext)

    const leftParClick = () => {
        setCalc({
            ...calc, 
            num: 55
        })
    }
    const rightParClick = () => {
        setCalc({
            ...calc, 
            num: value
        })
    }
    const clearClick = () => {
        setCalc({
            sign:"", num: 0, res:0
        })
    }

    const handleBtnClick = () => {
        const results = {
            "(": leftParClick,
            ")": rightParClick,
            "C": clearClick,
        }
       return results [value]()
    }
  return (
    <button onClick = {handleBtnClick} className="button">{value}</button>
  )
}

export default Button