import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  items = [];

  idNegocio:any;  


  constructor() { 
    this.cargar_productos();
  }

  agregarProducto(id,item){

    let x = this.items.map((data,indice)=>{
      if(data['id_producto']==id){
        return indice;
      }
    });

    if(x>= [0]){    
      console.log("actualiza");
      //obtener los productos que ya hay
      console.log("indice " + x);
      this.actualizarItem(id,item);
    }else{
      console.log("nuevo");
      this.items.push(item);
      this.guardar_productos();
    }


  }

  getItem(id){
    let item = this.items.map((data,indice)=>{
      if(data['id_producto']==id){
        return indice;
      }
    });
    return this.items[item[0]];
  }

  actualizarItem(id,newData){
      
    //actualizar
    let item = this.items.map((data,indice)=>{
      if(data['id_producto']==id){
        this.items[indice] = newData;
      }
    });
    this.guardar_productos();




  }

  eliminarItem(id){
    let item = this.items.map((data,indice)=>{
      if(data['id_producto']==id){
        this.items.splice(indice,1);
      }
    });

    this.guardar_productos();

  }

  guardar_productos(){
    localStorage.setItem('productos', JSON.stringify(this.items));
  }

  guardar_idNegocio(){
    localStorage.setItem('idNegocio', JSON.stringify(this.idNegocio));
  }

  cargar_productos(){
    if ( localStorage.getItem('productos') ){
      this.items = JSON.parse( localStorage.getItem('productos') );
      this.idNegocio = JSON.parse( localStorage.getItem('idNegocio') );
    }
  }


}
