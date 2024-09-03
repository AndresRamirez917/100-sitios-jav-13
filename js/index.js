async function getData() {
    const result = await fetch("https://rickandmortyapi.com/api/character");
    const character = await result.json();
    character.results.forEach(element => {
        if(element.id == 8) {
            const card = document.createRange().createContextualFragment(`
                
               <div class="card-2">
                <img src="${element.image}" alt="">
               </div>
                
                `)
                const about = document.getElementById('about');
                about.append(card)
        }
    });
}


const btn_validar = document.getElementById('btn-validar')
const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const arrMessages = ["nombre", "email", "mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        for(i = 0; i < arrMessages.length; i++){
            if(arr[i].value == ""){
                swal({
                    title: `El campo ${arrMessages[i]} no puede estar vacío`,
                    icon: "error",
                     })
                     return false;
            }
        }
        if(!emailValido(email.value)){
            swal({
                title: `El formato del ${arrMessages[1]} no es correcto`,
                icon: "error",
                 })
                 return false;
        }
    }
    swal({
        title: `Los datos fueron enviados satisfactoriamente`,
        icon: "success",
         })
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
    return true;

}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

btn_validar.addEventListener("click", validar)
getData()