import React from 'react';

import { FireBaseProvider } from './controller';
import { Home } from './screens/Home';

const App = () => {
  return (
    <FireBaseProvider>
      <Home />
    </FireBaseProvider>
  );
};

export default App;
