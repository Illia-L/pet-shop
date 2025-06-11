import { useMediaQuery } from 'react-responsive';
import css from './AccountPage.module.css';
import AccountMobileLayout from '../../components/account/mobile/AccountMobileLayout/AccountMobileLayout';
import DesktopLayout from '../../components/account/DesktopLayout/DesktopLayout';

function AccountPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return <div className={css.page}>
    {isMobile && <AccountMobileLayout />}

    {!isMobile && <DesktopLayout/>}
    </div>;
}

export default AccountPage;
