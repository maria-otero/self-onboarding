import Vue from 'vue'
import Router from 'vue-router'
import Bienvenida from './views/Bienvenida.vue'
import FichaEmpresa from './views/FichaEmpresa.vue'
import FichaEmpresa2 from './views/FichaEmpresa2.vue'
import CargaEmpleados from './views/CargaEmpleados.vue'
import HaberesDescuentos from './views/HaberesDescuentos.vue'
import Resumen from './views/Resumen.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'bienvenida',
      component: Bienvenida
    },
    {
      path: '/ficha-empresa',
      name: 'ficha-empresa',
      component: FichaEmpresa
    },
    {
      path: '/ficha-empresa-2',
      name: 'ficha-empresa-2',
      component: FichaEmpresa2
    },
    {
      path: '/carga-empleados',
      name: 'carga-empleados',
      component: CargaEmpleados
    },
    {
      path:'/haberes-descuentos',
      name:'haberes-descuentos',
      component: HaberesDescuentos
    },
    {
      path:'/resumen',
      name: 'resumen',
      component: Resumen
    }
  ]
})
