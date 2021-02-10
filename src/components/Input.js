import React from 'react';

const Input = ({data, onChange, name, setData}) => {
  // React.useEffect(() => {
  //   setData(name, '')
  // }, [])
  return (
    <>
      <p>{data.description}</p>
      <input
        type="text"
        onChange={(event) => onChange(name, event)}
      />
    </>
  )
};

export default Input;