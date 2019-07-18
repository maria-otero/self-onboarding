
<template>
    <div class="ficha-empresa-2">
        <v-btn fab flat to="/ficha-empresa">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <h2 class="talana-h3 text-md-center">Ficha de Empresa</h2>
        <h1 class="display-1 talana-h1 text-md-center">Configuración de Pago</h1>
      
        <v-container>
  

        <v-expansion-panel v-model="panel" expand>
            <v-expansion-panel-content
              v-for="(razonSocial, i) in razonesSociales"
              :key="i"
            >
            <template v-slot:header>
              <div class="grey--text text--darken-2">
                <h2>Razon Social {{i + 1}}: {{razonSocial.nombre}}</h2>
              <p>{{razonSocial.descripcion}}</p>
              </div>
              
            </template>

            <v-card>
              <v-card-text class="grey lighten-3"></v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-layout align-content-end>
          <v-flex>
            <v-btn flat color="primary" @click="agregarRazonSocial">
              <span>Agregar</span>
              <v-icon right>add_circle</v-icon>
            </v-btn>
          </v-flex>
          
        </v-layout>

        


        
          
      </v-container>
    </div>
</template>

<script>
export default {
  

}
</script>