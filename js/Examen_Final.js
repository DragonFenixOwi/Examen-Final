/*
    -----------------------------------------------------------
        Autor: Osvaldo Aquino
        nickname: owi
        EXAMEN FINAL JAVASCRIPT.
    -----------------------------------------------------------
*/


/*
    ------------------------
        ESTRUCTURA MODULAR
    ------------------------
*/


/*
    ---------------------------
        VARIABLES GLOBABLES
    ---------------------------
*/

const Diferencia_Horaria_Restar_Londres = 1;
const Diferencia_Horaria_Restar_Los_Angeles = 9;
const Diferencia_Horaria_Restar_Nueva_York = 6;
const Diferencia_Horaria_Sumar_Sidney = 8;

/*
    --------------------
        FUNCIONES
    --------------------
*/




// Función que corrige visualmente el cero
function ponerCero(i)
        {
            if (i<10)
                {
                    i = '0' + i;
                }
            return i;
        }




//función que determina la hora de Madrid
function Reloj_Madrid ()
        {
            var fechaHora = new Date();
            hora = fechaHora.getHours();
            minutos = fechaHora.getMinutes();
            
            
            hora = ponerCero(hora);
            minutos = ponerCero(minutos);
            

            var divReloj = document.getElementById("Horario_Madrid");

            divReloj.innerHTML = ` ${hora}:${minutos}`; //imprimimos 

            setTimeout("Reloj_Madrid()",500);
        }




function Reloj_Londres ()
        {
            var fechaHora = new Date();
            hora = fechaHora.getHours();
            minutos = fechaHora.getMinutes();
            
            hora = hora - Diferencia_Horaria_Restar_Londres; 
            hora = ponerCero(hora);
            minutos = ponerCero(minutos);
            

            var divReloj = document.getElementById("Horario_Londres");

            divReloj.innerHTML = `${hora}:${minutos}`; //imprimimos 

            setTimeout("Reloj_Londres()",500);
        }


function Reloj_Los_Angeles ()
        {
            var fechaHora = new Date();
            hora = fechaHora.getHours();
            minutos = fechaHora.getMinutes();
            
            hora = hora - Diferencia_Horaria_Restar_Los_Angeles; 
            hora = ponerCero(hora);
            minutos = ponerCero(minutos);
            

            var divReloj = document.getElementById("Horario_Los_Angeles");

            divReloj.innerHTML = `${hora}:${minutos}`; //imprimimos 

            setTimeout("Reloj_Los_Angeles()",500);
        }






function Reloj_Nueva_York ()
        {
            var fechaHora = new Date();
            hora = fechaHora.getHours();
            minutos = fechaHora.getMinutes();
            
            hora = hora - Diferencia_Horaria_Restar_Nueva_York; 
            hora = ponerCero(hora);
            minutos = ponerCero(minutos);
            

            var divReloj = document.getElementById("Horario_Nueva_York");

            divReloj.innerHTML = ` ${hora}:${minutos}`; //imprimimos 

            setTimeout("Reloj_Nueva_York()",500);
        }




function Reloj_Sidney ()
        {
            var fechaHora = new Date();
            hora = fechaHora.getHours();
            minutos = fechaHora.getMinutes();
            
            hora = hora + Diferencia_Horaria_Sumar_Sidney; 
            hora = ponerCero(hora);
            minutos = ponerCero(minutos);
            

            var divReloj = document.getElementById("Horario_Sidney");

            divReloj.innerHTML = `${hora}:${minutos}`; //imprimimos 

            setTimeout("Reloj_Sidney()",500);
        }




        
// Mientras no me tenga cargado que no me llame windows
window.onload = function()
        {
            Reloj_Madrid();
            Reloj_Londres();
            Reloj_Los_Angeles();
            Reloj_Nueva_York();
            Reloj_Sidney();
        }





