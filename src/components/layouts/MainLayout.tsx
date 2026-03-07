import { Outlet } from "react-router-dom";

import './styles.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';


export default function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
