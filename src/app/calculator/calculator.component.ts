import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: number;
  firstOperand: number ;
  secondOperand: number ;
  operand = '+';

  updateFirstOperand(firstNumber) {
    this.firstOperand = Number(firstNumber);
  }

  updateSecondOperand(secondNumber) {
    this.secondOperand = Number(secondNumber);
  }

  updateOperand(operand) {
    this.operand = operand;
  }

  calculate() {
    switch (this.operand) {
      case '+':
        this.result = parseFloat(String(this.firstOperand)) + parseFloat(String(this.secondOperand));
        break;
      case '-':
        this.result = this.firstOperand - this.secondOperand;
        break;
      case 'X':
        this.result = this.firstOperand * this.secondOperand;
        break;
      case '/':
          this.result = this.firstOperand / this.secondOperand;
          break;
        }
  }

  constructor() { }

  ngOnInit() {
  }

}
