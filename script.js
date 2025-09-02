/deixando os blocos interativos/ 
document.querySelectorAll('.bloco').forEach(bloco => {
  bloco.addEventListener('click', () => {
    const link = bloco.getAttribute('data-link');
    if(link){
      window.location.href = link;
    }
  });
});

 // Inicialização manual opcional (troca a cada 5s)
    const el = document.querySelector('#bannerpiclass');
    const carousel = new bootstrap.Carousel(el, { interval: 5000 });