// Esta función recibe un elemento HTML y la URL del background
export function aplicarBackground(elemento, backgroundUrl) {
  const defaultBackground = '../assets/img/back_004.jpg'; // Aquí colocas tu imagen por defecto
  const url = backgroundUrl ? backgroundUrl : defaultBackground;

  /* Aplica los estilos necesarios al contenedor*/
  elemento.style.backgroundImage = `url('${url}')`;
  elemento.style.backgroundSize = 'cover';
  elemento.style.backgroundPosition = 'center';
  elemento.style.backgroundRepeat = 'no-repeat';
  
} 

console.log('✅ background.js fue cargado ok');

