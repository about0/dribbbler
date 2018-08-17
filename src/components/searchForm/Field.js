import React from 'react'
import { TextField } from '@material-ui/core'

export default (props, { placeholder, onChange }) => (
  <div>
    {/* <label htmlFor=''>{props.label}</label> */}
    <TextField placeholder={placeholder} {...props} onChange={onChange} />
  </div>
)
