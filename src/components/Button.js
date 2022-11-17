import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"


const Button = ({ value }) => {
    const {calc, setCalc} = useContext(CalcContext)

    const leftParClick = () => {
        setCalc({
            ...calc, 
            num: "("
        })
    }
    const rightParClick = () => {
        setCalc({
            ...calc, 
            num: ")"
        })
    }
    const clearClick = () => {
        setCalc({
            sign:"", num: 0, res:0
        })
    }

    const handleClickButton = () => {
        const numberString = value.toString()
    
        let numberValue;
        if(numberString === '0' && calc.num === 0) {
          numberValue = "0"
        } else {
          numberValue = Number(calc.num + numberString)
        }
    
        setCalc({
          ...calc,
          num: numberValue
        })
      }
      const signClick = () => {
        setCalc({
          sign: value,
          res: !calc.res && calc.num ? calc.num : calc.res,
          num: 0
        })
      }

      const equalsClick = () => {
        if(calc.res && calc.num) {
          const math = (a, b, sign) => {
            const result = {
              '+': (a, b) => a + b,
              '-': (a, b) => a - b,
              'x': (a, b) => a * b,
              '/': (a, b) => a / b,
              '^': (a, b) => Math.pow(a, b)
            }
            return result[sign](a, b);
          }
          setCalc({
            res: math(calc.res, calc.num, calc.sign),
            sign: '',
            num: 0
          })
        }
      }


    

    const handleBtnClick = () => {
        const results = {
            "(": leftParClick,
            ")": rightParClick,
            "C": clearClick,
            '/': signClick,
            'x': signClick,
            '-': signClick,
            '+': signClick,
            '^': signClick,
            '=': equalsClick,
            
          }
          if(results[value]) {
            return results[value]()
          } else {
            return handleClickButton()
          }
        }
  return (
    <button onClick = {handleBtnClick} className="button">{value}</button>
  )
}

export default Button