import React from "react";
import Button  from "./buttons";
import Display from "./display";
import './calculator.css';
import './buttons.css';

function Body(){
    const [calc, setCalc] = React.useState({
        current: '0',
        total:'0',
        is_initial: true,
        preOp:''
    });
    function handle_number(value){
        let new_value = value;
        if (!calc.is_initial){
            new_value = calc.current + value;
        }
        

        setCalc({current:new_value, total: calc.total, is_initial: false, preOp:calc.preOp});

    }


    function handle_operator(value){
const total = calculate();
setCalc({current: total.toString(),total : total.toString(), is_initial: true, preOp: value});
    }

    function calculate(){
        
        console.log(calc)

        let total = parseInt(calc.total);        
        switch (calc.preOp){
            case "+":
                total += parseInt(calc.current);
                break;
            case '-':
                total -= parseInt(calc.current);
                break;
                
            case '*':
                total *= parseInt(calc.current);
                break;
            case '/':
                total /= parseInt(calc.current);
                break;
            default:
                total = parseInt(calc.current);
        }
        return total;
    }

        function handle_clear(){
            setCalc({total : '0', current: '0', is_initial: true, preOp : calc.preOp})
        }

        function handle_equal(){
            let total = calculate();
            setCalc({current: total.toString(),total : total.toString(), is_initial: true, preOp: '='})
        }


return (
        <div className="button-body">
            <Display value = {calc.current}></Display>
<Button onClick = {handle_number} value = '7'></Button>
<Button onClick = {handle_number} value = '8'></Button>
<Button onClick = {handle_number} value = '9'></Button>
<Button onClick={handle_operator} className = "operator" value = '/'></Button>
<Button onClick = {handle_number} value = '4'></Button>
<Button onClick = {handle_number} value = '5'></Button>
<Button onClick = {handle_number} value = '6'></Button>
<Button onClick={handle_operator}  className = "operator" value = '*'></Button>
<Button onClick = {handle_number} value = '1'></Button>
<Button onClick = {handle_number} value = '2'></Button>
<Button onClick = {handle_number} value = '3'></Button>
<Button  onClick={handle_operator}  className = "operator" value = '-'></Button>
<Button  value = 'C' onClick ={handle_clear}  ></Button>
<Button onClick = {handle_number} value = '0'></Button>
<Button value = '=' onClick ={handle_equal}></Button>
<Button onClick={handle_operator}  className = "operator" value = '+'></Button>
        </div>
    );
}

export default Body;