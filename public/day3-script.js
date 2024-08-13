(function () {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      if (header.classList.contains("is-open")) {
        header.classList.remove("is-open");
      } else {
        const headersWithIsOpen = document.querySelectorAll(".is-open");
        headersWithIsOpen.forEach((headerWithIsOpen) => {
          headerWithIsOpen.classList.remove("is-open");
        });
        header.classList.add("is-open");
      }
    });
  });
})();
