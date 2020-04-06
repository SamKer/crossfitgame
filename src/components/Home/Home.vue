<template>
    <div class="Home">
        <div v-if="session === true">{{$t('welcome')}}</div>
        <Auth v-else/>
    </div>
</template>

<script>
    import Auth from "../Auth/Auth";
    export default {
        components: {Auth},
        data: (vm) => ({
            session: vm.$root.$emit('app:getsession')
        }),
        mounted() {
            this.$root.$on('app:session', this.setSession)
        },
        methods: {
            setSession(session) {
                console.log('test', session);
                this.session = session;
            }
        }
    };
</script>
