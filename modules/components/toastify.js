const toastifyElement = document.getElementById("alert");

export const toastify = (msg, options) => {
  toastifyElement.style.right = "0%";
  switch (options.type) {
    case "warn":
      toastifyElement.style.backgroundColor = "orange";
      break;
    case "error":
      toastifyElement.style.backgroundColor = "tomato";
      break;
    case "success":
      toastifyElement.style.backgroundColor = "yellowgreen";
      break;

    default:
      toastifyElement.style.backgroundColor = "gainsbro";
      break;
  }
  console.log("children:", toastifyElement.children);
  console.log("childnodes: ", toastifyElement.childNodes);
  toastifyElement.children[0].innerHTML = msg;
  toastifyElement.children[1].addEventListener("click", () => {
    toastifyElement.style.right = "-100%";
  });
  // toastifyElement.innerHTML = msg;
  setTimeout(function () {
    toastifyElement.style.right = "-100%";
  }, options.time || 3000);
};
