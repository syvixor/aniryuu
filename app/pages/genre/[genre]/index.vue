<script lang="ts" setup>
const { genre } = useRoute().params
navigateTo(`/genre/${genre}/1`);
</script>