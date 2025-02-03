
document.addEventListener('DOMContentLoaded', e => {
    let inicio = document.getElementById("inicio");
    inicio.innerHTML = " <div class='titulo'><h1>Todos los llamados de mi Nombre; </h1><h2>para gloria mía los he creado, los formé y los hice.</h2><h3>Isaías 43:7</h3></div><img src='img/logo.svg' alt='imagenInicio'>";
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