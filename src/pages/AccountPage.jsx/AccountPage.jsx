import { useMediaQuery } from 'react-responsive';
import css from './AccountPage.module.css';
import AccountMobileLayout from '../../components/account/mobile/AccountMobileLayout/AccountMobileLayout';

function AccountPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = !isMobile && !isDesktop

  return <div className={css.page}>{isMobile && <AccountMobileLayout />}</div>;
}

export default AccountPage;
