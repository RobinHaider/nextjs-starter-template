import Navbar from './components/Navbar';
import ProfilePic from './components/ProfilePic';
import styles from './layout.module.css';

export const metadata = {
  title: 'Next.js Starter | Blog',
  description: 'Next.js starter template blog page',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`dark:bg-slate-800 ${styles.main}`}>
      <Navbar />
      <ProfilePic />
      {children}
    </main>
  );
}
