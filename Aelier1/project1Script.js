function aff()
{
    var oui = document.getElementById("oui");
    var non = document.getElementById("non");
    var div = document.getElementById("Div");

    if(non.checked==true)
    {
        div.style.display="none";
        return;
    }
    if(oui.checked==true)
    {
        div.style.display="block";
        return;
    }

}

/*****************************************************/

function verifier()
{
    var nom=document.getElementById("nom");
    var pwd=document.getElementById("pwd");
    var divErreur=document.getElementById("Erreur");
    var reggNom =/^((?!\W|\d|_).)*$/g ;

    if(nom.value=="" )
    {
        divErreur.innerHTML = "Nom obligatoir!!";
        nom.style.border="2px solid red";
        return;
    }
    if(reggNom.test(nom.value) == false)
    {
        divErreur.innerHTML = "Nom ne doit pas contenir de chiffre ou caract\ère sp\éciaux (! @ # $ % ^ * - _ )!!";
        nom.style.border="2px solid red";
        divErreur.style.border="2px solid red";

        return;
    }
    else{nom.style.border="2px solid green";}

    if(pwd.value=="")
    {
        divErreur.innerHTML = "Password obligatoir!!";
        pwd.style.border="2px solid red";
        divErruer.style.border="2px solid red";

        return;
    }
    else{
        pwd.style.border="2px solid green";
        divErreur.style.border="2px solid green";
        divErreur.innerHTML = "Login Valide";

    }

    /*************/
    var oui = document.getElementById("oui");
    if(non.checked == true)
    {
        divErreur.innerHTML += "<br/> (Sans la séléction d'une ville <-->liste ville n'est pas afficher) "
    }
    if(oui.checked == true)
    {
       var mySelect = document.querySelector("#mySelect");
       var i = mySelect.selectedIndex;
       var v = mySelect.options[i].value;
       var t = mySelect.options[i].text;
       if(i == 0)
       {
        divErreur.innerHTML = "La liste des villes a été affichée , tu doit selectionner une ville";
        divErreur.style.border="2px solid red";
        return;
       }
       else
        { 
            divErreur.style.border="2px solid green";

           divErreur.innerHTML +="<br/>----------------------<br/> Username : " + nom.value +
                                 "<br/> Password : " + pwd.value +
                                 "<br/> You select option : <br/> index :" + i +
                                 "<br/> value : " + v + "<br/> ville :" + t ;
                             
       }
    
    }
    

}
    
        

    
    
