
function printHandler(){
    console.log("in javascript");
    let value = document.getElementById("table").value;
    let div = document.getElementById("tables");
    div.innerHTML='';
    // console.log("value", value);
    for(var i=value;i<=20;i++){
        const headingTag = document.createElement("h2");
        const heading = document.createTextNode(`Table of : ${i}`);
        headingTag.appendChild(heading);
        div.appendChild(headingTag);
        // div.appendChild(document.createElement("br"))
        for(var j=1;j<=10;j++){
            const para = document.createElement("p");
            const line = document.createTextNode(`${i} X ${j} = ${i*j}`);
            para.appendChild(line);
            div.appendChild(para);
            // div.appendChild( i +" X " + j +" = " + i*j );
            // div.appendChild("<br>")
        }


    }
}