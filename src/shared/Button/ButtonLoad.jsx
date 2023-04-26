import style from './button.module.scss'

const ButtonLoad = ({children, onClick}) => {
    return <>
    <button onClick={onClick} className={style}>{children}</button>
    </>
}

export default ButtonLoad;