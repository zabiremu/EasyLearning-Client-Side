import React, {Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from './router/AppRouter';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
