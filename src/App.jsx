import React, { useState } from 'react';
import './components/style.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [expression, setExpression] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [pendingOperator, setPendingOperator] = useState(null);
  const [storedValue, setStoredValue] = useState(null);
  const [justEvaluated, setJustEvaluated] = useState(false);

  // Format number to avoid too many decimals or scientific notation
  const formatNumber = (num) => {
    if (num === null || num === undefined) return '0';
    let number = parseFloat(num);
    if (isNaN(number)) return '0';
    
    if (Math.abs(number) > 1e12 || (Math.abs(number) < 1e-8 && number !== 0)) {
      return number.toExponential(8);
    }
    
    let stringified = number.toString();
    if (stringified.includes('.')) {
      let parts = stringified.split('.');
      if (parts[1].length > 10) {
        return number.toFixed(10).replace(/\.?0+$/, '');
      }
    }
    return stringified;
  };

  const clearAll = () => {
    setDisplayValue('0');
    setExpression('');
    setWaitingForOperand(false);
    setPendingOperator(null);
    setStoredValue(null);
    setJustEvaluated(false);
  };

  const clearEntry = () => {
    setDisplayValue('0');
    setWaitingForOperand(false);
    setJustEvaluated(false);
  };

  const deleteLastDigit = () => {
    if (justEvaluated) {
      clearAll();
      return;
    }
    if (waitingForOperand) return;
    
    let current = displayValue.toString();
    if (current === '0' || current.length === 1) {
      setDisplayValue('0');
    } else {
      let newVal = current.slice(0, -1);
      if (newVal === '-' || newVal === '') newVal = '0';
      setDisplayValue(newVal);
    }
  };

  const inputDigit = (digit) => {
    if (justEvaluated) {
      setDisplayValue(digit.toString());
      setExpression('');
      setStoredValue(null);
      setPendingOperator(null);
      setWaitingForOperand(false);
      setJustEvaluated(false);
      return;
    }
    
    if (waitingForOperand) {
      setDisplayValue(digit.toString());
      setWaitingForOperand(false);
      setJustEvaluated(false);
    } else {
      let newValue = (displayValue === '0' && digit !== '.') ? digit.toString() : displayValue + digit;
      if (newValue.replace(/[.-]/g, '').length > 18) return;
      setDisplayValue(newValue);
    }
  };

  const inputDecimal = () => {
    if (justEvaluated) {
      setDisplayValue('0.');
      setExpression('');
      setStoredValue(null);
      setPendingOperator(null);
      setWaitingForOperand(false);
      setJustEvaluated(false);
      return;
    }
    
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
      return;
    }
    
    if (displayValue.includes('.')) return;
    setDisplayValue(displayValue + '.');
  };

  const toggleSign = () => {
    if (justEvaluated) {
      let currentVal = parseFloat(displayValue);
      let toggled = (-currentVal).toString();
      setDisplayValue(formatNumber(toggled));
      setExpression('');
      setJustEvaluated(false);
      setStoredValue(null);
      setPendingOperator(null);
      return;
    }
    
    if (displayValue === '0') return;
    let newVal = parseFloat(displayValue) * -1;
    setDisplayValue(formatNumber(newVal.toString()));
  };

  const percentOp = () => {
    if (justEvaluated) {
      let val = parseFloat(displayValue) / 100;
      setDisplayValue(formatNumber(val.toString()));
      setJustEvaluated(false);
      setExpression('');
      setStoredValue(null);
      setPendingOperator(null);
      return;
    }
    let current = parseFloat(displayValue);
    let percentValue = current / 100;
    setDisplayValue(formatNumber(percentValue.toString()));
    setWaitingForOperand(false);
  };

  const calculate = (left, right, operator) => {
    const a = parseFloat(left);
    const b = parseFloat(right);
    if (isNaN(a) || isNaN(b)) return 0;
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? NaN : a / b;
      default: return b;
    }
  };

  const handleOperator = (op) => {
    if (justEvaluated) {
      setStoredValue(parseFloat(displayValue));
      setPendingOperator(op);
      setWaitingForOperand(true);
      setJustEvaluated(false);
      setExpression(`${formatNumber(displayValue)} ${op}`);
      return;
    }
    
    const inputValue = parseFloat(displayValue);
    
    if (pendingOperator !== null && !waitingForOperand) {
      const result = calculate(storedValue, inputValue, pendingOperator);
      if (isNaN(result) || !isFinite(result)) {
        setDisplayValue('Error');
        setExpression('');
        setPendingOperator(null);
        setStoredValue(null);
        setWaitingForOperand(true);
        setJustEvaluated(false);
        return;
      }
      const formattedResult = formatNumber(result);
      setStoredValue(result);
      setDisplayValue(formattedResult);
      setExpression(`${formattedResult} ${op}`);
      setPendingOperator(op);
      setWaitingForOperand(true);
    } else {
      setStoredValue(inputValue);
      setPendingOperator(op);
      setWaitingForOperand(true);
      setExpression(`${formatNumber(displayValue)} ${op}`);
    }
    setJustEvaluated(false);
  };

  const evaluateEquals = () => {
    if (justEvaluated) return;
    
    if (pendingOperator !== null && !waitingForOperand) {
      const current = parseFloat(displayValue);
      const result = calculate(storedValue, current, pendingOperator);
      if (isNaN(result) || !isFinite(result)) {
        setDisplayValue('Error');
        setExpression('');
        setPendingOperator(null);
        setStoredValue(null);
        setWaitingForOperand(true);
        setJustEvaluated(true);
        return;
      }
      const finalResult = formatNumber(result);
      const exprString = `${formatNumber(storedValue)} ${pendingOperator} ${formatNumber(current)} =`;
      setExpression(exprString);
      setDisplayValue(finalResult);
      setStoredValue(result);
      setPendingOperator(null);
      setWaitingForOperand(true);
      setJustEvaluated(true);
    }
  };

  const getDisplayString = () => {
    if (displayValue === 'Error') return 'Error';
    let val = displayValue.toString();
    if (val.length > 20) return parseFloat(val).toExponential(10);
    return val;
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Display 
          expression={expression} 
          displayValue={getDisplayString()} 
        />
        <ButtonPanel
          onDigitClick={inputDigit}
          onDecimalClick={inputDecimal}
          onClearAll={clearAll}
          onClearEntry={clearEntry}
          onDelete={deleteLastDigit}
          onOperatorClick={handleOperator}
          onToggleSign={toggleSign}
          onPercent={percentOp}
          onEquals={evaluateEquals}
        />
      </div>
    </div>
  );
};

export default App;