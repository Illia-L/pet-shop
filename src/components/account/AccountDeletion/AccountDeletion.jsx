import clsx from 'clsx';
import formCss from '../../userControls/css/form.module.css';
import css from './AccountDeletion.module.css';

function AccountDeletion() {
  return (
    <div className={css.content}>
      <h3 className={css.title}>Видалення облікового запису</h3>

      <p className={css.desc}>
        Ви впевнені, що хочете видалити свій обліковий запис?
        <br />
        Всі ваші дані, включаючи історію покупок, персональні налаштування,
        будуть втрачені без можливості відновлення.
      </p>

      <p className={css.desc}>Продовжити?</p>

      <button
        className={clsx(formCss.button, css.button)}
        type='button'
      >
        Видалити
      </button>
    </div>
  );
}

export default AccountDeletion;
