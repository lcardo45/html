<template>
  <div class="container">
    
    <h1>Bienvenido</h1>

  

    <b-alert :show="dismissCountDown"
    dismissible
    :variant="mensaje.color"
    @dismissed="dismissCountDown=0"
    @dismiss-count-down="countDownChanged"> 
    {{mensaje.texto}} 
    </b-alert>
    <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
      

      <h3>editar Nota</h3>
      <v-card
    class="overflow-hidden"
  >
    <v-toolbar
      flat
      color="purple"
    >
      <v-icon></v-icon>
      <v-toolbar-title class="font-weight-light">
        Edita tu pedido
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="purple darken-3"
        fab
        small
        @click="isEditing = !isEditing"
      >
        <v-icon v-if="isEditing">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="corte"
      ><input type="text" class="form-control my-2" placeholder="Corte" v-model="notaEditar.corte"></v-text-field>
      <v-autocomplete
        :disabled="!isEditing"
        :items="states"
        :filter="customFilter"
        color="white"
        item-text="name"
        label="State"
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!isEditing"
        color="success"
        @click="save"
      >
        Save
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Tu pedido ha sido editado
    </v-snackbar>
  </v-card>
      <input type="text" class="form-control my-2" placeholder="Corte" v-model="notaEditar.corte">
      <input type="text" class="form-control my-2" placeholder="Cantidad" v-model="notaEditar.cantidad">
      <input type="text" class="form-control my-2" placeholder="Termino" v-model="notaEditar.descripcion">
      <input type="text" class="form-control my-2" placeholder="direccion" v-model="notaEditar.nombre">
      <input type="text" class="form-control my-2" placeholder="direccion" v-model="notaEditar.numero">
      <input type="text" class="form-control my-2" placeholder="direccion" v-model="notaEditar.direccion">
      <b-button class="btn-success my-2" type="submit">Editar</b-button>
      <b-button class="my-2" type="submit" @click="editar=false">Cancelar</b-button>

    </form>

    <form @submit.prevent="agregarNota()" v-if="!editar">

      <h3>Agregar pedido</h3>
      <v-stepper v-model="e1">
        <div >
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Corte
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Cantidad
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 3"
        step="3"
      >
        Termino
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">
        Información
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="primary"
          height="100%"
        >
  <div class="container">
  <div class="row">
    <div class="col-sm">
      <b-row class="my-2">
    <b-col sm="2">
      <label for="input-default">Elige tu corte:</label>
    </b-col>
   <b-col sm = "5">
   <v-container fluid>
    <v-checkbox
      v-model="nota.corte"
      label="Tomahawk"
      value="Tomahawk"
    ></v-checkbox>
    <v-checkbox
      v-model="nota.corte"
      label="Rib Eye"
      value="Rib Eye"
    ></v-checkbox>
    <v-checkbox
      v-model="nota.corte"
      label="New York Steak"
      value="New York Steak"
    ></v-checkbox>
    <v-checkbox
      v-model="nota.corte"
      label="Picaña"
      value="Picaña"
    ></v-checkbox>
  </v-container>
   </b-col>
   <b-col sm = "2">
   <v-container fluid>
    <v-checkbox
      v-model="nota.corte"
      label="T-bone"
      value="T-bone"
    ></v-checkbox>
    <v-checkbox
      v-model="nota.corte"
      label="Entraña"
      value="Entraña"
    ></v-checkbox>
    <v-checkbox
      v-model="nota.corte"
      label="Sirloin"
      value="Sirloin"
    ></v-checkbox>
    <v-checkbox
      v-model="nota.corte"
      label="Entrecot"
      value="Entrecot"
    ></v-checkbox>
  </v-container>
   </b-col>
   <b-col sm = "18">
   <b-container fluid class="p-4 bg-dark">
  <b-row>
    <b-col>
      <b-img thumbnail fluid src="https://image.shutterstock.com/image-photo/raw-tomahawk-steak-on-wooden-600w-738822868.jpg" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-solobuey-churrasco-1559218278.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-pican-a-1559219679.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image 3"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-rib-eye-1559219681.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-new-york-steak-1559219679.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-solobuey-entrecot-1559218278.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image 3"></b-img>
      
    </b-col>
  </b-row>
