import Loader from '../../../reusable-global/Loader/Loader';
import formCss from '../../css/form.module.css';

function Form({ title, isLoading, handleSubmit, setModalComponent, children }) {
  return (
    <>
      <form
        className={formCss.form}
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className={formCss.title}>{title}</h2>

        <div className={formCss.fields}>{children}</div>

        {isLoading && <Loader />}
      </form>
    </>
  );
}

export default Form;
