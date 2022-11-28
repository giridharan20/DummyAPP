fetch("https://inventoryapim.azure-api.net/employee/api/Employee/GetEmployee",
// {
//    headers:{
//       'key':'32f671a7b4bd4e64917abb35b2185495',
//       'value':'32f671a7b4bd4e64917abb35b2185495'
//    }
// }
)
// const url = "https://inventoryapim.azure-api.net/employee/api/Employee/GetEmployee";
// fetch(url, {
//   method: "GET",
//   headers: {
//     "X-Auth-Token": "32f671a7b4bd4e64917abb35b2185495",
//     "Content-Type": "application/json"
    
//   }
// })
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
            <td>${product.EmployeeId}</td>
            <td>${product.EmployeeName}</td>
            <td>${product.Department}</td>
            <td>${product.EmailId}</td>
            <td>${product.Age}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});