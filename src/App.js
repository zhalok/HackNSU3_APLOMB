import logo from './logo.svg';
import './App.css';
import DoctorsLogin from './Components/Doctors.js/DoctorsLogin';
import DoctorRegister from './Components/Doctors.js/DoctorRegister';
import DoctorDetails from './Components/Doctors.js/DoctorDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<h1>Hello world</h1>} />
					<Route path='/doctors/login' element={<DoctorsLogin />} />
					<Route path='doctors/register' element={<DoctorRegister />} />
					<Route
						path='doctors/appointment/:doctorId'
						element={<DoctorDetails />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
