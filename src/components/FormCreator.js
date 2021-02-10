import React, {useState, useEffect} from 'react';
import Input from "./Input";

const FormCreator = (props) => {
  const [values, setValues] = useState({});

  const level = props.level || 1;
  const object = props.file || {DocumentName: 'Test'};
  const arrOfObjects = Object.values(object.items);
  const arrOfKeys = Object.keys(object.items);
  const grayColor = level%2;

  const addingFields = (obj, key) => {
    setValues(prevSate => ({
      ...prevSate,
      [key]: obj
    }))
  };

  useEffect(() => {
    arrOfObjects.forEach((item, i) => {
      if (item.type === 'string') {
        setValues(prevSate => ({
          ...prevSate,
          [arrOfKeys[i]]: null
        }))
      } else if (item.type === 'object') {
        // props.add(values, props.name)
        setValues(prevSate => ({
          ...prevSate,
          [arrOfKeys[i]]: {}
        }))
      }
    })
  }, []);

  useEffect(() => {
    if (level > 1) {
      props.add(values, props.name);
    }
  }, [values]);

  const settingValues = (key, input) => {
    setValues({...values, [key]: input.target.value})
  };

  const itemsData = arrOfObjects.map((item, i) => {
    if (item.type === 'string') {
      return (
        <Input data={item} name={arrOfKeys[i]} onChange={settingValues} />
      )
    } else if (item.type === 'object') {
      return <FormCreator file={item} level={level + 1} name={arrOfKeys[i]} add={addingFields} />
    }
    return null
  })

  return (
    <div className='werticalWrapper'>
      <div
        className='FieldsContainer'
        style={{
          background: grayColor ? 'lightgray' : 'white',
          width: `${90 * ((100-level*2)/100)}vw`
        }}
      >
        <h2>{level === 1 ? object.DocumentName : object.description}</h2>
        {itemsData}
      </div>
      {level === 1 && (
        <button onClick={() => console.log(values)}>Отправить</button>
      ) }
    </div>
  )
}

export default FormCreator