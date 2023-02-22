import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';

import awsConfig from './aws-exports';
import { WrappedApp } from './App';
import './index.css';

Amplify.configure(awsConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WrappedApp />
);
