import React from 'react';

const Input = ({data = {description: 'Номер телефона'}, onChange, name, array, onChangeArr}) => {
  const description = data.description;
  return (
    <>
      <p>{description}</p>
      <input
        type={array ? 'number' : 'text'}
        onChange={(event) => {
          !array ? onChange(name, event) : onChangeArr(name, event.target.value)
        } }
      />
    </>
  )
};

export default Input;