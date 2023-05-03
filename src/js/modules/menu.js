import { disableScroll, enableScroll } from "../helpers/disableScroll";

export default () => {
  const menu = document.querySelector('.menu');
  const menuBtnOpen = document.querySelector(".js-open-menu")
  const menuBtnClose = document.querySelector(".js-close-menu")

  if (!menu) return;

  menuBtnOpen.addEventListener('click', () => { menu.classList.add("is-visible"); disableScroll() });
  menuBtnClose.addEventListener('click', () => { menu.classList.remove("is-visible"); enableScroll(); });
}
