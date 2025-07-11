import * as yup from 'yup';

export const name = yup
  .string()
  .required("Ім'я обов'язково для заповнення")
  .min(3, "Ім'я має бути не коротшим за 3 символи")
  .max(50, "Ім'я має бути не довшим за 50 символів");

export const email = yup
  .string()
  .required("Пошта обов'язкова для заповенння")
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Введіть дійсну електронну пошту'
  );

export const newPassword = yup
  .string()
  .required("Новий пароль обов'язковий для заповнення")
  .min(8, 'Пароль має бути не коротшим за 8 символів')
  .max(100, 'Пароль має бути не довшим за 100 симіолів')
  .matches(
    /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]*$/,
    'Тільки латиниця'
  )
  .matches(/^(?=.*[A-Za-z]).*$/, 'Хоча б одна літера')
  .matches(/[0-9]/, 'Хоча б одна цифра');

export const passwordConfirm = yup
  .string()
  .required("Це поле обов'язково для заповнення")
  .oneOf([yup.ref('newPassword')], 'Має співпадати із паролем');

export const newPasswordGroup = yup.object({
  newPassword,
  passwordConfirm,
});
