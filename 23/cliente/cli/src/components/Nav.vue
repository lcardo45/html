<template>
  <div >
  
      <v-navigation-drawer
        permanent
        expand-on-hover
        absolute 
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Grace Fernandez
              </v-list-item-title>
              <v-list-item-subtitle>joha890521@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link @click="nota()">
            <v-list-item-icon>
              <v-icon>mdi-book-check-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title >Registrar Nota</v-list-item-title>
          </v-list-item>
          <v-list-item link  @click="tabla()">
            <v-list-item-icon>
              <v-icon>mdi-file-table-box-multiple</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title  >Notas</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Pendiente</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Pendiente</v-list-item-title>
          </v-list-item>
        </v-list>
        
      </v-navigation-drawer>
    
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
    methods:{
      nota(){
        this.$router.push('/nota')
        
      },

       tabla(){
        this.$router.push('/tabla')
        
      },


    }


  }
</script>