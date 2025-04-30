
document.addEventListener('DOMContentLoaded', e => {
    let inicio = document.getElementById("inicio");
    inicio.innerHTML = " <div class='overlaidTitle'><h1>Tocad la trompeta en la nueva luna, en el día señalado</h1></div><div class='overlaidTitle'><h2>En el día de nuestra solemnidad. Porque estatuto es de Israel, Ordenanza del Dios de Jacob.</h2><h3>Salmo 81:3-4</h3></div>";
});

 
//  ****||||****||||****||||****||||****|||| Llamada GET a himnario ****||||****||||****||||****||||****||||

//Cachando el iD del elemento a que ha sido clickeado en el div con el iD="myDropdown1"
let identificador;
const himnosGet = document.getElementById('myDropdown1');
himnosGet.addEventListener("click", (e)=>{ 
     identificador=e.target.id;
}); 

/*Usando onclick */
himnosGet.onclick = ()=> {
    document.getElementById("inicio").style.display = "none";
    //Manipulación del DOM
    const d = document,
    $axios = d.getElementById("axios"),
    $fragment = d.createDocumentFragment(); /*Fragmento: para no hacer iteraciones, sino un sólo pegado */

    //Usando la libreria axios para hacer AJAX
    axios
    .get("js/himnos.json") 
    .then(res=>{
        
                    let json = res.data; //Respuesta de la API

                    let himno = json.find(el =>{  //Himno dentro de la respuesta
                            return (el.id == identificador);
                            });

                    const $li = d.createElement("li");
                        
                    $li.innerHTML = ` ${himno.title} ${himno.estrofas}`;
                    $li.style.position = "relative"; // ¡Obligatorio para z-index!
                    $li.style.zIndex = "2";          // Mayor que el overlay (1)
                    $li.style.color = "white";       // Para contraste con el overlay
                   
                    $fragment.appendChild($li);
                    
                    if ($axios.hasChildNodes()) {
                        $axios.removeChild($axios.childNodes[0]); 
                        $axios.appendChild($fragment);
                    } else{
                    $axios.appendChild($fragment);
                    // console.log($axios)
                    } 
                    //Esta opción funciona if else, pero lo intentaremos hacer con una función importada desde background.js fri 4april25
                     if (himno.background) {
                        $axios.style.backgroundImage = `url('${himno.background}')`;
                        $axios.style.backgroundSize = 'cover';
                        $axios.style.backgroundPosition = 'center';
                        $axios.style.backgroundAttachment = 'fixed';
                        $axios.style.backgroundRepeat = 'no-repeat';
                        $axios.style.position = 'relative';
                        
                            // Create overlay if it doesn't exist
                            let overlay = $axios.querySelector('.overlay');
                            if (!overlay) {
                                overlay = document.createElement('div');
                                overlay.className = 'overlay';
                                $axios.appendChild(overlay); // Add overlay inside $axios
                            }

                            // Style the overlay
                            overlay.style.position = 'absolute';
                            overlay.style.top = '0';
                            overlay.style.left = '0';
                            overlay.style.width = '100%';
                            overlay.style.height = '100%';
                            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // 70% opacity
                            overlay.style.zIndex = '1'; // Above background (zIndex:1) but below text

                            }else {
                            $axios.style.backgroundImage = `url('../assets/img/back-78.jpg')`;
                            // Remove overlay if no custom background
                                const overlay = $axios.querySelector('.overlay');
                                if (overlay) overlay.remove();
                            }
                }

    ) 
    .catch(error=>{
        console.log(error.response);
        let errorMessage = error.response.statusText || "ocurrió un error";
        $axios.innerHTML = `Error ${error.response.status}: ${errorMessage}`

    })
    .finally(()=>{
        console.log("esto se ejecutará independientemente del resultado de Axios")
    });
};


//  ****||||****||||****||||****||||****|||| Llamada GET a textos ****||||****||||****||||****||||****||||


let identificadorTextos;
const textosGet = document.getElementById('myDropdown2');
textosGet.addEventListener("click", (e)=>{
     identificadorTextos=e.target.id;
});

/*Usando onclick */
textosGet.onclick = ()=> {getText()};

//Función getHym
function getText() {

    document.getElementById("inicio").style.display = "none";
    //Manipulación del DOM
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment(); /*Fragmento: para no hacer iteraciones, sino un sólo pegado */

    //Usando la libreria axios para hacer AJAX
    axios
    .get("js/textos.json") 
    .then(res=>{
        
       let json = res.data; //de la respuesta, lo que viene en el parametro "data", lo  gaurdo en a la let "json"

       let texto = json.find(el =>{
            return (el.id == identificadorTextos);
            });
            const $li = document.createElement("li");
            $li.innerHTML = ` ${texto.title} ${texto.estrofas}`;
            $fragment.appendChild($li); 
            
            if ($axios.hasChildNodes()) {
                     $axios.removeChild($axios.childNodes[0]); 
                     $axios.appendChild($fragment);
                } else{
                   $axios.appendChild($fragment);
                  // console.log($axios)
                } 
                    //Esta opción funciona if else, pero lo intentaremos hacer con una función importada desde background.js fri 4april25
                     if (texto.background) {
                        $axios.style.backgroundImage = `url('${texto.background}')`;
                        $axios.style.backgroundSize = 'cover';
                        $axios.style.backgroundPosition = 'center';
                        }else {
                        $axios.style.backgroundImage = `url('../assets/img/back-02.jpg')`;
                        }
                    
                }
    )
    .catch(error=>{
        console.log(error.response);
        let errorMessage = error.response.statusText || "ocurrió un error";
        $axios.innerHTML = `Error ${error.response.status}: ${errorMessage}`

    })
    .finally(()=>{
        console.log("esto se ejecutará independientemente del resultado de Axios")
    });
}


