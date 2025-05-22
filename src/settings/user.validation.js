import * as yup from 'yup';

export const email = yup.string().email('Введіть дійсну електронну пошту');

export const newPassword = yup
  .string()
  .length()
  .min(8, 'Пароль має бути не коротшим за 8 символів')
  .max(100, 'Пароль має бути не довшим за 100 симіолів')
  .matches(
    /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]*$/,
    'Тільки латиниця'
  )
  .matches(/^(?=.*[A-Za-z]).*$/, 'Хоча б одна літера')
  .matches(/[0-9]/, 'Хоча б одна цифра')
  .required("Новий пароль обов'язковий для заповнення");

const passwordConfirm = yup
  .string()
  .oneOf([yup.ref('newPassword')], 'Має співпадати із паролем');

export const newPasswordGroup = yup.object({
  newPassword,
  passwordConfirm
});
