document.querySelector("#btnAdd").addEventListener("click", ()=>{
    let uEmail = document.querySelector("#email").value;
    let uClave = document.querySelector("#clave").value;

   let user = {
       correo : uEmail,
       clave : uClave
   };

   let todos = [];
   let local = JSON.parse(localStorage.getItem("credenciales-2"));

   if(local != null) {
       todos = local;
   }

   console.log(todos);
   todos.push(user);
   localStorage.setItem("credenciales-2", JSON.stringify(todos));

   console.log(JSON.parse(localStorage.getItem("credenciales-2")));
})
