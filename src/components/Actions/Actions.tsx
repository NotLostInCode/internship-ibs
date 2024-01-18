import styles from './Actions.module.css'
import shopping from '../../assets/icons/shopping.svg'
import profile from '../../assets/icons/profile.svg'

export const Actions = () => {
    return (
			<div className={styles.actions}>
				<button className={styles.actionButton}>
					<img
						src={shopping}
						alt='shopping'
						className={styles.actionsImg}
					/>
				</button>
				<button className={styles.actionButton}>
					<img
						src={profile}
						alt='profile'
						className={styles.actionsImg}
					/>
				</button>
			</div>
		)
}