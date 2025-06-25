import { NavLink } from 'react-router-dom';
import css from './MobileUserWidget.module.css';
import Icon from '../../../reusable-global/Icon/Icon';

function MobileUserWidget({ userName, setModalComponent }) {
  return (
    <div>
      {userName ? (
        <NavLink
          to='account'
        >
          <Icon
            id='icon-profile'
            width={20}
            height={42}
          />
        </NavLink>
      ) : (
        <div className='css.buttons'>
          <button
            type='button'
            onClick={() => setModalComponent('login')}
          >
            <Icon
              id='icon-profile'
              width={20}
              height={42}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default MobileUserWidget;
