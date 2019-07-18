<template>
    <div class="carga-empleados">
        <v-btn fab flat to="/ficha-empresa-2">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <h1 class="display-1 font-weight-medium talana-h1 text-md-center">Carga de empleados</h1>

        <v-container class="text-md-center">
            <p class="headline">¡Felicitaciones! Ya tienes las ficha de tu empresa. Ahora es hora de cargar la ficha de tus trabajadores. Lo puedes hacer de manera masiva o por persona.</p>

            <div class="my-5">
                <v-btn color="primary">
                    <span>Masivo</span>
                    <v-icon right>group_add</v-icon>
                </v-btn>
                <v-btn color="primary">
                    <span>Por persona</span>
                    <v-icon right>person_add</v-icon>
                </v-btn>
            </div>

        </v-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>
