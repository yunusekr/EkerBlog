import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormGroup, Label, Button } from "reactstrap";
import { emails } from "./emails";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = emails.find(
      (item) => item.Email === data.Email && item.Password === data.Password
    );

    if (email) {
      toast.success("Başarılı giriş sayfaya yönlendiriliyorsunuz", {
        position: "top-right",
        autoClose: 5000, // Otomatik kapanma süresi
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        onClose: () => history.push("/blog"),
      });

      setMessage("");
    } else {
      setMessage("Yanlış Email veya Şifre");
    }
  };

  return (
    <fieldset className="w-screen h-screen bg-blue-500 flex justify-center items-center ">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center border-1 border-red-500 rounded-md w-80 h-80"
      >
        <div>
          <FormGroup className="flex flex-col">
            <Label for="Email">Email</Label>
            <input
              id="Email"
              placeholder="Email giriniz"
              type="email"
              {...register("Email", {
                required: "Email zorunludur",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Geçerli bir email adresi giriniz",
                },
              })}
              className={`form-control ${errors.Email ? "is-invalid" : ""}`}
            ></input>
            {errors.Email && (
              <span className="text-red-500">{errors.Email.message}</span>
            )}
          </FormGroup>
        </div>
        <div>
          <FormGroup className="flex flex-col">
            <Label for="Password">Şifre</Label>
            <input
              id="Password"
              placeholder="Şifre giriniz"
              type="password"
              {...register("Password", {
                required: "Şifre zorunludur",
              })}
              className={`form-control ${errors.Password ? "is-invalid" : ""}`}
            ></input>
            {errors.Password && (
              <span className="text-red-500">{errors.Password.message}</span>
            )}
          </FormGroup>
          <p className="text-red-500">{message}</p>
          <Button type="submit">Giriş</Button>
        </div>
      </Form>
      <ToastContainer />
    </fieldset>
  );
}

export default Login;
