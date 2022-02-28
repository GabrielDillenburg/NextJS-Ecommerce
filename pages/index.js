import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import {
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Link,
} from '@material-ui/core'
import data from '../utils/data'
import NextLink from 'next/link'
import db from '../utils/db'
import Product from '../models/Product'

export default function Home() {
	return (
		<Layout>
			<div>
				<h1> Products </h1>
				<ul>
					<Grid container spacing={3}>
						{data.products.map((product) => (
							<Grid item md={4} key={product.name}>
								<Card>
									<NextLink href={`/product/${product.slug}`} passHref>
										<CardActionArea>
											<CardMedia
												component='img'
												image={product.image}
												title={product.name}></CardMedia>
											<CardContent>
												<Typography>{product.name}</Typography>
											</CardContent>
										</CardActionArea>
									</NextLink>
									<CardActions>
										<Typography>R$ {product.price}</Typography>
										<Button size='small' color='primary'>
											Add to cart
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</ul>
			</div>
		</Layout>
	)
}

// get products before the page render
export async function getServerSideProps() {
	await db.connect()
	const products = await Product.find({})
	await db.disconnect()

	return {
		props: {
			products,
		},
	}
}
