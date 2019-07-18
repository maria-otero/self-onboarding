<template>
  <div class="bienvenida">
    <h1 class="display-1 font-weight-medium talana-h1 text-md-center" >Deliboo, bienvenido a Talana</h1>

    <v-container class="my-5 text-md-center">
      <p class="headline">Comienza a gestionar la información de todas las personas de tu empresa, y paga las remuneraciones de forma simple. Partiremos por el <span class="font-weight-bold">ingreso de datos de tu empresa.</span></p>

      <div class="my-5">
        <v-btn color="primary" to="/ficha-empresa">
          <span>¡comenzar!</span>
          <v-icon right>flight_takeoff</v-icon>
        </v-btn>
        <!-- <v-btn outline color="primary">secundario</v-btn>
        <v-btn flat color="primary">terciario</v-btn> -->
      </div>
      

    </v-container>
    
    
  </div>
</template>

<script>

export default {

}
</script>
