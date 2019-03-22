import React from 'react'
export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>


// import React from 'react'
// import { Message } from 'semantic-ui-react'

// export const FormErrors = ({formErrors}) => (
//   <Message>
//     {Object.keys(formErrors).map((fieldName, i) => {
//       if(formErrors[fieldName].length > 0){
//         return (
//           <p key={i}>{fieldName} {formErrors[fieldName]}</p>
//         )        
//       } else {
//         return '';
//       }
//     })}
//   </Message>
// )
