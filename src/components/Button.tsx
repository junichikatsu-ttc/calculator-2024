import React from 'react';

interface Props {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

export const Button: React.FunctionComponent<Props> = ({ onClick, label, disabled }: Props) =>{
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
