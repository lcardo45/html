<template>
  <div class="container">
    
    <h1>Welcome</h1>

    <b-alert :show="dismissCountDown"
    dismissible
    :variant="mensaje.color"
    @dismissed="dismissCountDown=0"
    @dismiss-count-down="countDownChanged"> 
    {{mensaje.texto}} 
    </b-alert>
    <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
      

      <h3>editar Nota</h3>
      <input type="text" class="form-control my-2" placeholder="Corte" v-model="notaEditar.nombre">
      <input type="text" class="form-control my-2" placeholder="Termino" v-model="notaEditar.descripcion">
      <input type="text" class="form-control my-2" placeholder="direccion" v-model="notaEditar.direccion">
      <b-button class="btn-success my-2" type="submit">Editar</b-button>
      <b-button class="my-2" type="submit" @click="editar=false">Cancelar</b-button>

    </form>

    <form @submit.prevent="agregarNota()" v-if="!editar">

      <h3>Agregar pedido</h3>

   <b-container fluid>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-default">Corte:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-default" placeholder="Ingresa el tipo de corte" v-model="nota.nombre"></b-form-input>
    </b-col>
  </b-row>
<b-row class="my-3">
    <b-col sm="2">
      <label for="input-default">Termino de la carne:</label>
    </b-col>
   <b-col sm = "2">
   <v-container fluid>
    <v-checkbox
      v-model="nota.descripcion"
      label="Azul"
      value="Azul"
    ></v-checkbox>
    <v-checkbox
      v-model="nota.descripcion"
      label="Medio"
      value="Medio"
    ></v-checkbox>
    <v-checkbox
      v-model="nota.descripcion"
      label="tres cuartos"
      value="tres Cuartos"
    ></v-checkbox>
    <v-checkbox
      v-model="nota.descripcion"
      label="Bien asada"
      value="Bien asada"
    ></v-checkbox>
  </v-container>
   </b-col>
  </b-row>
  
  <b-row class="my-2">
    <b-col sm="2">
      <label for="input-default">Dirección:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-default" placeholder="Ingresa tu dirección" v-model="nota.direccion"></b-form-input>
    </b-col>
  </b-row>

</b-container>
      <b-button class="btn-success my-2" type="submit">Agregar</b-button>

    </form>
        
   <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Corte</th>
      <th scope="col">Termino</th>
      <th scope="col">direccion</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in notas" :key="index">
      <th>{{item._id}}</th>
      <td>{{item.nombre}}</td>
      <td>{{item.descripcion}}</td>
      <td>{{item.direccion}}</td>
      <td>
        <b-button class="btn-danger btn-sw mx-2" @click="eliminarNota(item._id)">Eliminar</b-button>
        <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
      </td>
    </tr>
  
  </tbody>
</table>
  </div>
</template>


<script>

    export default{

        data(){
           return{
             notas:[],
             mensaje: {color: 'success', texto: ''},
             dismissSecs: 5,
             dismissCountDown: 0,
             nota:{nombre:'',descripcion:'',direccion:''},
             editar:false,
             notaEditar:{},
            
            
        
            
        }
        },
        created(){
            
            this.listarNotas();
            
        },

        methods:{

            listarNotas(){

                this.axios.get('/nota')
                .then(res=>{

                    console.log(res.data);
                    this.notas=res.data;

                })
                .catch(e=>{
                    console.log(e.response);
                })
            },

             agregarNota(){

               this.axios.post('/nueva-nota',this.nota)
               .then(res=>{

                 this.notas.push(res.data)
                 this.nota.nombre='';
                 this.nota.descripcion='';
                 this.nota.direccion='';
                 this.mensaje.color='success';
                 this.mensaje.texto='Nota Agregada';
                 this.showAlert()

               })
               .catch(e=>{
                 
                 console.log(e.response)
               })

             },
             eliminarNota(id){
                this.axios.delete(`/nota/${id}`)
               .then(res =>{
                 const index=this.notas.findIndex(item => item._id === res.data._id);
                 this.notas.splice(index,1);
                 this.showAlert();
                 this.mensaje.color='success'
                 this.mensaje.texto='Nota eliminada'
                 
               })
               .catch(e=>{

                 console.log(e.response)

               })


             },

            editarNota(item){
              this.axios.put(`/nota/${item._id}`, item)

              .then(res=>{

                const index= this.notas.findIndex(n=>n._id === res.data._id);
                this.notas[index].nombre=res.data.nombre;
                this.descripcion[index].descripcion=res.data.descripcion;
                 this.showAlert();
                 this.mensaje.color='warning'
                 this.mensaje.texto='Nota editada'

              })
              .catch(e=>{
                console.log(e.response)
              })

            },

            activarEdicion(){
              
              this.editar=true;
              this.axios.get(`/nota/${id}`)
              .then(res=>{
                this.notaEditar=res.data;
              })
              .catch(e=>{


              })
              
            
            },
            

            countDownChanged(dismissCountDown) {
              this.dismissCountDown = dismissCountDown
            },
            showAlert() {
              this.dismissCountDown = this.dismissSecs
            }
        
        
        }

    }

</script>
