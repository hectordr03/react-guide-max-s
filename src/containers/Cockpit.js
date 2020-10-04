import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = () => {
	const clicked = () => {
		console.log('button was clicked');
	};
	return (
		<div className={classes.cockpit}>
			<h3 className={classes.title}>Cockpit component</h3>
			<button className={classes.btn1} onClick={clicked}>I'm a button</button>
		</div>
	);
};

export default cockpit;
