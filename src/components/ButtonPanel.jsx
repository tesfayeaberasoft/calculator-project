import React from 'react';
import Button from './Button';

const ButtonPanel = ({ 
  onDigitClick, 
  onDecimalClick, 
  onClearAll, 
  onClearEntry, 
  onDelete, 
  onOperatorClick, 
  onToggleSign, 
  onPercent, 
  onEquals 
}) => {
  return (
    <div className="button-panel">
      <div className="buttons-grid">
        <Button variant="clear" onClick={onClearAll}>AC</Button>
        <Button variant="special" onClick={onClearEntry}>CE</Button>
        <Button variant="special" onClick={onDelete}>⌫</Button>
        <Button variant="operator" onClick={() => onOperatorClick('÷')}>÷</Button>
        
        <Button onClick={() => onDigitClick('7')}>7</Button>
        <Button onClick={() => onDigitClick('8')}>8</Button>
        <Button onClick={() => onDigitClick('9')}>9</Button>
        <Button variant="operator" onClick={() => onOperatorClick('×')}>×</Button>
        
        <Button onClick={() => onDigitClick('4')}>4</Button>
        <Button onClick={() => onDigitClick('5')}>5</Button>
        <Button onClick={() => onDigitClick('6')}>6</Button>
        <Button variant="operator" onClick={() => onOperatorClick('-')}>-</Button>
        
        <Button onClick={() => onDigitClick('1')}>1</Button>
        <Button onClick={() => onDigitClick('2')}>2</Button>
        <Button onClick={() => onDigitClick('3')}>3</Button>
        <Button variant="operator" onClick={() => onOperatorClick('+')}>+</Button>
        
        <Button wide={true} onClick={() => onDigitClick('0')}>0</Button>
        <Button onClick={onDecimalClick}>.</Button>
        <Button variant="special" onClick={onToggleSign}>±</Button>
        <Button variant="special" onClick={onPercent}>%</Button>
        <Button variant="equals" onClick={onEquals}>=</Button>
        
      </div>
    </div>
  );
};

export default ButtonPanel;