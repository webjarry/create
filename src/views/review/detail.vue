<template>
    <div class="details-views">
        <div class="details-header">

        </div>
        <div class="details-main">

        </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data () {
            let details_id = this.$router.currentRoute.query.id
            return {
                id: Number(details_id)
            }
        },
        mounted () {
            window.console.log(this.id)
        }
    }
</script>
