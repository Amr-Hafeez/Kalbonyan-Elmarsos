
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n.js';
import App from "./App.jsx";
import {AppProvider} from "./context/appContext.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
	<AppProvider>
		<App/>
	</AppProvider>
)
