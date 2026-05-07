<script setup>
import { ref } from 'vue'


import TauxErreur from './kpi/TauxErreur.vue'
import TauxDesabonnement from './kpi/TauxDesabonnement.vue'
import TauxDeConversion from './kpi/TauxDeConversion.vue'
import RevenuMoyenParUser from './kpi/RevenuMoyenParUser.vue';

</script>

<template>
  <div>
    <div class="px-10 py-8">
      <h3 class="font-bold text-2xl py-5">Tableau de bord</h3>
      <div class="flex gap-5"> 
        <TauxDesabonnement />
        <TauxDeConversion />
        <RevenuMoyenParUser />
      </div>

    </div>
  </div>
</template>
