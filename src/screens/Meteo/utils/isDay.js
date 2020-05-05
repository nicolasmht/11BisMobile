function isDay() {
    const day = new Date().getDay();
    if (day === 1) return 'Lundi'
    if (day === 2) return 'Mardi'
    if (day === 3) return 'Mercredi'
    if (day === 4) return 'Jeudi'
    if (day === 5) return 'Vendredi'
    if (day === 6) return 'Samedi'
    if (day === 7) return 'Dimanche'
}

export default isDay
