<template>
    <div class="Menu">
        <v-menu bottom left>
            <template v-slot:activator="{ on }">
                <v-btn
                        dark
                        icon
                        v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                >
                    <v-list-item-title><router-link :to="item.route">{{ item.title }}</router-link></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        props: {
        },
        data: (vm)=>({
            items: [
                {
                    route: '/',
                    title: vm.$t('home')
                },
                {
                    route: '/contact',
                    title: vm.$t('contact')
                },
                {
                    route: '/rgpc',
                    title: vm.$t('policyrules')
                },
            ]
        })
    };
</script>
