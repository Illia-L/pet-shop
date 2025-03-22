import { useEffect, useState } from 'react';
import Signup from '../Signup/Signup';
import SignupSuccess from '../SignupSuccess/SignupSuccess';
import { useSelector } from 'react-redux';

function SignupBlock({ setModalComponent }) {
  const [elementToShow, setElementToShow] = useState('signup'); // signup / verify / success
  const { id } = useSelector(state => state.user);

  useEffect(() => {
    if (id) setElementToShow('success');
  }, [id]);

  return (
    <>
      {elementToShow === 'signup' && (
        <Signup setElementToShow={setElementToShow} />
      )}
      {elementToShow === 'success' && (
        <SignupSuccess
          setModalComponent={setModalComponent}
          setElementToShow={setElementToShow}
        />
      )}
    </>
  );
}

export default SignupBlock;
