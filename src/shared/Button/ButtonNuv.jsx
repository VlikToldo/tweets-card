import style from './button.module.scss'

const ButtonNuv = ({children, onClick}) => {
    return <>
    <button onClick={onClick} className={style}>{children}</button>
    </>
}

export default ButtonNuv;