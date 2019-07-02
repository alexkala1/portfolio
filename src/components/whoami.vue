<template >
<v-container fluid>
    <v-layout pa-3 ma-3>
        <v-flex xs6>
            <p class="subheading mt-5 pt-5">
                Things I have experience with:
                <ul class="ma-1">
                    <li v-for="languages in this.languages" :key="languages.name">
                       
                        <h1 class="subheading">
                            <v-icon>
                                {{languages.icon}}
                            </v-icon>
                            {{languages.name}}
                        </h1>
                    </li>
                </ul>
            </p>
        </v-flex>
        <v-flex xs6 offset-xs6>
            <v-btn round light color="yellow" uppercase> 
                <a href="../assets/Computer Networks IInew.pdf" target="_blank">
                 Download cv
                </a>
                <v-icon right>
                    fas fa-file-alt
                </v-icon> 
            </v-btn>
        </v-flex>
    </v-layout>
    <v-flex xs6>
            <p class="pa-5 ma-5">

Small text that says where I worked and how i got my exp
            </p>
    </v-flex>
</v-container>
        <!-- <h2>I am a potato farmer from canada</h2>
        <h2>Im 69 years old</h2> -->
</template>
<script>
export default {
    data: () => ({

            languages:[
        {
            name: 'HTML',
            icon: 'fab fa-html5'  
        },
        {
            name: 'CSS',
            icon: 'fab fa-css3'  
        },
        {
            name: 'JavaScript',
            icon: 'fab fa-js'  
        },
        {
            name: 'VueJS',
            icon: 'fab fa-vuejs'  
        },
        {
            name: 'AngularJS',
            icon: 'fab fa-angular'  
        }
            ]
        })
}
</script>
