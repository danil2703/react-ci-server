import './Button.scss';

function Button({ label = '', color = 'primary', icon = '', size = 'big' }) {
  return (
    <button
      className={`button button_color_${color} button_size_${size} ${icon && 'button_with-icon'}`}
      type="button"
    >
      {icon && <img className="button_icon" src={icon} />}
      {label}
    </button>
  );
}

export default Button;
