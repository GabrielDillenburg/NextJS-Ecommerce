import React from 'react'
import data from '../../utils/data'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import NextLink from 'next/link'
import { Link, Grid, ListItem, List, Typography } from '@material-ui/core'
import useStyles from '../../utils/styles'
import Image from 'next/image'

export default function ProductScreen() {
	const classes = useStyles()
	const router = useRouter()
	const { slug } = router.query
	const product = data.products.find((a) => a.slug === slug)
	if (!product) {
		return <div> Product Not Found</div>
	}
	return (
		<Layout title={product.name}>
			<div className={classes.section}>
				<NextLink href='/' passHref>
					<Link> Back to products </Link>
				</NextLink>
			</div>
			<Grid container spacing={1}>
				<Grid item md={6} xs={12}>
					<Image
						src={product.image}
						alt={product.name}
						width={640}
						height={640}
						layout='responsive'></Image>
				</Grid>
				<Grid item md={3} xs={12}>
					<List>
						<ListItem>
							<Typography> Category:{product.category} </Typography>
						</ListItem>
						<ListItem>
							<Typography> Brand: {product.brand}</Typography>
						</ListItem>
						<ListItem>
							<Typography>
								Rating: {product.rating} stars {product.numReviews}
							</Typography>
						</ListItem>
						<ListItem>
							<Typography> Description: {product.description}</Typography>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</Layout>
	)
}
