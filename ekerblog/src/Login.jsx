import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
function Login() {
  let history = useHistory();
  const { register, handleSubmit, setValue } = useForm();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = format(currentDate, "Ppp", { locale: tr });

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setValue("Name", storedName);
    }
  }, [setValue]);

  const onSubmit = (data) => {
    localStorage.setItem("name", data.Name);
    history.push("/blog");
  };

  const changeHandler = (e) => {
    setValue("Name", e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[100%] h-[100%] flex items-center justify-center flex-col"
      >
        <div className="border-2 h-[30px] w-[200px] flex justify-center rounded-md bg-white/30  mt-[1rem]">
          <p className="font-inter">{formattedDate}</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'url("https://i.pinimg.com/736x/9f/24/15/9f2415b868c03bef544400ebd3e632fb.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px)",
            zIndex: -1,
          }}
        ></div>
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="border-2 h-[200px] w-[300px] flex flex-col justify-center items-center gap-4 rounded-[1rem] bg-white/20">
            <div className="form__group field">
              <input
                onChange={changeHandler}
                type="text"
                className="form__field font-inter"
                placeholder="İsminizi öğrenebilir miyim?"
                {...register("Name")}
              />
              <label htmlFor="name" className="form__label font-inter">
                İsminiz
              </label>
            </div>
            <button className="animated-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-2"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text font-inter">G İ R İ Ş</span>
              <span className="circle"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-1"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
