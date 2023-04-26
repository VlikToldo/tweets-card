import style from './button.module.scss'

const Button = ({children, onClick, subscription}) => {
    return <>
    <button  onClick={onClick} className={style.subscription ? 'isActive': ''}>{children}</button>
    </>
}

export default Button;