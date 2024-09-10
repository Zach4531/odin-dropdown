const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', ({ currentTarget }) => {
    toggleDropdown(currentTarget);
  });
});

function toggleDropdown(element) {
  if (element.classList.contains('show')) {
    element.classList.remove('show');
    return false;
  }

  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove('show');
  });

  element.classList.add('show');
}
