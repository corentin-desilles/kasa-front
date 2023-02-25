import Header from './components/Header/Header';
import style from './App.module.scss';
import { Outlet, useLoaderData } from 'react-router';
import { Suspense } from 'react';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';

function App() {
  const user = useLoaderData();
  console.log(user);
  return (
    <>
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
    </>
  );
}

export default App;
