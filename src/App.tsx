// Theme
import ThemeCustomization from './theme';

// Mui
import { Box } from '@mui/material';

// Emotion Cache
import EmotionCache from './theme/CacheProvider';

// Pages
import Home from './pages/home';

// Store
import { store, persistor } from './store/store';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Components
import Header from './components/layout/header';
import BottomNavigation from './components/layout/bottomNavigation';

// ------------------------------------|| APP ||--------------------------------------------------------------

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeCustomization>
          <EmotionCache>
            <Header />
            <Home />

            <Box height={56} />
            <BottomNavigation />
          </EmotionCache>
        </ThemeCustomization>
      </PersistGate>
    </Provider>
  );
}

export default App;
