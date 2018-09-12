import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/app';
import './themes/index.less'
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
