import { useSelector } from 'react-redux';
import Icon from '../../../reusable-global/Icon/Icon';
import css from './EmailSent.module.css';

function EmailSent() {
  const { email } = useSelector(state => state.user);

  return (
    <div className={css.container}>
      <h2>Реєстрація</h2>

      <Icon
        id='icon-envelope'
        width={52}
        height={52}
        iconClass={css.icon}
      />

      <p>Все майже готово!</p>

      <p>Ми надіслали електронний лист на адресу {email}</p>

      <p>
        Якщо ви його не бачите, можливо, вам потрібно перевірити папку спаму
      </p>

      <p>
        Просто натисніть на посилання в цьому електронному листі щоб
        <br />
        завершити свою реєстрацію
      </p>

      <p>Все ще не можете знайти лист?</p>

      <button type='button'>Вислати електронний лист ще раз</button>
    </div>
  );
}

export default EmailSent;
