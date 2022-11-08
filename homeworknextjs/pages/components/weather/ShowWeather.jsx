import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import LayoutWeather from "./LayoutWeather";

const ShowWeather = () => {
  const [form, setForm] = useState("");
  const [weather, setWeather] = useState({
    temp: "",
    humidity: "",
    weather: "",
    wind: "",
    visibility: "",
  });
  const handleChange = (e) => {
    setForm(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${form}&units=metric&appid=06b48d7f898665ae92a12aa3908c5a2e`
      );
      console.log(res.data);
      setWeather({
        temp: res.data.main.temp,
        humidity: res.data.main.humidity,
        weather: res.data.weather[0].description,
        wind: res.data.wind.speed,
        visibility: res.data.visibility,
      });
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  return (
    <LayoutWeather>
      <div>
        <h1>showWeather</h1>
        <Formik
          initialValues={form}
          enableReinitialize={true}
          onSubmit={handleSubmit}>
          <Form>
            <Field
              type="text"
              name="city"
              value={form || ""}
              onChange={handleChange}></Field>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </Form>
        </Formik>
        <div>
          <p>Nhiệt độ: {weather.temp} độ C</p>
          <p>Độ ẩm: {weather.humidity}%</p>
          <p>Trời: {weather.weather}</p>
          <p>Sức gió: {weather.wind} m/s</p>
          <p>Tầm nhìn: {weather.visibility / 1000}km</p>
        </div>
      </div>
    </LayoutWeather>
  );
};

export default ShowWeather;
