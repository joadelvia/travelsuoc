const btn = document.getElementById('btn-planifica');
const modal = document.getElementById('modal-simple');
const closeBtn = document.getElementById('modal-close');

btn.addEventListener('click', () => modal.className = 'modal-visible')

closeBtn.addEventListener('click', () => modal.className = 'modal-hidden')


