var div_container=document.createElement("div");
div_container.setAttribute("class","container");
var div_row=document.createElement("div");
div_row.setAttribute("class","row text-center");

var div_1=document.createElement("div");
div_1.setAttribute("class","col-lg-12 col-sm-12");

var h1_tag=document.createElement("h2");
h1_tag.setAttribute("id","title");
h1_tag.setAttribute("class","text-center");
h1_tag.style.textAlign='center';
h1_tag.style.marginTop='100px';
h1_tag.innerHTML="The internet's biggest collection of open source dog pictures.";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");
input.style.width='80%';
input.style.height='50px';

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search";
button.style.marginLeft='5px';
button.addEventListener("click",foo);

var div_parent=document.createElement("div");
div_parent.setAttribute("class","col-lg-12");
div_parent.setAttribute('id','div_parent')

div_1.append(h1_tag,input,button);
div_row.appendChild(div_1);
div_container.appendChild(div_row);
document.body.append(div_container);

async function foo(){
    let res=document.getElementById("name").value;  var div_content=''; div_parent.innerHTML='';
     
    try{
    var url=`https://dog.ceo/api/breed/${res}/images/random`;
    let result=await fetch(url);
    let result1=await result.json();
    var div_content='';
       var div1=document.createElement("div");
       div1.setAttribute("class","col-lg-6");
    
       var div2=document.createElement("div");
       div2.setAttribute("class","col-lg-6");
       div2.style.marginTop='10px';
       div2.style.display='inline-grid';
      
       var div3=document.createElement("div");
       div3.setAttribute("class","col-lg-6");

       if(result1.status=="success"){
       var div_content=`<div style="text-align:left;"><img src="${result1.message}"/></div>`;
       }else{
        var div_content=`<div class="list-group" style="text-align:left;">
        <a href="#" class="list-group-item list-group-item-action active">
        No Picture found
        </a>
       </div>`;
       }
       div2.innerHTML=div_content;   
    
    }catch{
        var div1=document.createElement("div");
        div1.setAttribute("class","col-lg-6");
     
        var div2=document.createElement("div");
        div2.setAttribute("class","col-lg-6");
        div2.style.marginTop='10px';
        div2.style.display='inline-grid';
       
        var div3=document.createElement("div");
        div3.setAttribute("class","col-lg-6");
        var div_content_no=`<div class="list-group" style="text-align:left;">
       <a href="#" class="list-group-item list-group-item-action active">
       No Pictures found 
       </a>
      </div>`;
     
     div2.innerHTML=div_content_no;   
    }
    div_parent.append(div1,div2,div3);
    div_row.append(div_parent);
}