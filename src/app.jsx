import {LocationProvider, Route, Router} from 'preact-iso';
import {Home} from './pages/Home';

export function App () {
	return (
		<LocationProvider>
			<Router>
				<Route path="/" component={Home} />
			</Router>
		</LocationProvider>
	);
}
