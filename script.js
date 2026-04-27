const sections = document.querySelectorAll('.section');

sections.forEach(section => {
  const title = section.querySelector('.section-title');
  const links = section.querySelector('.links');

  title.addEventListener('click', () => {
    // close others
    document.querySelectorAll('.links').forEach(l => {
      if (l !== links) l.classList.remove('open');
    });

    // toggle current
    links.classList.toggle('open');
  });
});
