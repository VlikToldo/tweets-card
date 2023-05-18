import PropTypes from 'prop-types';
import style from './button.module.scss';

const Button = ({ children, onClick, subscription }) => {
  const backgroundColor = subscription ? style.btnIsActive : style.btn;

  return (
    <>
      <button onClick={onClick} className={backgroundColor}>
        {children}
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func.isRequired,
  subscription: PropTypes.bool.isRequired,
};
