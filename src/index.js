import React, { useState, useEffect } from "react";
import reactDOM from "react-dom";
import "./assets/css/global.css";
import HeaderTemplate from "./componentes/header/header";
import FormTemplate from "./componentes/form/form";
import Login from "./Login"
import App from "./App"

reactDOM.render(
  ((<App />)),
  document.getElementById("root")
);
