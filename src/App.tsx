import React, { useState } from 'react';
import { Button } from './components/Button';
import { PlusButton } from './components/PlusButton';
import sum from './utils/sum';

const App: React.FunctionComponent = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [ope, setOpe] = useState('');
  const [answer, setAnswer] = useState(-1);

  const onClick = (key: string): void => {
    if (!Number.isNaN(Number(key))) {
      if (ope === '=') {
        setValue1('');
        setValue2('');
        setOpe('');
        setAnswer(-1);
      }

      if (ope === '+') {
        setValue2((prev) => prev + key);
      } else {
        setValue1((prev) => prev + key);
      }
    } else if (key === '+') {
      setOpe(key);
    } else if (key === '=') {
      setAnswer(sum(Number(value1), Number(value2)));
      setOpe(key);
    }
  };
  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">{value1}</div>
      <div className="display">{value2}</div>
      <div className="display">{answer !== -1 && answer}</div>
      <div className="input">
        <div className="numbers">
          {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((el) => (
            <Button
              onClick={() => {
                onClick(el);
              }}
              label={el}
              key={el}
            />
          ))}
        </div>
        <div className="operators">
          {ope === '' && (
            <PlusButton
              onClick={() => {
                onClick('+');
              }}
              label={'+'}
            />
          )}
          {(ope === '+' || ope === '=') && (
            <PlusButton
              onClick={() => {
                onClick('=');
              }}
              label={'='}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
