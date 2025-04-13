document.getElementById('close_btn').addEventListener('click', () => {
    document.querySelector('.container_body').classList.toggle('vermelho');
    document.querySelector('.container_head').classList.toggle('vermelho');
    document.querySelector('#closeBtn').classList.toggle('rotated');
  });
  