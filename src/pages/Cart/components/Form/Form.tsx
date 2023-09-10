import Button from "../../../../components/Button/Button";
import { useForm } from "react-hook-form";
import "./Form.scss";
import { CartSlice, total } from "../../../../store/reducers/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";

const Form = () => {
  const totalPrice = useAppSelector(total);
  const dispatch = useAppDispatch();
  const { clear } = CartSlice.actions;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = () => {
    alert("Скоро доставим ваш заказ!");
    dispatch(clear());
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__title">Оформление заказа</h2>

      <input
        className="form__input"
        placeholder="Имя Фамилия"
        {...register("name", { required: true })}
      />
      {errors.name && <span className="form__error">Обязательное поле!</span>}
      <input
        className="form__input"
        type="tel"
        placeholder="+ 7 904 000 80 80"
        {...register("phone", {
          required: {
            value: true,
            message: "Обязательное поле!",
          },
          pattern: {
            value: /^\+7\d{3}\d{3}\d{2}\d{2}/,
            message: "Введите правильный формат телефона",
          },
        })}
      />
      {errors.phone && (
        <span className="form__error">{errors.phone.message?.toString()}</span>
      )}
      <input
        className="form__input"
        type="text"
        placeholder="Адрес доставки"
        {...register("address", { required: true })}
      />
      {errors.address && (
        <span className="form__error">Обязательное поле!</span>
      )}
      <span className="form__cost">
        Итого:&nbsp;<b>{totalPrice} руб.</b>
      </span>
      <Button>Оформить заказ</Button>
    </form>
  );
};
export default Form;
