import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '@/components/Layout';
import '@/app.less';


const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
