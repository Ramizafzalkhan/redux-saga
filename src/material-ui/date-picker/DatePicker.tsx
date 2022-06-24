import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';

export function MDatePicker(props:any){

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          {...props}
        />
        </MuiPickersUtilsProvider>
    )
}

