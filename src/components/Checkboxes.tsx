/* import { PrimaryNeeds, primaryNeedsEnUS, primaryNeedsZhHant } from '@/const'; */
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Box from '@mui/material/Box'
import { useState, ChangeEvent } from 'react';

export type CheckboxItem<T> = {
  label: keyof T,
  code: T[keyof T],
};
export type CheckboxesProps<T> = {
  items: CheckboxItem<T>[],
  handleStateChange: (selected: (CheckboxItem<T>['code'])[]) => void,
  formLabel: string,
  helpText: string,
};
// error points to "key" below
export type CheckboxState<T> = {
  [key in keyof T]: boolean
}
// Ok to set initial state from props in this case
// because items is not expected to change after render
export default function Checkboxes<T>({items, formLabel, helpText, handleStateChange}: CheckboxesProps<T>) {
    const [state, setState] = useState(items.reduce((stateObj, item) => {
      stateObj[item.code] = false;
      return stateObj;
    }, {}));

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
        handleStateChange(Object.keys(state).filter(key => state[key]));
    };
  return (
<Box sx={{ display: 'flex' }}>
  <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormLabel component="legend">{formLabel}</FormLabel>
    <FormGroup>
      {items.map((item: CheckboxItem)=>{
        return (
          <FormControlLabel
            key={item.code}
            control={
              <Checkbox checked={state[item.code]} onChange={handleChange} name={item.code} />
            }
            label={item.label}
          />
        )
      })}
    </FormGroup>
    {helpText &&
     <FormHelperText>{helpText}</FormHelperText>
    }
  </FormControl>
</Box>
  );
}
