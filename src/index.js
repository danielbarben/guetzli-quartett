import React from 'react';
import ReactDOM from 'react-dom';
import GameController from './components/GameController';
import reportWebVitals from './reportWebVitals';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/reset.css';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/site.css';
import './index.css';
import { Masthead } from '@ta-interaktiv/react-masthead';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <div className='wrapper'>
      <Masthead articleId='463616578418'/>
      <GameController />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
