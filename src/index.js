import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './styles/theme';
import 'boxicons';
import './styles/override-bootstrap.scss';

function Root() {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark' || false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <App isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
