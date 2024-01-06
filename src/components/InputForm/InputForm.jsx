import { Input } from 'antd'
import React, { useState } from 'react'
import { WrapperInput } from './style'

const InputForm = (props) => {
    const [valueInput, setvalueInput] = useState('')
    const {placeholder = 'Nhập tài khoản', ...rests} = props
  return (
    <WrapperInput placeholder={placeholder} valueInput={valueInput} {...rests} />
    
  )
}
export default InputForm
