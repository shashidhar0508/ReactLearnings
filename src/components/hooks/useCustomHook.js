import { useState } from "react";

//  Customs hooks are nothing but stateless functions
function useOrderCountHook() {
  const [orderCount, setOrderCount] = useState({ count: 0 });

  const changeOrderCount = () => {
    setOrderCount({ count: orderCount.count + 1 });
  };

  return { orderCount, changeOrderCount };
}

export default useOrderCountHook;
