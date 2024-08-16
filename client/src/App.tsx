import { useEffect } from 'react';
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { history } from './utils/history';
import LayoutWrapper from './layouts/LayoutWrapper';
import { routeLayouts } from './config';
import AuthGuard from './guards/AuthGuard';
import { AuthProvider } from './store/AuthContext';
// Pages Components
import AuthPage from './pages/auth/AuthPage';
import Home from './pages/home/Home';
import { listenToChannel, onFDC3Ready } from './utils';
// Genesis Components
import './share/genesis-components';

const LayoutWithLocation = () => {
  const location = useLocation();
  const layout = routeLayouts[location.pathname] || 'default';
  useEffect(() => {
    listenToChannel('name1', 'type1', (result) => {
      console.log('Received FDC3 channel message on: name1 channel, type: type1', result);
      // TODO: Add your listener logic here
      // E.g. open a modal or route to specific page: Route.path.push(`[Route name]`);
    });
    
    return () => {
      console.log('Component is being unmounted');
    };
  }, []);

  let pageComponent;

  switch (location.pathname) {
    case '/auth':
      pageComponent = <AuthPage />;
      break;
    case '/home':
      pageComponent = <Home />;
      break;
    default:
      pageComponent = <AuthPage />;
  }

  if (
    location.pathname === '/auth' ||
    location.pathname === '/'
  ) {
    return <LayoutWrapper layout={layout}>{pageComponent}</LayoutWrapper>;
  } else {
    return (
      <AuthGuard>
        <LayoutWrapper layout={layout}>{pageComponent}</LayoutWrapper>
      </AuthGuard>
    );
  }
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="*" element={<LayoutWithLocation />} />
        </Routes>
      </HistoryRouter>
    </AuthProvider>
  );
};

export default App;
