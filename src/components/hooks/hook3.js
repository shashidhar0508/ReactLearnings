//fetch api

import React, { useState, useEffect, useFetch } from "react";

export default function DataLoader() {
  const [data, setData] = useState([]);

  //   replacement of componentDidMount
  //   the moment you mount this component on virtual DOM this useEffect we execute(only once)
  //   In useEffect response is in string, so we use inbuilt response.json to convert into json
  //     response.json is given to data below
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  //Another method for calling API is useFetch, instead of using above code we can use this
  const responseData = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <ul>
        {data.map((el) => (
          //   key is given so that only one particular row changes are done which improves performance
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}
