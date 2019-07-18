<template>
    <nav>
        <v-toolbar flat app dark height="40" color="primary">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase">Talana</v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="title">Deliboo </span>
            <v-icon right >account_circle</v-icon>
        </v-toolbar>


        <v-navigation-drawer v-model="drawer" app class="primary pa-4">
            <v-list class="mb-2">
                <v-list-title class="white--text">
                    <h1 class="display-1">
                        <span class="font-weight-light">Self</span>
                        <span class="font-weight-medium">Onboarding</span>
                    </h1>
                    <p class="headline ">Remuneraciones</p>
                </v-list-title>
                
                <v-progress-linear
                        color="secondary"
                        height="5"
                        value="25"
                ></v-progress-linear>
                <span class="white--text font-weight-medium subheading">Llevas 25%</span>
            </v-list>
            <v-list>    
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text font-weight-medium  subheading">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>




    <v-timeline dense clipped class="white--text" color="white">
        <v-timeline-item fill-dot class="white--text mb-3" color="orange">
          <template v-slot:icon>
            <span class="font-weight-bold ">1</span>
          </template>
          <h2>Ficha Empresa</h2>
        </v-timeline-item>
  
       
  
        <v-timeline-item class="mb-1" color="grey" icon-color="grey lighten-2" small>
          <v-layout justify-space-between>
            Datos de Empresa
          </v-layout>
        </v-timeline-item>
  
  
        <v-timeline-item class="mb-3" color="grey" small>
          <v-layout justify-space-between>
              Configuraciones de pago
          </v-layout>
        </v-timeline-item>
      </v-timeline>




        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
            links: [
                { icon: 'filter_vintage', text: 'Bienvenida', route: '/'},
                { icon: 'assignment', text: 'Ficha Empresa', route: '/ficha-empresa'},
                { icon: 'assignment_ind', text: 'Carga de empleados', route: '/carga-empleados'},
                { icon: 'dashboard', text: 'Haberes y descuentos', route: '/haberes-descuentos'},
                { icon: 'playlist_add_check', text: 'Resumen', route: '/resumen'}
            ]
        }
    }
}
</script>