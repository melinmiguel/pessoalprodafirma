import React from 'react';
import TemplatePage from './components/TemplatePage';
import Page404 from './Pages/Page404/index';

const App: React.FC = () => {
  return (
    <TemplatePage title="Teste123">
      <Page404 />
    </TemplatePage>
  );
};

export default App;
