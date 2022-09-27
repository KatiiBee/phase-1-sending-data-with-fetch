// Add your code here
function submitData(name, email){
    const configObject ={
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body:JSON.stringify({
            "name":name,
            "email":email,
        })
    };
    return fetch ('http://localhost:3000/users', configObject)
    .then (resp=>resp.json())
    .then(body=>newContact(body.id))

    .catch (function (error){
        document.querySelector("body").innerHTML = error
    })
}
function newContact(newID){
    document.querySelector("body").innerHTML = newID;
    
}
submitData ("Name", "name@name.com")