<template>
    <div class="resumen">
        <v-btn fab flat to="/haberes-descuentos">
            <v-icon>arrow_back</v-icon>
        </v-btn>   
        <h1 class="display-1 font-weight-medium talana-h1 text-md-center">Resumen del proceso</h1>

        <v-container>
            <p class="text-md-center subheading">A continuación se mostramos el estado de la planilla de empleados. Éstos deben contar con su información completa para finalizar el Onboarding.</p>
             <v-alert :value="true" type="warning">
                <p class="subheading"><strong>Hay empleados con datos incompletos</strong> 
                <br>
                Haz clic en el nombre del usuario para completar su ficha</p>
            </v-alert>
        </v-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>