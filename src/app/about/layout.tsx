import React from 'react';
import styles from './layout.module.css';

export const metadata = {
  title: 'Next.js Starter | About',
  description: 'Next.js starter template about page',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={styles.main}>
        <h1>About Page</h1>

        {children}
      </main>
    </>
  );
}
