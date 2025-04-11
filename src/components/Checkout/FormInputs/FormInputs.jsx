import css from "./FormInputs.module.css";
import { Controller } from "react-hook-form";

export default function FormInputs({ register, control, errors }) {
  return (
    <div className={css.container}>
      <h2 className={`{css.titleForm} ${css.titleMargin}`}>Доставка</h2>
      <p className={css.textForm}>Самовивіз з нової пошти</p>
      <Controller
        name="dropdown"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <select {...field} id="dropdown" className={css.inputDropdown}>
            <option value="">Виберіть відповідне відділення</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        )}
      />
      <br></br><span className={css.error}>{errors.dropdown?.message}</span>
      <h2 className={css.titleForm}>Оплата</h2>
      <p className={css.textForm2}>Під час отримання товару</p>
      <h2 className={css.titleForm}>Отримувач</h2>
      <div className={css.infoBox}>
        <div className={css.inputDoubleBox}>
          <div className={css.inputBox}>
            <label className={css.label}>Прізвище*</label>
            <input
              type="text"
              id="surname"
              placeholder="Котіненко"
              {...register("surname")}
              className={css.input}
            />
            <span className={css.error}>{errors.surname?.message}</span>
          </div>
          <div className={css.inputBox}>
            <label className={css.label}>Імʼя*</label>
            <input
              type="text"
              id="name"
              placeholder="Цезарь"
              {...register("name")}
              className={css.input}
            />
            <span className={css.error}>{errors.name?.message}</span>
          </div>
        </div>
        <div>
          <div className={css.inputBox}>
            <label className={css.label}>Email*</label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              {...register("email")}
              className={css.input}
            />
            <span className={css.error}>{errors.email?.message}</span>
          </div>
          <div className={css.inputBox}>
            <label className={css.label}>Мобільний телефон*</label>
            <input
              type="text"
              id="phone"
              placeholder="+380501112233"
              {...register("phone")}
              className={css.input}
            />
            <span className={css.error}>{errors.phone?.message}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
