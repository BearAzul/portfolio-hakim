
import { Outlet } from 'react-router'
import Loading from '../common/Loading.jsx';
import { useDataStore } from '../store/useDataStore.js';
import { useEffect } from 'react';

const Layout = () => {
  const { isLoading, fetchAllData, fetchCertificates } = useDataStore((state) => state);

  useEffect(() => {
    fetchAllData();
    fetchCertificates();
  }, [fetchAllData, fetchCertificates]);

  if (isLoading) return <Loading />

  return <Outlet />
}

export default Layout