</b-container>
  
   </b-col>
  </b-row>
    </div>
  </div>
  </div>
    
        </v-card>
        <br>
        <b-button pill variant="primary" @click="e1 = 2">Continuar</b-button>
        
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="100%"
        >
        <b-row class="my-2">
    <b-col sm="2">
      <label for="input-default">Cantidad:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-default" placeholder="Ingresa la cantidad" v-model="nota.cantidad"></b-form-input>
    </b-col>
  </b-row>
        </v-card>

        <b-button pill variant="primary" @click="e1 = 3">Continuar</b-button>
        <b-button pill variant="warning" @click="e1 = 1">Atras</b-button>

      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="100%"
        >
        
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
        
        </v-card>

        <b-button pill variant="primary" @click="e1 = 4">Continuar</b-button>
        <b-button pill variant="warning" @click="e1 = 2">Atras</b-button>

        
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="100%"
        >
        <b-row class="my-2">
    <b-col sm="2">
      <label for="input-default">Información:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-default" placeholder="Ingresa tu nombre" v-model="nota.nombre"></b-form-input>
      <b-form-input id="input-default" placeholder="Ingresa tu número" v-model="nota.numero"></b-form-input>
      <b-form-input id="input-default" placeholder="Ingresa tu dirección" v-model="nota.direccion"></b-form-input>
     
    </b-col>
  </b-row>
        </v-card>

        <b-button pill class="btn-success my-2" type="submit">Agregar</b-button>
        <b-button pill variant="warning" @click="e1 = 3">Atras</b-button>

      </v-stepper-content>
    </v-stepper-items>
        </div>
  </v-stepper>
 
      

    </form>
        
   <table class="table">
    <thead>
    <tr>
    
      <th scope="col">Corte</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Termino</th>
      <th scope="col">Informacion</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in notas" :key="index">
    
      <td>{{item.corte}}</td>
      <td>{{item.cantidad}}</td>
      <td>{{item.descripcion}}</td>
      <td>

        <select v-model="selected" multiple>
        <option>{{item.nombre}}</option>
        <option>{{item.numero}}</option>
        <option>{{item.direccion}}</option>
        </select>


      </td>
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
             nota:{corte:'',cantidad:'',descripcion:'',nombre:'',numero:'',direccion:''},
             editar:false,
             notaEditar:{},
             e1: 1,
             model:null,
             hasSaved: false,
            isEditing: null,
            model: null,
             
      selected: '',
          
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
                 this.nota.corte='';
                 this.nota.cantidad='';
                 this.nota.descripcion='';
                 this.nota.nombre='';
                 this.nota.numero='';
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

            activarEdicion(id){
      this.editar = true;
      console.log(id);
      this.axios.get(`/nota/${id}`)
        .then(res => {
          this.notaEditar = res.data;
        })
        .catch(e => {
          console.log(e.response);
        })
    },


    customFilter (item, queryText, itemText) {
        const textOne = item.name.toLowerCase()
        const textTwo = item.abbr.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
      },

      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
    editarNota(item){
      this.axios.put(`/nota/${item._id}`, item)
        .then(res => {
          const index = this.notas.findIndex(n => n._id === res.data._id);
          this.notas[index].corte = res.data.corte;
          this.notas[index].cantidad = res.data.cantidad;
          this.notas[index].descripcion = res.data.descripcion;
          this.notas[index].nombre = res.data.nombre;
          this.notas[index].numero = res.data.numero;
          this.notas[index].direccion = res.data.direccion;
          this.mensaje.color = 'success';
          this.mensaje.texto = 'Nota Editada';
          this.showAlert();
          this.editar = false;
        })
        .catch(e => {
          console.log(e.response);
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

