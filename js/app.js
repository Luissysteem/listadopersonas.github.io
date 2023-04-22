
// Definicion de clase
class personas{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido
    }
}

//creacion del arreglo, con un valor cargado
const persona = [
    new personas('victoria','garcia')
];

// funcion que muestra la persona al cargar la pagina
function mostrarpersonas(){
    console.log('Mostrando persona..')
    let texto = '';
    for (const person of persona) {
        console.log(person)
        texto += `<li> ${person.nombre} ${person.apellido}` // mostrando los valores de los meotodos nombre y apellido
    }

    document.getElementById('personas').innerHTML = texto // mostrar las elementos en el div personas
    
}

function agregarpersona(){
    const forma = document.forms['forma'];

    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){ // validacion si los espacios estan vacios, 
        const person = new personas(nombre.value,apellido.value)
        console.log(person)
        
        persona.push(person) 
        
        mostrarpersonas();
    }
    else
    console.log('No se puede agregar valor')
        
}