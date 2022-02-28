import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	navbar: {
		backgroundColor: '#203040',
		'& a': {
			color: '#ffffff',
			marginLeft: 10,
		},
	},
	main: {
		minHeight: '80vh',
	},
	grow: {
		flexGrow: 1,
	},
	footer: {
		textAlign: 'center',
	},
	brand: {
		fontWeight: 'bold',
		fontSize: '1.5rem',
	},
	section: {
		marginTop: 10,
		marginBottom: 10,
	},
})

export default useStyles
