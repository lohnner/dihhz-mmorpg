const dialog = document.querySelector('.lightbox');
if (dialog) {
  const picture = dialog.querySelector('img');
  document.querySelectorAll('[data-image]').forEach(button => {
    button.addEventListener('click', () => {
      picture.src = button.dataset.image;
      picture.alt = button.querySelector('img').alt;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
}
const progress = document.querySelector('.reading-progress');
if (progress) {
  const updateProgress = () => {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${range > 0 ? Math.min(100, window.scrollY / range * 100) : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  window.addEventListener('load', updateProgress);
  updateProgress();
}
