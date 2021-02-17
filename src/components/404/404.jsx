import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Страница не найдена</h1>
      <Link to='/'>Вернуться на главную</Link>
    </>
  );
};

export default NotFound;
