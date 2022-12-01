import React from 'react';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../components/NotFound/NotFound';

function NotFoundPage() {
  return (
    <MainLayout pagetitle='Not Found'>
      <NotFound/>
    </MainLayout>
  )
}
export default NotFoundPage
