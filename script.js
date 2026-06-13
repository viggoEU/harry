const sections = document.querySelectorAll('.section');
const symbols = ["*", "+", ".", "x", "o", "#", "%", "@"];

sections.forEach(section => {
  const title = section.querySelector('.section-title');
  const links = section.querySelector('.links');

  title.addEventListener('click', () => {
    document.querySelectorAll('.links').forEach(l => {
      if (l !== links) l.classList.remove('open');
    });

    links.classList.toggle('open');
  });
});

const preview = document.getElementById("image-preview");
const previewImg = preview.querySelector("img");

document.querySelectorAll(".preview-link").forEach(link => {

    link.addEventListener("mouseenter", () => {

        previewImg.src = link.dataset.image;

        preview.style.display = "block";
    });

    link.addEventListener("mouseleave", () => {
        preview.style.display = "none";
    });
});
