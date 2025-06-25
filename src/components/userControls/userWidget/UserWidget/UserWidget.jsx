import { useMediaQuery } from 'react-responsive';
import MobileUserWidget from '../MobileUserWidget/MobileUserWidget';
import DesktopUserWidget from '../DesktopUserWidget/DesktopUserWidget';

function UserWidget({ userName, setModalComponent }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  console.log(isMobile);

  return (
    <>
      {isMobile ? (
        <MobileUserWidget
          userName={userName}
          setModalComponent={setModalComponent}
        />
      ) : (
        <DesktopUserWidget
          userName={userName}
          setModalComponent={setModalComponent}
        />
      )}
    </>
  );
}

export default UserWidget;