//  ****||||****||||****||||****||||****|||| Llamada GET a adoración ****||||****||||****||||****||||****||||

let identificadorAdoracion;
const adoracionGet = document.getElementById('myDropdown3');
adoracionGet.addEventListener("click", (e)=>{
     identificadorAdoracion=e.target.id;
});

/*Usando onclick */
adoracionGet.onclick = ()=> {
    document.getElementById("inicio").style.display = "none";
    //Manipulación del DOM
    const d = document,
    $axios = d.getElementById("axios"),
    $fragment = d.createDocumentFragment(); /*Fragmento: para no hacer iteraciones, sino un sólo pegado */

    //Usando la libreria axios para hacer AJAX
    axios
    .get("js/adoracion.json")  
    .then(res=>{
        
       let json = res.data; //de la respuesta, lo que viene en el parametro "data", lo  gaurdo en a la let "json"

       let adoracion = json.find(el =>{
            return (el.id == identificadorAdoracion);
            });
            const $li = d.createElement("li");
            $li.innerHTML = ` ${adoracion.title} ${adoracion.estrofas}`;
            $fragment.appendChild($li); 
            $axios.appendChild($fragment);  
                if (adoracion.background) {
                        $axios.style.backgroundImage = `url('${adoracion.background}')`;
                        $axios.style.backgroundSize = 'cover';
                        $axios.style.backgroundPosition = 'center';
                        }else {
                        $axios.style.backgroundImage = `url('../assets/img/back_001.jpg')`;
                        } 
                    }
                
    )
    .catch(error=>{
        console.log(error.response);
        let errorMessage = error.response.statusText || "ocurrió un error";
        $axios.innerHTML = `Error ${error.response.status}: ${errorMessage}`

    })
    .finally(()=>{
        console.log("esto se ejecutará independientemente del resultado de Axios")
    });
};

//  ****||||****||||****||||****||||****|||| Llamada GET a alabanza ****||||****||||****||||****||||****||||

let identificadorAlabanza;
const alabanzaGet = document.getElementById('myDropdown4');
alabanzaGet.addEventListener("click", (e)=>{
     identificadorAlabanza=e.target.id;
});

/*Usando onclick */
alabanzaGet.onclick = ()=> {
    document.getElementById("inicio").style.display = "none";
    //Manipulación del DOM
    const d = document,
    $axios = d.getElementById("axios"),
    $fragment = d.createDocumentFragment(); /*Fragmento: para no hacer iteraciones, sino un sólo pegado */

    //Usando la libreria axios para hacer AJAX
    axios
    .get("js/alabanza.json")  
    .then(res=>{
        
       let json = res.data; //de la respuesta, lo que viene en el parametro "data", lo  gaurdo en a la let "json"

       let alabanza = json.find(el =>{
            return (el.id == identificadorAlabanza);
            });
            const $li = d.createElement("li");
            $li.innerHTML = ` ${alabanza.title} ${alabanza.estrofas}`;
            $fragment.appendChild($li); 
            $axios.appendChild($fragment);
                if (alabanza.background) {
                        $axios.style.backgroundImage = `url('${alabanza.background}')`;
                        $axios.style.backgroundSize = 'cover';
                        $axios.style.backgroundPosition = 'center';
                        }else {
                        $axios.style.backgroundImage = `url('../assets/img/back_001.jpg')`;
                        }    
                }
    )
    .catch(error=>{
        console.log(error.response);
        let errorMessage = error.response.statusText || "ocurrió un error";
        $axios.innerHTML = `Error ${error.response.status}: ${errorMessage}`

    })
    .finally(()=>{
        console.log("esto se ejecutará independientemente del resultado de Axios")
    });
};



//  ****||||****||||****||||****||||****|||| Llamada GET a zemirot ****||||****||||****||||****||||****||||


let identificadorZemirot;
const zemirotGet = document.getElementById('myDropdown6');
zemirotGet.addEventListener("click", (e)=>{
     identificadorZemirot=e.target.id;
});

/*Usando onclick */
zemirotGet.onclick = ()=> {getZemirot()};

//Función getHym
function getZemirot() {

    document.getElementById("inicio").style.display = "none";
    //Manipulación del DOM
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment(); /*Fragmento: para no hacer iteraciones, sino un sólo pegado */

    //Usando la libreria axios para hacer AJAX
    axios
    .get("js/zemirot.json") 
    .then(res=>{
        
       let json = res.data; 
       //de la respuesta, lo que viene en el parametro "data", lo  gaurdo en a la let "json"

       let zamir = json.find(el =>{
            return (el.id == identificadorZemirot);
            });
            const $li = document.createElement("li");
            $li.innerHTML = ` ${zamir.title} ${zamir.estrofas}`;
            $fragment.appendChild($li); 
            
            if ($axios.hasChildNodes()) {
                     $axios.removeChild($axios.childNodes[0]); 
                     $axios.appendChild($fragment);
                } else{
                   $axios.appendChild($fragment);
                  // console.log($axios)
                } 
                }
    )
    .catch(error=>{
        console.log(error.response);
        let errorMessage = error.response.statusText || "ocurrió un error";
        $axios.innerHTML = `Error ${error.response.status}: ${errorMessage}`

    })
    .finally(()=>{
        console.log("esto se ejecutará independientemente del resultado de Axios")
    });
}