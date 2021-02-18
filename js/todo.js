//creating an xhr object
var xhttp= new XMLHttpRequest();

//event listner
xhttp.onreadystatechange=function(){

     //condition
         if(this.readyState==4 && this.status==200){

                    var response=JSON.parse(this.responseText);
                    var output="<th>UserID</th><th>ID</th><th>Title</th><th>Completed</th>";
                        for(var i=0;i<response.length;i++){
                            if(response[i].completed==true){
                                output+="<tr><td>"+response[i].userId+"</td><td>"+response[i].id+"</td><td>"+response[i].title+"</td><td>" + '<input type="checkbox" disabled=true name="test_name" value="'+response[i].completed+'">' + '<br></input>'+"</td></tr>";
                            }
                            else{
                                output+="<tr><td>"+response[i].userId+"</td><td>"+response[i].id+"</td><td>"+response[i].title+"</td><td>" + '<input type="checkbox"  name="test_name" value="'+response[i].completed+'">' + '<br></input>'+"</td></tr>"; 
                            }
                        }
                    document.getElementById("tbl").innerHTML=output;
        
  
                    $(document).ready(function(){

                        $('input[type="checkbox"]').click(function(){
                            let P = new Promise((res, rej) => {
                                if ($("input:checkbox:checked").length ==5) {
                                    res();
                                } else {
                                    rej();
                                }
                            });
                  
                            P.then(() => {
                                console.log("completed");
                                alert("Congrats. 5 Tasks have been Successfully Completed");
                            })
                            .catch(() => {
                                console.log("rejected")
                            })
                          });
                        
                    

                   });
                        
        }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();