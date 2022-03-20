/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import { Grid } from '@material-ui/core';
// import { useParams } from 'react-router-dom';
import ProductCard from '../Home/ProductCard';
import MainLayout from '../../layouts/MainLayouts';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	tableCellImg: {
		width: 50,
	},
});

export default function Cart() {
	const classes = useStyles();
	// const params = useParams()
	const { fav, getFav } = useProducts();
	useEffect(() => {
		getFav();
	}, []);
	// useEffect(() => {
	//     if (!localStorage.getItem('token')) {
	//         history.push('/')
	//         alert("Login or Signup")
	//     }
	// }, [params])

	return (
		<MainLayout>
			<div
				style={{
					backgroundImage:
						'url(https://cdn.wallpapersafari.com/88/97/9dS6DT.jpg)',
				}}
				className={classes.cardGrid}
				maxWidth='md'
			>
				<Grid
					style={{ marginTop: '0px', marginBottom: '0px' }}
					container
					spacing={4}
				>
					{fav.products &&
						fav.products.map((product) => (
							<ProductCard key={product.item.id} item={product.item} />
						))}
				</Grid>
				{/* <div style={{ marginLeft: '300px', marginTop: '20px' }}>
          <Pagination count={pages} color="primary" page={+page} onChange={handlePage} />
        </div> */}
			</div>
		</MainLayout>
	);
}
