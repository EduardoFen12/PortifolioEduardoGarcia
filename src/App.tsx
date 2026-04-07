import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { LoadingScreen } from './components/LoadingScreen';
import { useAppContext } from './context/AppContext';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';

const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35 },
};

export default function App() {
  const location = useLocation();
  const { isLoading } = useAppContext();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <SiteLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition}>
                <HomePage />
              </motion.div>
            }
          />
          <Route
            path="/project/:id"
            element={
              <motion.div {...pageTransition}>
                <ProjectPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </SiteLayout>
  );
}
