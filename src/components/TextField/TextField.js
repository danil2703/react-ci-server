import { useState } from 'react';
import './TextField.scss';
import { ReactComponent as ResetIcon } from '../../assets/icons/reset.svg';

function TextField({ label, id, placeholder, ...inputProps }) {
  const [value, setValue] = useState('');
  return (
    <div className="text-field">
      <label className="text-field_label" htmlFor={id}>
        {label}
        {require && <span className="text-field_reqire-mark"> *</span>}
      </label>
      <input
        className="text-field_input"
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
        id={id}
        placeholder={placeholder}
        {...inputProps}
      />
      {value && <ResetIcon className="text-field_reset" onClick={() => setValue('')} />}
    </div>
  );
}

export default TextField;
