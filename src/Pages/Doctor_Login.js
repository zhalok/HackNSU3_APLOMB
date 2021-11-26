import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const DoctorLogin = () => {
	return (
		<div>
			<div></div>
			<div
				style={{
					width: '25%',
					marginLeft: 'auto',
					marginRight: '200px',
					marginTop: '100px',
				}}
			>
				<input
					type='email'
					class='form-control'
					id='exampleFormControlInput1'
					placeholder='Username'
				/>
				<input
					style={{ marginTop: '20px' }}
					type='password'
					class='form-control'
					id='exampleFormControlInput1'
					placeholder='Password'
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						marginTop: '20px',
					}}
				>
					<div>
						<Button variant='primary'>Submit</Button>
					</div>

					<div style={{ marginLeft: '20px' }}>
						<Button variant='success' style={{ marginRight: 'auto' }}>
							Register
						</Button>
					</div>
				</div>
				<small>New here? Register with us</small>
			</div>
		</div>
	);
};

export default DoctorLogin;
