import css from "./Checkout.module.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import ProductsCheckout from "./ProductsCheckout/ProductsCheckout";
import ModalBasket from "../Basket/ModalBasket/ModalBasket";
import SubmitBox from "./SubmitBox/SubmitBox";
import TitleLink from "./TitleLink/TitleLink";
import FormInputs from "./FormInputs/FormInputs";

export default function Checkout() {
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
    dropdown: yup.string().required("Choose Post address"),
    surname: yup.string().required("Surname is required"),
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email format is not valid").required("Email is required"),
    phone: yup.string().required("Phone is required")
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({mode: 'onSubmit', resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={css.container}>
      <TitleLink />
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <ProductsCheckout openModal={openModal} />
        <FormInputs register={register} control={control} errors={errors} />
        <SubmitBox />
      </form>
      {isOpen && <ModalBasket isOpen={setIsOpen} onClose={closeModal} />}
    </div>
  );
}
