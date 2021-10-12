<template>
<div>
  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
<div class="container">
  <div class="row">
    <div class="col">
      <b-card no-body class="overflow-hidden" style="max-width: 600px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-tomahawk-1559219682.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Tomahawk">
          <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>Información</v-expansion-panel-header>
      <v-expansion-panel-content>
       Es lo mismo que un chuletón pero dejando todo el hueso de la costilla totalmente limpio de grasa. Suele proceder de animales de gran tamaño y su nombre viene de las hachas que utilizaban los antiguos indígenas norteamericanos, que tenían una forma parecida
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
    </div>
    <div class="col">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-rib-eye-1559219681.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Reb Eye">
          <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>Información</v-expansion-panel-header>
      <v-expansion-panel-content>
        Es el lomo alto limpio, sin tapilla y sin intercostal. La traducción es “ojo de costilla” por ser eso, el centro del lomo, y muy posiblemente lo encontrarás en las cartas como "ojo de bife". También es un corte típico americano y tiene un gran sabor y jugosidad. En Australia y Nueva elanda sí suelen servirlo con el hueso.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
    </div>
  </div>
</div>
<!-- aca van dos cortes -->
<div class="container">
  <div class="row">
    <div class="col">
      <b-card no-body class="overflow-hidden" style="max-width: 600px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-new-york-steak-1559219679.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="New York steak">
          <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>Información</v-expansion-panel-header>
      <v-expansion-panel-content>
        Es un corte americano que se obtiene del centro del lomo, localizado en la parte trasera del animal, cerca de las costillas. Es muy apreciado por su sabor y textura. Es ligeramente magro, no tiene hueso y puede cocinarse tanto a la parrilla como al horno. Además, es un tipo de carne muy tierna porque viene de un músculo que no trabaja demasiado.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
    </div>
    <div class="col">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-pican-a-1559219679.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Picaña">
          <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>Información</v-expansion-panel-header>
      <v-expansion-panel-content>
        Esto es lo que en España se conoce como tapilla. Está situada en la zona exterior del cuarto trasero, junto a la cadera. Es una pieza de forma triangular, cubierta de grasa en la parte superior. Cuanta más grasa tenga la pieza, se considerará de mejor calidad.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
    </div>
  </div>
</div>
<!-- cuatro cortes -->
<div class="container">
  <div class="row">
    <div class="col">
      <b-card no-body class="overflow-hidden" style="max-width: 600px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-t-bone-1559219680.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="T-Bone">
          <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>Información</v-expansion-panel-header>
      <v-expansion-panel-content>
       Este corte posee entrecot y solomillo separados por un hueso en forma de ‘T’, lo que justifica su nombre. Proviene de la parte media-baja del lomo de la res. Es de los cortes típicos americanos.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
    </div>
    <div class="col">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-solobuey-entran-a-1559218278.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Entraña">
          <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>Información</v-expansion-panel-header>
      <v-expansion-panel-content>
        Corresponde al diafragma del animal y tiene forma alargada. Es una pieza recubierta con una piel bastante dura, que se quita con facilidad; es mejor cocinarla con ella para que quede más jugosa.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
    </div>
  </div>
</div>
<!-- 6 cortes -->
<div class="container">
  <div class="row">
    <div class="col">
      <b-card no-body class="overflow-hidden" style="max-width: 600px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-solobuey-solomillo-1559218278.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Sirloin">
          <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>Información</v-expansion-panel-header>
      <v-expansion-panel-content>
        Sirloin es la denominación inglesa del solomillo, una pieza que discurre por las vértebras lumbares terminando entre las dos últimas dorsales. Tiene forma alargada y aplastada y se considera la pieza de carne por excelencia por su terneza. De la punta se obtiene el filet mignon, con los filetes gruesos del centro el turnedó y de la cabeza el chateaubriand.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
    </div>
    <div class="col">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carne-kobe-roja-cortes-ternera-esquire-solobuey-entrecot-1559218278.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Entrecot">
          <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>Información</v-expansion-panel-header>
      <v-expansion-panel-content>
        Es un corte de origen francés que proviene de la unión de las palabras ‘entre’ y ‘côte’ (costilla) y, como su nombre indica, se refiere a la carne que queda entre las costillas. Se corta del lomo bajo sin hueso, en la región dorsal de la res.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
    </div>
  </div>
</div>
<!-- 8 cortes -->
<!-- este es el div general no tocar
</div> -->

</div>
</template>


<script>
export default {
  
}
</script>

<script>
export default {
  data () {
      return {
        items: [
          {
            src: require('../assets/images/costillas san luis.jpg'),
          },
          {
            src: require('../assets/images/T-Bone-1024x683.jpeg'),
          },
          {
            src: require('../assets/images/carne-parrilla-1.jpg'),
          },
          {
            src: require('../assets/images/reb eye.jpg'),
          },
        ],
      }
    },
}
</script>
<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>