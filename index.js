// Add your code here
function submitData(name, email){
    const data = {
       name: name,
       email: email,
       
     };
     
     const mainObj = {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: JSON.stringify(data),
     };
     
    return fetch("http://localhost:3000/users", mainObj)
       .then(function (response) {
         return response.json();
       })
       .then(function (obj) {
           console.log("Success:", obj);
           document.body.innerHTML = obj.id;
       })
       .catch(function (error){
           console.error("Error:", error);
           document.body.innerHTML = error.message;
       })
       
       

}
submitData("Steve", "steve@steve.com")