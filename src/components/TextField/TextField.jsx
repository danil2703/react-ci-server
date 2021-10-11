import './TextField.scss';
import React, { useCallback, useState } from 'react';
import { ReactComponent as ResetIcon } from '../../assets/icons/reset.svg';

export const TextField = React.memo((props) => {
  const {
    label = '',
    id = '',
    type = 'text',
    className = '',
    required = false,
    unit = '',
    onChange,
    disabled = false,
    ...inputProps
  } = props;

  const [value, setValue] = useState('');
  const clearInput = useCallback(() => setValue(''), []);

  const localOnChangeHandler = useCallback(
    (event) => {
      if (event.target.value.length > 3 && type === 'number') {
        return;
      }
      setValue(event.target.value);
      if (onChange) {
        onChange(event);
      }
    },
    [onChange]
  );

  return (
    <div className={`text-field text-field__${type} ${className}`}>
      {label && (
        <label className="text-field__label" htmlFor={id}>
          {label} {required && <span className="text-field__reqire-mark"> *</span>}
        </label>
      )}
      <input type={type} className="text-field__input" onChange={localOnChangeHandler} value={value} disabled={disabled} {...inputProps} />
      {type === 'number' && <span className="text-field__minutes"> {unit}</span>}
      {value && type === 'text' && <ResetIcon className={`text-field__reset ${disabled && 'disabled'}`} onClick={clearInput} />}
    </div>
  );
});
