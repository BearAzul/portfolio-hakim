
import { Outlet } from 'react-router'
import Loading from '../common/Loading.jsx';
import Footer from '../components/Footer.jsx';
import { useDataStore } from '../store/useDataStore.js';
import { useEffect } from 'react';
import BtnTop from '../common/BtnTop.jsx';

const Layouts = () => {
  const { isLoading, fetchAllData, fetchCertificates } = useDataStore((state) => state);

  useEffect(() => {
    fetchAllData();
    fetchCertificates();
  }, [fetchAllData, fetchCertificates]);

  if (isLoading) return <Loading />

  return (
    <>
      <Outlet />
      <Footer />
      <BtnTop />
    </>
  )
}

export default Layouts