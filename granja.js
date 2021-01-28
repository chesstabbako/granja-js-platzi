var d= document.getElementById("canvas");

var lienzo= d.getContext("2d");

var granja= {
    
url: "img/tile.png",    
cargado: false   
    
};

var vaca= {
    
url: "img/vaca.png",    
cargado: false   
       
};

var pollo= {
    
url: "img/pollo.png",    
cargado: false   
       
};

var cerdo= {
    
url: "img/cerdo.png",    
cargado: false   
       
};

//document.addEventListener("keyup", teclasCerdo);

var granjaCargada= new Image();
granjaCargada.src= granja.url;
granjaCargada.addEventListener("load", cargaGranja);

var vacaCargada= new Image();
vacaCargada.src= vaca.url;
vacaCargada.addEventListener("load", cargaVaca);

var polloCargada= new Image();
polloCargada.src= pollo.url;
polloCargada.addEventListener("load", cargaPollo);

var cerdoCargada= new Image();
cerdoCargada.src= cerdo.url;
cerdoCargada.addEventListener("load", cargaCerdo);

function cargaGranja(){

  granja.cargado= true;
  dibujar();  
               
}

function cargaVaca(){

  vaca.cargado= true;
  dibujar();  
               
}

function cargaPollo(){

  pollo.cargado= true;
  dibujar();  
               
}

function cargaCerdo(){

  cerdo.cargado= true;
  dibujar();  
               
}

function dibujar(){
    
 if(granja.cargado){
    
 lienzo.drawImage(granjaCargada, 0, 0);

 }//cierra if granja!
     
 if(vaca.cargado){  
    
  var numero= aleatorio(5,10);    
            
  for(var i=0; i<numero; i++){      
       
   var x= aleatorio(0,420);   
   var y= aleatorio(0, 420); 
           
   lienzo.drawImage(vacaCargada, x, y);
             
  }//Cierra el for 
          
 }//cierra el if vaca!
    
 if(pollo.cargado){  
    
   var numero= aleatorio(5,10);          
      
    for(var i=0; i<numero; i++){      
        
    var x= aleatorio(0,420);   
    var y= aleatorio(0, 420);    
        
    lienzo.drawImage(polloCargada, x, y);
             
    }//cierra el for!
       
  }//Cierra el if pollo!

 if(cerdo.cargado){      
                  
   var x= aleatorio(0, 420);
   var y= aleatorio(0, 420);    
   
  lienzo.drawImage(cerdoCargada, x, y);       
     
   xx= x;
   yy= y; 

 }//cierra el if cerdo!
    
}//Cierra dibujar!
  
document.addEventListener("keyup", teclas);

function teclas(e){
    
  var mov= 50;
    
  if(e.key== "ArrowUp"){
         
    lienzo.drawImage(cerdoCargada, xx, yy-mov);     
    
    yy-= mov;    
      
  }
    
  if(e.key== "ArrowDown"){
    
    lienzo.drawImage(cerdoCargada, xx, yy+mov); 
    
    yy+= mov;    
      
  }  
    
  if(e.key== "ArrowLeft"){
    
    lienzo.drawImage(cerdoCargada, xx-mov, yy); 
    
    xx-= mov;    
      
  }  
    
  if(e.key== "ArrowRight"){
    
    lienzo.drawImage(cerdoCargada, xx+mov, yy); 
    
    xx+= mov;    
      
  }    
    
}

function aleatorio(min, max){

  var aleatorio= Math.floor(Math.random()*(max - min + 1)) + min;

  return aleatorio;

}

