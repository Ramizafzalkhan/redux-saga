import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers';

export function MDateTimePicker(props:any){

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker {...props} />
        </MuiPickersUtilsProvider>
    )
}

