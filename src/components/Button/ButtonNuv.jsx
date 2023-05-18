import style from './button.module.scss'

const ButtonNuv = ({children, onClick}) => {
    return <>
    <button onClick={onClick} className={style.btn}>{children}</button>
    </>
}

export default ButtonNuv;