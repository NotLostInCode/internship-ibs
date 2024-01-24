import shopping from '../../assets/icons/shopping.svg'
import profile from '../../assets/icons/profile.svg'

export const Actions = () => {
    return (
			<div>
				<button>
					<img
						src={shopping}
						alt='shopping'
					/>
				</button>
				<button>
					<img
						src={profile}
						alt='profile'
					/>
				</button>
			</div>
		)
}