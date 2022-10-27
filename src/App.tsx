import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const Login = lazy(() => import('@/pages/login/login'));
const Blog = lazy(() => import('@/pages/blog/blog'));
const Mian:React.FC = () => {
  return (
    <main>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default Mian
