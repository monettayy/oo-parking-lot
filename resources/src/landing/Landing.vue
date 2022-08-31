<template>
<div id="landing-page" >
    <div class="app-landing" >
        <Navbar :_auth="_auth" />
    </div>
    <div class="bg-primary mb-4 text-white " >
        <div class="landing-steps ">
            <div class="container-fluid">
                <div class="circle"></div>
                <div class="px-3 absolute">
                    <h3 class="text-white"
                        style="font-size: 4.5rem; font-weight: bolder;">
                        OBJECT ORIENTED MALL
                    </h3>
                    <h1 class="text-white"
                        style="font-size: 1.75rem;">
                        PARKING ALLOCATION SYSTEM
                    </h1>
                </div>
                <div class="mt-4 absolute row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-10">
                        <img src="/icons/car1.png" alt="" class="car">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
    props:['_auth'],
    components:{
        Navbar,
        Footer
    },
    filters:{
        parseDate(value, format='MM/DD/YYYY'){
            return moment(value).format(format)
        },
    },
    data(){
        return{
            isLoading: false,
        }
    },
    created(){
    },
    methods:{
    },

}
</script>

<style scoped>
.step-card{
    -webkit-line-clamp: 12;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    white-space: normal;
    color: #fff;
    font-weight: 600;
}

#landing-page .landing-card {
    min-height: 300px;
}

#landing-page .landing-card .card-icon img{
    width: 50px;
}

.temperature-text{
    font-weight: bold;
    font-size: 4rem !important;
    line-height: 1 !important;
}

#landing-page .landing-card{
    border: 2px solid rgba(0, 0, 0, 0.1);
}

.container-fluid{
    min-height: 50vh;
}


.circle { 
    width: 100vh;
    height: 100vh; 
    -moz-border-radius: 100vh; 
    -webkit-border-radius: 100vh; 
    border-radius: 100vh;
    background: #92CF93;
    position: absolute;
    right: -15vh;
    top: -15vh;
}

.absolute{
    position: absolute;
}
.app-landing{
    z-index: 999999;
    position: relative;
}
.car{
    height: 65vh;
}
</style>