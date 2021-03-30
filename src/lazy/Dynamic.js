// npm install react-loadable

import React from "react";
import Loadable from "react-loadable";

const LoadbleComponent = Loadable({
  loader: () => import("./Profile/Profile"),
  loading: () => <div>Loading Profile Component...</div>,
});

export const Dynamic = () => <LoadbleComponent />;

// from react 16.8 we can use below code
{
  /* <React.Suspense>
  const lc=React.lazy(() =>import("./Profile/Profile"))
  <div>Loading...</div>
</React.Suspense>; */
}
