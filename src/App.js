import React from "react";

import Form from "./components/Form";
import './App.css';
import FormCreator from "./components/FormCreator";

function App() {
  const file = {
    DocumentName: 'Прекрасный документ',
    items: {
      Name: {
        type: 'string',
        description: 'Имя',
      },
      LastName: {
        type: 'string',
        description: 'Фамилия',
      },
      Patronymic: {
        type: 'string',
        description: 'Отчество',
      },
      Contacts: {
        type: 'object',
        description: 'Контактные данные',
        items: {
          Address: {
            type: 'object',
            description: 'Адрес',
            items: {
              City: {
                type: 'string',
                description: 'Город',
              },
              Street: {
                type: 'string',
                description: 'Улица',
              },
              House: {
                type: 'string',
                description: 'Дом',
              },
            },
          },
          Phones: {
            type: 'array',
            description: 'Телефоны',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  }
  return (
    <div className="App">
      <div className="wrapper">
        <FormCreator file={file}/>
      </div>
    </div>
  );
}

export default App;
