
let name = prompt("Please enter your name:");
function a()
{
   let gender;
   while(gender !== "male" || gender !== "female" )
   {
     gender= prompt("what is your gender (male OR female)?");
     let check = gender.toLocaleLowerCase();
      if(check === "male")
      {
      alert(`Welcome mr ${name}`)
      break;
      }else if(check ==="female")
      {
         alert(`Welcome ms ${name}`)
         break;
      }
   
   }
}
a();
let drink_type= prompt("would you like a hot or cold drink?").toLocaleLowerCase();

let drink_name= prompt("what is your drink name");

var userinfo=[];
userinfo.push(name,gender,drink_type,drink_name);
for(let i=0;i<userinfo.length;i++)
{
   console.log(userinfo[i]);
}
