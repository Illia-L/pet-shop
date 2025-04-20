import css from "./FormInputs.module.css";
import clsx from "clsx";
import { Controller } from "react-hook-form";
import CustomInput from "../../Input/InputCustom";

export default function FormInputs({
  register,
  control,
  errors,
  setValue,
  phoneValue,
}) {
  return (
    <div className={css.container}>
      <h2 className={`{css.titleForm} ${css.titleMargin}`}>Доставка</h2>
      <p className={css.textForm}>Самовивіз з нової пошти</p>
      <Controller
        name="postAddress"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <select
            {...field}
            id="postAddress"
            className={clsx(css.inputDropdown, errors.postAddress && css.error)}
          >
            <option>Виберіть відповідне відділення</option>
            <option>Київ, вул. Пирогівський шлях, 135</option>
            <option>Київ, вул. Богатирська, 11</option>
            <option>Київ, вул. Слобожанська,13</option>
            <option>Київ, (до 200 кг) вул. Верховинна, 69</option>
            <option>Київ, вул. Федорова, 32 (м. Олімпійська)</option>
            <option>Київ, вул. Миколи Василенка, 2</option>
            <option>Київ, вул. Гната Хоткевича, 8 (м.Чернігівська)</option>
            <option>Київ, вул. Набережно-Хрещатицька, 33</option>
          </select>
        )}
      />
      <br></br>
      {errors.postAddress && (
        <span className={css.error}>{errors.postAddress.message}</span>
      )}
      <h2 className={css.titleForm}>Оплата</h2>
      <p className={css.textForm2}>Під час отримання товару</p>
      <h2 className={css.titleForm}>Отримувач</h2>
      <div className={css.infoBox}>
        <div className={css.inputBox}>
          <label className={css.label}>Прізвище*</label>
          <CustomInput
            inputType="text"
            name={"surname"}
            id="surname"
            placeholder="Котіненко"
            error={errors.surname ? true : false}
            {...register("surname", {
              onBlur: () => {},
              onFocus: () => {},
            })}
            inputClass={clsx(css.input, errors.surname && css.inputError)}
          />
          {errors.surname && (
            <span className={css.error}>{errors.surname.message}</span>
          )}
        </div>
        <div className={css.inputBox}>
          <label className={css.label}>Імʼя*</label>
          <CustomInput
            inputType="text"
            name={"name"}
            id="name"
            placeholder="Цезарь"
            error={errors.name ? true : false}
            {...register("name", {
              onBlur: () => {},
              onFocus: () => {},
            })}
            inputClass={clsx(css.input, errors.name && css.inputError)}
          />
          {errors.name && (
            <span className={css.error}>{errors.name.message}</span>
          )}
        </div>
        <div className={css.inputBox}>
          <label className={css.label}>По батькові*</label>
          <CustomInput
            inputType="text"
            name={"fatherName"}
            id="fatherName"
            placeholder="Барсікович"
            error={errors.fatherName ? true : false}
            {...register("fatherName", {
              onBlur: () => {},
              onFocus: () => {},
            })}
            inputClass={clsx(css.input, errors.fatherName && css.inputError)}
          />
          {errors.fatherName && (
            <span className={css.error}>{errors.fatherName.message}</span>
          )}
        </div>
        <div className={css.inputBox}>
          <label className={css.label}>Мобільний телефон*</label>
          <Controller
            name="phone"
            control={control}
            defaultValue="+38"
            render={({ field }) => (
              <CustomInput
                inputType="tel"
                id="phone"
                placeholder="+38XXXXXXXXXX"
                error={!!errors.phone}
                value={field.value}
                onChange={(e) => {
                  const input = e.target.value;

                  // Удаляем все символы, кроме цифр
                  let numeric = input.replace(/\D/g, "");

                  // Если пусто, или только 3 / 38 — возвращаем только префикс
                  if (numeric === "" || numeric === "3" || numeric === "38") {
                    field.onChange("+38");
                    return;
                  }

                  // Убедимся, что начинается с 38
                  if (!numeric.startsWith("38")) {
                    numeric = "38" + numeric;
                  }

                  // Ограничим до 12 цифр (включая 38)
                  numeric = numeric.slice(0, 12);

                  // Обновляем значение
                  field.onChange(`+${numeric}`);
                }}
                onFocus={(e) => {
                  if (!field.value || !field.value.startsWith("+38")) {
                    field.onChange("+38");
                  }

                  // Курсор сразу после +38
                  setTimeout(() => {
                    const input = e.target;
                    input.setSelectionRange(3 + 1, 3 + 1); // после +38
                  }, 0);
                }}
                onBlur={field.onBlur}
                inputClass={clsx(
                  css.input,
                  css.phoneInput,
                  errors.phone && css.inputError
                )}
              />
            )}
          />
          {errors.phone && (
            <span className={css.error}>{errors.phone.message}</span>
          )}
        </div>
      </div>
    </div>
  );
}
