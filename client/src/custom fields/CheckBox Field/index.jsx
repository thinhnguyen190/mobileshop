import { FormGroup } from '@material-ui/core'
import React from 'react'
import { LabelCheckBox, Option } from './CheckBoxField.styled'
import { Field } from "formik"

const CheckBoxField = (props) => {
    const { label, options, onChecked, name, listChecked } = props
    const setChecked = (value) => {
        if(listChecked.length === 0){
            if(value === ""){
                return true
            }else{
                return false
            }
        }else{
            return listChecked.includes(value)
        }
    }
    return (
        <FormGroup>
            <LabelCheckBox>{label}</LabelCheckBox>
            {options.map((op) => {
                return <label key={op.label}>
                    <Option>
                    <Field 
                        type="checkbox"
                        name={name}
                        value={op.value}
                        onChange={(e) => onChecked(name,e.target.value)}
                        checked = {setChecked(op.value)}
                     
                    />
                    <p>{op.label}</p>
                    </Option>
                </label>
            })}
        </FormGroup>
    )
}

export default CheckBoxField
