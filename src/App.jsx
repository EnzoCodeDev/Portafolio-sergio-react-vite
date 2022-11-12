import { BrowserRouter } from 'react-router-dom';
import { motion } from "framer-motion";
import { Header } from './components/header/Header';
import { RoutesApp } from './routers/RoutesApp';
import './styles/styles.scss';
const animations = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
};
function App() {
  return (
    <BrowserRouter>
      <Header />
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
      >
        <RoutesApp />
      </motion.div>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
