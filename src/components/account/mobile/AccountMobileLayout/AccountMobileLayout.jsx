import Icon from '../../../reusable-global/Icon/Icon';
import ContactInfo from '../../ContactInfo/ContactInfo';
import CollapsibleSection from '../CollapsibleSection/CollapsibleSection';
import css from './AccountMobileLayout.module.css';

function AccountMobileLayout() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Обліковий запис</h1>

      <CollapsibleSection title='Контактна інформація'><ContactInfo/></CollapsibleSection>

      <CollapsibleSection title='Зміна паролю'></CollapsibleSection>

      <CollapsibleSection title='Видалення акаунту'></CollapsibleSection>
    </div>
  );
}

export default AccountMobileLayout;
