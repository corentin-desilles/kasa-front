import Header from './components/Header/Header';
import style from './App.module.scss';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';
import AuthProvider from './components/AuthProvider/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <div className={`${style.layout}`}>
          <Header />
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
        <ScrollButton />
        <div className={`${style.footerContainer}`}>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
