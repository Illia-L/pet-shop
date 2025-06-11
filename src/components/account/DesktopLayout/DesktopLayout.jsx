import { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import css from './DesktopLayout.module.css';
import ContactInfo from '../ContactInfo/ContactInfo';
import PasswordChange from '../PasswordChange/PasswordChange';
import AccountDeletion from '../AccountDeletion/AccountDeletion';

function DesktopLayout() {
  const [view, setView] = useState('contact-info')

  return (
    <div className={css.container}>
      <h1 className={css.title}>Обліковий запис</h1>

      <div className={css.content}>
        <SideBar setView={setView} />

        <div className={css.view}>
          {view === 'contact-info' && <ContactInfo/>}
          {view === 'change-password' && <PasswordChange/>}
          {view === 'delete-account' && <AccountDeletion/>}
        </div>
      </div>
    </div>
  );
}

export default DesktopLayout;