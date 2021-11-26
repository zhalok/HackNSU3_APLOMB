import { Button } from 'bootstrap';
import React from 'react';
import img from '../../Images/Tanjum.jpg';
const DoctorDetails = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginLeft: 'auto',
				marginRight: 'auto',
				width: 'fit-content',
				marginTop: '100px',
			}}
		>
			<div
				className='info section'
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: 'fit-content',
					marginTop: '50px',
				}}
			>
				<div className='doctors image'>
					<img style={{ width: '300px', height: '300px' }} src={img} />
				</div>
				<div>
					<h2>Dr Tanjum Obaied</h2>
					<h3>MBBS,FCPS</h3>
					<h4>Gynecologist</h4>
					<h5>Dhaka Medical College Hospital</h5>
				</div>
			</div>
			<div
				className='appointment section'
				style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '30px' }}
			>
				<button type='button' class='btn btn-primary'>
					Book Appointment
				</button>
			</div>
		</div>
	);
};
export default DoctorDetails;
