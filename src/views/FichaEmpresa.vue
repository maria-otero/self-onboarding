<template>
    <div class="ficha-empresa">
        <v-btn fab flat to="/">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <h2 class="talana-h3 text-md-center">Ficha de Empresa</h2>
        <h1 class="display-1 talana-h1 text-md-center">Datos de empresa</h1>
      
        <v-container>
            <v-expansion-panel v-model="panel" expand>
               <v-expansion-panel-content
                  v-for="(razonSocial, i) in razonesSociales"
                  :key="i"
                  >
                  <template v-slot:header>
                     <div>
                        <span class="headline">Razon Social {{i + 1}}: {{razonSocial.nombre}}</span>
                        <br>
                        <span class="subheadline">{{razonSocial.rut}}</span>
                     </div>
                  </template>

                  <!-- RS Info Básica -->
                  <v-card>
                     <v-container grid-list-lg >
                        <h3>{{ RSInfoBasica.titulo }}</h3>
                        <v-layout row wrap>
                              <v-flex xs12 sm6 md4 class="pa-4">
                                 <v-text-field
                                 :value="RSInfoBasica.rut"
                                 label="RUT"
                                 readonly
                                 ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm6 md4 class="pa-4">
                                 <v-text-field
                                 :value="RSInfoBasica.nombre"
                                 label="Nombre Razón Social"
                                 readonly
                                 >
                                 </v-text-field>
                              </v-flex>
                              <v-flex xs12 sm6 md4 class="pa-4">
                                 <v-text-field
                                    value="Marlyboo"
                                    label="Giro"
                                    readonly
                                    >
                                 </v-text-field>
                              </v-flex>
                        </v-layout>
                     </v-container>
                  </v-card>
                  <!-- RS Info Básica fin-->

                  <!-- RS Representante Legal-->
                  <v-card>
                     <v-container grid-list-lg >
                        <h3>{{ RSRepresentLegal.titulo }}</h3>
                        <v-layout row wrap>
                           <v-flex xs12 sm6 md4 class="pa-4">
                              <v-text-field
                              :value="RSRepresentLegal.rut"
                              label="RUT"
                              readonly
                              ></v-text-field>
                           </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                           <v-flex xs12 sm6 md4 class="pa-4">
                              <v-text-field
                              :value="RSRepresentLegal.nombre"
                              label="Nombre"
                              readonly
                              >
                              </v-text-field>
                           </v-flex>
                           <v-flex xs12 sm6 md4 class="pa-4">
                              <v-text-field
                              :value="RSRepresentLegal.apellido1"
                              label="Apellido 1"
                              readonly
                              >
                              </v-text-field>
                           </v-flex>
                           <v-flex xs12 sm6 md4 class="pa-4">
                              <v-text-field
                              :value="RSRepresentLegal.apellido2"
                              label="Apellido 2"
                              readonly
                              >
                              </v-text-field>
                           </v-flex>
                        </v-layout>
                     </v-container>
                  </v-card>  
                  <!-- RS Representante Legal fin -->  

                  <!-- RS Contacto-->
                  <v-card>
                     <v-container grid-list-lg>
                        <h3>{{ RSContacto.titulo }}</h3>
                        <v-layout row wrap>
                              <v-flex xs12 sm6 md4 class="pa-4">
                                 <v-text-field
                                 :value="RSContacto.telefono"
                                 label="Teléfono"
                                 readonly
                                 ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm6 md4 class="pa-4">
                                 <v-text-field
                                 :value="RSContacto.email"
                                 label="Email"
                                 readonly
                                 >
                                 </v-text-field>
                              </v-flex>
                              <v-flex xs12 sm6 md4 class="pa-4">
                                 <v-text-field
                                 :value="RSContacto.web"
                                 label="Sitio Web"
                                 readonly
                                 >
                                 </v-text-field>
                              </v-flex>
                        </v-layout>
                     </v-container>
                  </v-card>  
                  <!-- RS Contacto fin -->                   

                  <!-- RS Casa Matriz-->
                  <v-card>
                     <v-container grid-list-lg>
                        <h3>{{ RSCasaMatriz.titulo }}</h3>
                        <v-layout row wrap>
                           <v-flex xs12 sm6 md4 class="pa-4">
                              <v-text-field
                              :value="RSCasaMatriz.calle"
                              label="RUT"
                              readonly
                              ></v-text-field>
                           </v-flex>
                           <v-flex xs12 sm6 md4 class="pa-4">
                              <v-text-field
                              :value="RSCasaMatriz.calleNumero"
                              label="Nombre Razón Social"
                              readonly
                              >
                              </v-text-field>
                           </v-flex>
                           <v-flex xs12 sm6 md4 class="pa-4">
                              <v-text-field
                              :value="RSCasaMatriz.dptoNumero"
                              label="Giro"
                              readonly
                              >
                              </v-text-field>
                           </v-flex>
                           <v-flex xs12 sm6 md4 class="pa-4">
                              <v-text-field
                              :value="RSCasaMatriz.comuna"
                              label="Giro"
                              readonly
                              >
                              </v-text-field>
                           </v-flex>
                           <v-flex xs12 sm6 md4 class="pa-4">
                              <v-text-field
                              :value="RSCasaMatriz.region"
                              label="Giro"
                              readonly
                              >
                              </v-text-field>
                           </v-flex>                                                      
                        </v-layout>
                     </v-container>
                  </v-card>  
                  <!-- RS Casa Matriz fin -->                                  
               </v-expansion-panel-content>
            </v-expansion-panel>

            <v-layout row>
               <v-flex>
                  <v-btn flat color="primary" @click="agregarRazonSocial">
                     <v-icon left>add_circle</v-icon>
                     <span class="text-capitalize">Agregar otra razón social</span>
                  </v-btn>
               </v-flex>    
            </v-layout>
            <v-layout align-end justify-end row fill-height>
               <v-flex>
                  <v-btn color="primary" to="/ficha-empresa-2">Siguiente</v-btn>
               </v-flex>       
            </v-layout> 
         </v-container>
    </div>
</template>

<script>
export default {
  data() {
      return {
         drawer: true,
         razonesSociales: [
            {  
               nombre: 'Marlyboo', 
               rut: '00.000.000-0'
            }
         ],
         RSInfoBasica: { 
            titulo: 'Información básica', 
            rut: '00.000.000-0', 
            nombre: 'Mainboo SPA', 
            giro: 'Confección y Distribución de Alimentos'
         },
         RSRepresentLegal: { 
            titulo: 'Representante Legal', 
            rut: '16.034.000-k', 
            nombre: 'Antonia', 
            apellido1: 'Fuentes', 
            apellido2: 'Perez'
         },
         RSContacto: { 
            titulo: 'Contacto', 
            telefono: '+562 2 2454 6000', 
            email: 'contacto@deliboo.cl', 
            web: 'www.deliboo.cl',
         },
         RSCasaMatriz: { 
            titulo: 'Casa Matriz', 
            calle: 'Avenida Emilia Tellez', 
            calleNumero: '4501', 
            dptoNumero: '52', 
            comuna: 'Ñuñoa',
            region: 'Región Metropolitana'
         },
         RSCajaCompensacion: { 
            titulo: 'Representante Legal', 
            rut: '16.034.000-k', 
            nombre: 'Antonia', 
            apellido1: 'Fuentes', 
            apellido2: 'Perez'
         },
         
      }
   },
   methods: {
      agregarRazonSocial() {
         this.razonesSociales.push({
            nombre: 'Nombre RS',
            rut: '00.000.000-0'
         })
      }
  } 
}
</script>