// Keep the in-page directory as the source for both firm links and
// as the destination when the browser cannot open a native dialog.
const directory = document.querySelector("#firms .practices");
const picker = document.querySelector(".directory-dialog");

if (typeof picker.showModal === "function") {
  picker.append(directory.cloneNode(true));
  for (const link of document.querySelectorAll('a[href="#firms"]')) {
    link.setAttribute("aria-haspopup", "dialog");
    link.addEventListener("click", event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      picker.showModal();
    });
  }
}
