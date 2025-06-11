import { RxExit } from 'react-icons/rx';
import AccountDeletion from '../../AccountDeletion/AccountDeletion';
import ContactInfo from '../../ContactInfo/ContactInfo';
import PasswordChange from '../../PasswordChange/PasswordChange';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
import css from './AccountMobileLayout.module.css';

function AccountMobileLayout() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Обліковий запис</h1>

      <CollapsibleSection title='Контактна інформація'>
        <ContactInfo />
      </CollapsibleSection>

      <CollapsibleSection title='Зміна паролю'>
        <PasswordChange />
      </CollapsibleSection>

      <CollapsibleSection title='Видалення акаунту'>
        <AccountDeletion />
      </CollapsibleSection>

      <button className={css.logout}>
        <RxExit/>
        <span>Вихід</span>
      </button>
    </div>
  );
}

export default AccountMobileLayout;
