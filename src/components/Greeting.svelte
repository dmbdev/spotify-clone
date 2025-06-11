<script lang="ts">
    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    let greetig = ""
    
    if (currentHour < 12) {
        greetig = "Buenos días"
    } else if (currentHour < 18) {
        greetig = "Buenas tardes"
    } else {
        greetig = "Buenas noches"
    }
</script>

<h1 class=" text-3xl font-bold">{greetig}</h1>