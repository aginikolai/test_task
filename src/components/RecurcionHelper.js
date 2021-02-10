import React, {useState} from 'react';

const RecurcionHelper = ({file}) => {
  // const [arrOfObjects, setArrOfObjects] = useState([]);
  const arr = [];

  const getNestedObjects = (obj) => {
    for (let key in obj) {
      if (obj[key].type === 'object') {
        arr.push(obj[key])
        getNestedObjects(obj[key].items)
      }
    }
  }
  getNestedObjects(file.items);

  return (
    <p>Helper</p>
  )
}

export default RecurcionHelper;