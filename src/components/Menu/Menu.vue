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
                    <v-list-item-title><router-link :to="item.route">{{ $t(item.title) }}</router-link></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        props: {
        },
        data: ()=>({
            items: [
                {
                    route: '/',
                    title: 'home'
                },
                {
                    route: '/friends',
                    title: 'friends'
                },
                {
                    route: '/profil',
                    title: 'profil'
                },
                {
                    route: '/contact',
                    title: 'contact'
                },
                {
                    route: '/rgpc',
                    title: 'policyrules'
                },
            ]
        })
    };
</script>
