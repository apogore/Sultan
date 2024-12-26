export const getCartData = () => {
  try {
    const cartData = JSON.parse(localStorage.getItem("cart")) || {};
    console.log("Cart data from LocalStorage:", cartData);
    if (cartData && typeof cartData === "object" && !Array.isArray(cartData)) {
      return cartData;
    } else {
      console.error("Invalid cart data format in LocalStorage");
      return {};
    }
  } catch (error) {
    console.error("Error parsing cart data from LocalStorage", error);
    return {};
  }
};
