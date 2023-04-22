export function checkInCart(cart, item) {
  return cart.find((c) => c.id === item.id);
}
