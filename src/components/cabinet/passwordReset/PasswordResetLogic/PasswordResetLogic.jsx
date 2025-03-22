import { Link, useSearchParams } from 'react-router-dom';
import { isResetTokenValid } from '../../../../fake-data';
import styles from '../../reusable/Form/Form.module.css';
import Loader from '../../../reusable-global/Loader/Loader';
import PasswordResetForm from '../PasswordResetForm/PasswordResetForm';
import { useEffect, useState } from 'react';
import InvalidTokenMessage from '../InvalidTokenMessage/InvalidTokenMessage';
import ServerErrorMessage from '../ServerErrorMessage/ServerErrorMessage';

function PasswordResetLogic() {
  const [status, setStatus] = useState(null);
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  async function sendVerifyTokenRequest() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isResetTokenValid(token) === 'success') return resolve();
        if (isResetTokenValid(token) === 'fail') return reject('fail');

        reject('error');
      }, 800);
    });

    setStatus('loading');

    try {
      await promise;
      setStatus('success');
      console.log(status);
    } catch (err) {
      setStatus(err);
      console.log(status);
    }
  }

  useEffect(() => {
    sendVerifyTokenRequest();
  }, []);

  useEffect(() => {
    sendVerifyTokenRequest();
  }, [token]);

  if (status === 'loading') return <Loader />;

  if (status === 'error')
    return (
      <ServerErrorMessage sendVerifyTokenRequest={sendVerifyTokenRequest} />
    );

  if (status === 'fail') return <InvalidTokenMessage />;

  return <PasswordResetForm token={token} />;
}

export default PasswordResetLogic;
