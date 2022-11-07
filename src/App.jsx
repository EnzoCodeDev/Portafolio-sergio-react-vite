import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header/Header';
import { RoutesApp } from './routers/RoutesApp';
import './styles/styles.scss';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
