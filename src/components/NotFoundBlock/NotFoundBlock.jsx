import styles from './notFoundBlock.module.css'

function NotFoundBlock()
{
    return (
        <div className={styles.root}>
            <h1><span>😕</span><br />Ничего не найдено</h1>
            <p className={styles.description}>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
        </div>
    )
}
export default NotFoundBlock