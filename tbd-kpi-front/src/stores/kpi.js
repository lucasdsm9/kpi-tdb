import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useKpiStore = defineStore('kpi', () => {

  // connexrion api : 

  const commandes = ref(201)
  const commandesPrecedentes = ref(186)

  const abonnes = ref(1540)
  const abonnesPrecedents = ref(1572)

  const erreurs = ref(5)
  const requetes = ref(1000)
  const erreursPrecedentes = ref(8)

  const revenuTotal = ref(1000000)


  // fonction :
  
  const revenuMoyenParUser = computed(() => (revenuTotal.value / abonnes.value).toFixed(2) + '€')

  const tauxDeConversion = computed(() => ((commandes.value / 1000) * 100).toFixed(1) + '%')
  const variationConversion = computed(() => {
    const diff = commandes.value - commandesPrecedentes.value
    return { valeur: Math.abs(diff), positif: diff >= 0, trend: diff >= 0 ? 'up' : 'down' }
  })

  const tauxDesabonnement = computed(() => (((abonnesPrecedents.value - abonnes.value) / abonnesPrecedents.value) * 100).toFixed(1) + '%')
  const variationDesabonnement = computed(() => {
    const diff = abonnes.value - abonnesPrecedents.value
    return { valeur: Math.abs(diff / abonnesPrecedents.value * 100).toFixed(1), positif: diff >= 0, trend: diff >= 0 ? 'up' : 'down' }
  })

  const tauxErreur = computed(() => ((erreurs.value / requetes.value) * 100).toFixed(1) + '%')
  const variationErreur = computed(() => {
    const diff = erreurs.value - erreursPrecedentes.value
    return { valeur: Math.abs(diff / erreursPrecedentes.value * 100).toFixed(1), positif: diff <= 0, trend: diff >= 0 ? 'up' : 'down' }
  })



  return {
    tauxDeConversion, variationConversion,
    tauxDesabonnement, variationDesabonnement,
    tauxErreur, variationErreur,
    revenuMoyenParUser,
  }
})
