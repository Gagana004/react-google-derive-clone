import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/sidebar";
import FilesView from "./components/filesView/FilesView";
import SideIcons from "./components/sideIcons"

import GDriveLogo from './media/Google_Drive_icon.png'
import { auth, provider } from "./firebase";

function App() {
	const [user, setUser] = useState()

	const handleLogin = () => {
		if (!user) {
			auth.signInWithPopup(provider).then((result) => {
				setUser(result.user)
				console.log(result.user)
			}).catch((error) => {
				alert(error.message);
			});
		} else if (user) {
			auth.signOut().then(() => {
				setUser(null)
			}).catch((err) => alert(err.message))
		}
	}

	return (
		<div className="app">
			{
				user ? (
					<>
						<Header userPhoto={user.photoURL} />
						<div className="app__main">
							<Sidebar />
							<FilesView />
							<SideIcons />
						</div>
					</>
				) : (
					<div className='app__login'>
						<div className="app__login--logo">
							<img src={GDriveLogo} alt="Google Drive" />
						</div>
						<div className="loginbutton">
							<button className="loginButton" onClick={handleLogin}>Log in to Google Drive</button>
						</div>
					</div>
				)
			}
		</div>
	);
}

export default App;
