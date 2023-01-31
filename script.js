function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light'); //faz a função //

  /* if(html.classList.contains('light')){        perguntar se contén uma class chamada 'light'
        html.classList.remove('light')             remove a class 'light'
    }else{
        html.classList.add('light')
    }*/

  //pegar a imagem//
  const img = document.querySelector('#profile img');

  //substituir a imagem//
  if (html.classList.contains('light')) {
    //se tiver light mode, add a img light//
    img.setAttribute('src', './assets/avatar-light.png');
  } else {
    //se tiver sem light mode, manter a imagem normal//
    img.setAttribute('src', './assets/avatar.png');
  }
}
