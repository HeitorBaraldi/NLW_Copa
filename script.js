let isIgnite = true
function changeCard(event) {
      const card = (event.currentTarget)
      const bg = isIgnite ? 'explorer' : 'ignite'
      isIgnite = !isIgnite
      card.style.background = `url(./assets/bg-${bg}.svg)`
}