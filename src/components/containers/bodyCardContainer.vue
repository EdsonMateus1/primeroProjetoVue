<template>
<div class="corpo flex-container">
    <card-list />
</div>
</template>

<script>
import List from "../ListCard/Index";
export default {
    name: "card",
    components: {
        "card-list": List
    }
};
</script>

<style>
.corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
}

@media screen and (min-width: 1024px) {
    .flex-container {
        margin: 0 auto;
    }
}
</style>
