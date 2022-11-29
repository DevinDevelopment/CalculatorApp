/* 🙂 */
import './App.css';
import calc from './calcLogo.PNG';
import React, { useState } from 'react';
import Select from 'react-select';
import "bootstrap/dist/css/bootstrap.min.css";

function Operators() {
    var ops = [
        {
            value: "+",
            label: "Addition"
        },
        {
            value: "-",
            label: "Subtraction"
        },
        {
            value: "*",
            label: "Multiplication"
        },
        {
            value: "/",
            label: "Division"
        }
    ];

    function clickHandler() {
        var num1 = document.getElementById('typeNumber1').value;
        var num2 = document.getElementById('typeNumber2').value;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        var calcResult;

        //--Testing purposes--
        //console.log(num1);
        //console.log(calcResult);
        //console.log(num2);

        if (result === undefined || isNaN(num1) || isNaN(num2)) {
            alert("Not able to calculate. Make sure all feilds are filled.")
        }
        if (result === "+") {
            calcResult = num1 + num2;
        }
        if (result === "-") {
            calcResult = num1 - num2;
        }
        if (result === "*") {
            calcResult = num1 * num2;
        }
        if (result === "/") {
            calcResult = num1 / num2;
        }

        document.getElementById('output').value = calcResult;

    }

    const [result, opvalue] = useState(ops.value);
    const oper = e => {
        opvalue(e.value);
    }

    return (
        <div className="App">
            <div class="container border rounded border-3 border-secondary mt-4">
                <div class="row">
                    <div class="col-6 ">
                        <h2 class="mt-2">
                            <span><img src={calc} alt="Logo" width="10%" /></span>
                            <span class="ms-1 pt-1">The Calculator</span>
                        </h2>
                    </div>

                    <hr></hr>

                </div>

                <div class="border border-secondary border-2 center w-50 rounded mb-3 mx-auto" >
                    <div class="row border-bottom border-secondary m-1">
                        <b>Instructions:</b>
                    </div>
                    <div class="row">
                        <div class="col">
                            <ul>
                                <li>Select an operator.</li>
                                <li>Imput numbers into feilds.</li>
                                <li>Click "=" button to calculate. </li>
                            </ul>
                        </div>
                    </div>
                </div>

                &nbsp;

                <div>
                    <Select options={ops} onChange={oper} />
                </div>

                &nbsp;
        
                <div class="row">
                    <div class="col-3">
                        <div class="form-outline">
                            <input type="number" id="typeNumber1" class="form-control" defaultValue="1" />
                            <label class="form-label" for="typeNumber"></label>
                        </div>
                    </div>

                    <div class="col-1">
                        <p class="operate mt-2" id="res"><center>{result}</center></p>
                    </div>

                    <div class="col-3">
                        <div class="form-outline">

                            <input type="number" id="typeNumber2" class="form-control" defaultValue="1" />
                            <label class="form-label" for="typeNumber"></label>
                        </div>
                    </div>

                    <div class="col-1 ms-2">
                        <button type="button" class="btn btn-warning" onClick={clickHandler}>=</button>
                    </div>

                    <div class="col-3">

                        <div class="form-outline">
                            <div class="input-group">
                                <input type="text" id="output" class="form-control" placeholder="Result" disabled={true}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Operators;
