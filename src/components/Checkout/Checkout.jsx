import css from "./Checkout.module.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import * as yup from "yup";

import ProductsCheckout from "./ProductsCheckout/ProductsCheckout";
import ModalBasket from "../Basket/ModalBasket/ModalBasket";
import SubmitBox from "./SubmitBox/SubmitBox";
import TitleLink from "./TitleLink/TitleLink";
import FormInputs from "./FormInputs/FormInputs";

export default function Checkout() {
  const products = useSelector((state) => state.products.items);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const schema = yup.object({
    postAddress: yup.string().required("Виберіть адресу отримувача"),
    surname: yup
      .string()
      .matches(
        /^[А-Яа-яІіЇїЄєҐґ'’\- ]+$/,
        "Введіть прізвище отримувача кирилицею"
      )
      .required("Введіть прізвище отримувача"),
    name: yup
      .string()
      .matches(/^[А-Яа-яІіЇїЄєҐґ'’\- ]+$/, "Введіть ім'я отримувача кирилицею")
      .required("Введіть ім'я отримувача"),
    fatherName: yup
      .string()
      .matches(
        /^[А-Яа-яІіЇїЄєҐґ'’\- ]+$/,
        "Введіть ім'я по батькові отримувача кирилицею"
      )
      .required("По батькові обов'язково"),
    phone: yup
      .string()
      .matches(/^\+38\d{10}$/, "Номер телефона мусить бути з 10 цифр")
      .required("Введіть номер мобільного телефону отримувача"),
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      phone: "+38",
    },
  });

  const phoneValue = watch("phone");

  const onSubmit = (data) => {
    const productsId = products.map((product) => ({
      id: product.id,
      quantity: product.quantity,
    }));
    const arr = {
      items: productsId,
      status: "Pending",
      post_city: data.postAddress,
      post_departament: data.postAddress,
      clientInformation: data,
      user_number: 2147483647,
    };
    console.log(arr);
    reset();
  };

  return (
    <div className={css.container}>
      <TitleLink />
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <ProductsCheckout openModal={openModal} />
        <FormInputs
          register={register}
          control={control}
          errors={errors}
          setValue={setValue}
          phoneValue={phoneValue}
        />
        <SubmitBox />
      </form>
      {isOpen && <ModalBasket isOpen={setIsOpen} onClose={closeModal} />}
    </div>
  );
}
