import css from "./Checkout.module.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useState } from "react";
import ModalBasket from "../Basket/ModalBasket/ModalBasket";
import { useForm, Controller } from "react-hook-form";
import clsx from "clsx";

export default function Checkout() {
  const products = useSelector((state) => state.products.items);
  const totalAmount = useSelector((state) => state.products.totalAmount);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
      <div className={css.titleLink}>
        <NavLink to="/" className={css.link}>
          <IoIosArrowBack className={css.icon} />
          <p className={css.linkBack}>Назад</p>
        </NavLink>
      </div>

      <div className={css.containerList}>
        <h1 className={css.titleH1}>Замовлення</h1>
        <ul className={css.products}>
          {products.map((item) => (
            <li className={css.card} key={item.id}>
              <div className={css.productBox}>
                <div className={css.gap}>
                  <div className={css.imageBox}>
                    <img
                      src={"/pet-shop" + item.image}
                      alt={item.title}
                      className={css.image}
                    />
                  </div>
                  <div className={css.priceBox}>
                    <p className={css.title}>{item.title}</p>
                    <p className={css.price}>{item.price},00 ₴</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className={css.button} onClick={openModal}>
          Редагувати товари
        </button>
      </div>

      <div className={css.containerForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className={`{css.titleForm} ${css.titleMargin}`}>Доставка</h2>
          <p className={css.textForm}>Самовивіз з нової пошти</p>
          <Controller
            name="dropdown"
            control={control}
            defaultValue=""
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <select {...field} id="dropdown" className={css.input}>
                <option value="">Виберіть відповідне відділення</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            )}
          />
          <h2 className={css.titleForm}>Отримувач</h2>

          <div className={css.infoBox}>
            <div className={css.inputBox}>
              <label className={css.label}>Прізвище*</label>
              <input
                type="text"
                id="surname"
                placeholder="Котіненко"
                {...register("surname", {required: true, maxLength: 20})}
                className={css.input}
              />
              <span className={css.error}>{errors.name?.message}</span>
            </div>
            <div className={css.inputBox}>
              <label className={css.label}>Імʼя*</label>
              <input
                type="text"
                id="name"
                placeholder="Муся"
                {...register("name", {required: true, maxLength: 20})}
                className={css.input}
              />
              <span className={css.error}>{errors.name?.message}</span>
            </div>
            <div className={css.inputBox}>
              <label className={css.label}>Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@mail.com"
                {...register("email", {required: true, maxLength: 20})}
                className={css.input}
              />
              <span className={css.error}>{errors.name?.message}</span>
            </div>
            <div className={css.inputBox}>
              <label className={css.label}>Мобільний телефон*</label>
              <input
                type="text"
                id="phone"
                placeholder="+380501112233"
                {...register("phone", {required: true, maxLength: 20})}
                className={css.input}
              />
              <span className={css.error}>{errors.name?.message}</span>
            </div>
          </div>
          <div className={css.submitBox}>
            <h2 className={css.titleForm}>Разом</h2>
            <div className={css.totalBox}>
              <p className={css.textForm}>
                <span>{products.length}</span> товари на суму
              </p>
              <p className={css.numberForm}>
                <span>{totalAmount}</span>, 00 ₴
              </p>
            </div>
            <div className={css.totalBox}>
              <p className={css.textForm}>
                <span></span> Вартість доставки
              </p>
              <p className={css.numberForm}>
                <span>80</span>, 00 ₴
              </p>
            </div>
            <div className={`${css.totalBox} ${css.marginBox}`}>
              <p className={css.textForm}>
                <span></span> До сплати
              </p>
              <p className={css.numberForm}>
                <span>{totalAmount + 80}</span>, 00 ₴
              </p>
            </div>

            <button className={css.submitButton}>Оплатити</button>
            <div className={css.policy}>
              <p className={css.textInformation}>
                Підтверджуючи замовлення, я приймаю умови:
              </p>
              <ul className={css.list}>
                <li className={css.item}>
                  <p className={css.textItem}>
                    положення про обробку і захист персональних даних
                  </p>
                </li>
                <li className={css.item}>
                  <p className={css.textItem}>угоди користувача</p>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>

      {isOpen && <ModalBasket isOpen={setIsOpen} onClose={closeModal} />}
    </div>
  );
}
