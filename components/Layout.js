import React from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	Link,
	createTheme,
	ThemeProvider,
	CssBaseline,
} from '@material-ui/core'
import useStyles from '../utils/styles'

export default function Layout({ title, description, children }) {
	const theme = createTheme({
		typography: {
			h1: {
				fontSize: '1.6rem',
				fontWeight: 400,
				margin: '1rem 0',
			},
			h2: {
				fontSize: '1.4rem',
				fontWeight: 400,
				margin: '1rem 0',
			},
		},
	})
	const classes = useStyles()
	return (
		<div>
			<Head>
				<title>{title ? `${title} - Next Ecommerce` : `Next Ecommerce`}</title>
				{description && <meta name='description' content={description}></meta>}
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppBar position='static' className={classes.navbar}>
					<Toolbar>
						<NextLink href='/' passHref>
							<Link>
								<Typography className={classes.brand}> Next Ecommerce </Typography>
							</Link>
						</NextLink>
						<div className={classes.grow}></div>
						<NextLink href='/cart' passHref>
							<Link>Cart</Link>
						</NextLink>
						<NextLink href='/login' passHref>
							<Link>Login</Link>
						</NextLink>
					</Toolbar>
				</AppBar>
				<Container className={classes.main}>{children}</Container>
				<footer className={classes.footer}>
					<Typography> All rights reserved. Next Ecommerce. </Typography>
				</footer>
			</ThemeProvider>
		</div>
	)
}
