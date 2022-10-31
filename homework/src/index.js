import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContactForm } from './components/ContactForm';
import { BookManager } from './components/BookManager';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookManager/>
);

