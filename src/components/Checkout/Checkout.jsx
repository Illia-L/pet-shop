import css from "./Checkout.module.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

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

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

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
