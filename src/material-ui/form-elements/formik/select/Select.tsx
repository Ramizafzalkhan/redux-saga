import React from 'react'
import { Select } from 'formik-material-ui'

export function MSelect(props:any){
    const inlineStyle = {
        width: '100%',
    };
    return(
        <Select style={inlineStyle} {...props} />
    )
}