<script setup>
import BlocKpi from '../ui/BlocKpi.vue'
import { useKpiStore } from '@/stores/kpi'

const kpi = useKpiStore()
</script>

<template>
  <BlocKpi
    title="Revenu moyen par utilisateur"
    :value="kpi.revenuMoyenParUser"
  />
</template>
