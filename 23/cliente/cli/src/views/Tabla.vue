<template>
<v-container>
    <v-layout>
        <h1> Reporte de Notas</h1>
    </v-layout>
   
    <b-alert :show="dismissCountDown" dismissible :variant="mensaje.color" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        {{mensaje.texto}}
    </b-alert>

    <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
        <h3>Editar nota</h3>
        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="notaEditar.nombre">
        <input type="text" class="form-control my-2" placeholder="Descripción" v-model="notaEditar.descripcion">
        <b-button class="btn-warning my-2 mx-2" type="submit">Editar</b-button>
        <b-button class="my-2" type="submit" @click="editar = false">Cancelar</b-button>
    </form>

     <!-- <v-form @submit.prevent="agregarNota()" v-if="!editar" v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="nota.nombre" :rules="nameRules" :counter="50" label="Nota" required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field v-model="nota.descripcion" :rules="nameRules" :counter="50" label="Descripción" required></v-text-field>
                    </v-col>
                   

                </v-row>
                  <v-btn color="success" mx-2 elevation="19" type="submit">Agregar nota</v-btn>
                 </v-container>
           
        </v-form> -->
       
    <!-- <form @submit.prevent="agregarNota()" v-if="!editar">
        <h3>Agregar nueva nota</h3>
        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="nota.nombre">
        <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="nota.descripcion">
        <b-button class="btn-success my-2 btn-block" type="submit">Agregar</b-button>

    </form> -->

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in notas" :key="index">
                <th scope="row">{{item._id}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.descripcion}}</td>
                <td>
                    <b-button class="btn-danger mx-2" @click="eliminarNota(item._id)">Eliminar</b-button>
                    <b-button class="btn-warning" @click="activarEdicion(item._id)">Editar</b-button>
                </td>
            </tr>

        </tbody>
    </table>

</v-container>
</template>

<script>
export default {

    data() {
        return {

            notas: [],
            dismissSecs: 5,
            dismissCountDown: 0,
            mensaje: {
                color: '',
                texto: ''
            },
            nota: {
                nombre: '',
                descripcion: ''
            },
            editar: false,
            notaEditar: {}

        }
    },
    created() {

        this.listarNotas();

    },
    methods: {

        listarNotas() {
            this.axios.get('/nota')
                .then(res => {

                    console.log(res.data)
                    this.notas = res.data;
                })
                .catch(e => {

                    console.log(e.response);
                })
        },
        agregarNota() {
            // console.log(this.nota);
            this.axios.post('/nueva-nota', this.nota)
                .then(res => {
                    this.notas.push(res.data)
                    this.nota.nombre = '';
                    this.nota.descripcion = '';
                    //Limpieza de los campos
                    this.mensaje.color = 'success';
                    this.mensaje.texto = 'Nota Agregada!';
                    this.showAlert()
                })
                .catch(e => {
                    console.log(e.response);
                    if (e.response.data.error.errors.nombre.message) {
                        this.mensaje.texto = e.response.data.error.errors.nombre.message
                    } else {
                        this.mensaje.texto = 'Error de sistema';
                    }
                    this.mensaje.color = 'danger';
                    this.showAlert()
                })
        },

        eliminarNota(id) {

            this.axios.delete(`/nota/${id}`)
                .then(res => {

                    const index = this.notas.findIndex(item => item._id === res.data._id);
                    this.notas.splice(index, 1);
                    this.mensaje.color = 'success';
                    this.mensaje.texto = 'Nota Eliminada'
                    this.showAlert();

                })
                .catch(e => {

                    console.log(e.response)
                })

        },

        activarEdicion(id) {

            this.editar = true;
            this.axios.get(`/nota/${id}`)
                .then(res => {
                    this.notaEditar = res.data;

                })
                .catch(e => {

                    console.log(e.response)

                })

        },

        editarNota(item) {

            this.axios.put(`/nota/${item._id}`, item)
                .then(res => {

                    const index = this.notas.findIndex(n => n._id === res.data._id);
                    this.notas[index].nombre = res.data.nombre;
                    this.notas[index].descripcion = res.data.descripcion;
                    this.mensaje.color = 'success';
                    this.mensaje.texto = 'Nota Editada';
                    this.showAlert();
                    this.editar = false;

                })
                .catch(e => {

                    console.log(e.response)
                })

        },

        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }

    },

}
</script>
