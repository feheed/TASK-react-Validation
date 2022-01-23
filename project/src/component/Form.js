import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().min(3).max(15).required("this field is required"),
  lastName: yup.string().min(3).max(15).required("this field is required"),
  number: yup.string.matches(
    /[569]\d{7}$/,
    "this field should be numbers only"
  ),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => alert("good boy");
  return (
    <div class="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          {...register("firstName")}
          type="text"
          placeholder="only first name here ......."
        />
        <p className="error">{errors.firstName?.message}</p>

        <label>Last name</label>
        <input
          {...register("only lastName here ......")}
          type="text"
          placeholder="last name"
        />
        <p className="error">{errors.lastName?.message}</p>

        <label for="expmonth">mobile number</label>
        <input type="text" placeholder="1234 5678" {...register("number")} />
        <p className="error">{errors.number?.message}</p>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
