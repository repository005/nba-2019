import React from 'react';
import styles from './formFields.css';

const FormField = ({formData, change, id}) => {

  const renderTemplate = () => {
    let formTemplate = null;

    switch(formData.element) {
      case('input'):
      formTemplate = (
        <input 
          {...formData.config}
          value={formData.value}
          onBlur={(event) => {
            change({
              event,
              id,
              blur:true
            });
          }}
          onChange={(event) => {
            change({
              event,
              id,
              blur:false
            });
          }}
        />
      )
      break;
      default:
      formTemplate = null;
    }
    return formTemplate;
  }

  return (
    <div>
      {renderTemplate()}
    </div>
  )
}

export default FormField
