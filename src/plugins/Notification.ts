import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

const Notification = (
  text: string,
  color: string,
  timeout: number = 2000
): void => {
  createToast(text, {
    position: "top-right",
    //@ts-ignore
    type: color,
    transition: "bounce",
    timeout: timeout,
  });
};

export default Notification;
