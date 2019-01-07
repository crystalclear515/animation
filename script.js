var btn = document.querySelector('button'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close');

  btn.addEventListener('click', function() {
    modal.style.display = 'flex';
  });

  close.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(e) {
    if(e.target == modal) {
      modal.style.display = 'none';
    }
  });
