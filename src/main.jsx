import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment";
import { I18nextProvider } from "react-i18next";
import { resources } from "./translations/global";
import "moment/locale/es";
moment.locale("es");
i18next.use(LanguageDetector).init({
  resources,
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
