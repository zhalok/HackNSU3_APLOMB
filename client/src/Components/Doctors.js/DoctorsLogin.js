import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const DoctorsLogin = () => {
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div style={{ padding: '20px' }}>
			<div
				style={{
					display: 'flex',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: 'fit-content',
					flexDirection: 'column',
				}}
			>
				<h1>Hello Doctor</h1>
				<br />
				<small>Please log in to your account</small>
			</div>
			<div>
				<div style={{ width: '50%' }}></div>
				<div style={{ width: '50%' }}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '50%',
							marginLeft: '800px',
							marginTop: '200px',
						}}
					>
						<input
							type='email'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='username'
							value={userName}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>

						<input
							style={{ marginTop: '20px' }}
							type='password'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='password'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginTop: '20px',
							}}
						>
							<Button variant='primary'>Log in</Button>
							<Button variant='success' style={{ marginLeft: '10px' }}>
								Register
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoctorsLogin;
