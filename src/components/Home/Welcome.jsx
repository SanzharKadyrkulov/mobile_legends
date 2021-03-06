import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	mainFeaturesPost: {
		position: 'relative',
		color: theme.palette.common.white,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		marginBottom: theme.spacing(0),
	},
	mainFeaturesPostContent: {
		position: 'relative',
		padding: theme.spacing(16.6),
		marginTop: theme.spacing(40),
	},
}));

const Welcome = () => {
	const classes = useStyles();
	return (
		<Paper
			className={classes.mainFeaturesPost}
			style={{
				backgroundImage: `url(https://sm.ign.com/ign_ru/screenshot/default/kopiia-logo_h5c8.jpg)`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<Container fixed>
				<div className={classes.overlay} />
				<Grid container>
					<Grid item md={6}>
						<div className={classes.mainFeaturesPostContent}>
							<Button
								href='/productList'
								variant='contained'
								style={{ backgroundColor: '#19bbef' }}
							>
								Get started
							</Button>
						</div>
					</Grid>
				</Grid>
			</Container>
		</Paper>
	);
};

export default Welcome;
