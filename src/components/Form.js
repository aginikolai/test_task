import React, {useState} from 'react';

import Input from "./Input";
import Wrapper from "./Wrapper";
import RecurcionHelper from "./RecurcionHelper";

const Form = ({file}) => {
  let arrOfkeys = Object.keys(file.items);

  const [formData, setFormData] = useState(file.items);

  const changeData = (key, item) => {
    setFormData({...formData, [key]: item.target.value});
  };

  const formItems = (arr) => {
    return arr.map((item, i) => {
      if (item.type === 'string') {
        return <Input key={i} data={item} onChange={changeData} name={arrOfkeys[i]}/>;
      } else if (item.type === 'object') {
        const arr = Object.values(item.items);
        const name = arrOfkeys[i]
        arrOfkeys = Object.keys(item.items)
        return (
          <Wrapper key={i} name={name}>
            <p>{item.description}</p>
            {formItems(arr)}
          </Wrapper>
        )
      }
      return null
    });
  };


  return (
    <>
      <h1>{file.DocumentName}</h1>
      <form action="">
        {formItems(Object.values(file.items))}
      </form>
      <RecurcionHelper file={file}/>
    </>
  )
}

export default Form;