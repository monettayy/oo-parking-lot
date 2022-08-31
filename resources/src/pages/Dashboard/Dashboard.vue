<template>
<div class="row">
    <div class="col-lg-3 col-12">
        <div class="row">
            <div class="col-lg-12 col-6 mb-5">
                <h4><i class="fa fa-map-marker mr-2"></i>Your Current Location</h4>
                <template v-if="_auth.role_id == 1">
                    <select class="form-control form-select" id="inputGroupSelect01" 
                            v-model="filter.entrance_id" 
                            @change="filterChange">
                        <option value="" disabled>Select Location</option>
                        <option :value="e.id" v-for="e in _entrances">{{ e.name }}</option>
                    </select>
                </template>
                <template v-else>
                    <h3>{{ _auth.location.name }}</h3>
                </template>
                <button class="form-control mt-2"
                        @click="park"
                        :disabled="!filter.entrance_id || stats.available_slots==0">
                    <i class="fa fa-sign-in-alt mr-2"></i>Park
                </button>
            </div> 
            <div class="col-lg-12 col-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="text-muted">Currently Parked</h4>
                        <h1 class="text-right" v-if="stats">{{ stats.currently_parked }}</h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="text-muted">Total Parked Today</h4>
                        <h1 class="text-right" v-if="stats">{{ stats.total_today }}</h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="text-muted">Available Slots</h4>
                        <h1 class="text-right" v-if="stats">{{ stats.available_slots }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-9">
        <div v-if="isLoading" 
            class="d-flex align-items-center justify-content-center" 
            style="height: 50vh;">
            <h1><i class="fa fa-spinner fa-spin"></i></h1>
        </div>
        <div class="row" v-for="s in data.slot_types" v-else>
            <div class="col-12 col-12 d-flex align-items-center justify-content-start">
                <img :src="s.icon" alt="" class="mr-2">
                <h4 class="mt-3">{{ s.description }}</h4>
            </div>
            <div class="col-lg-2 col-md-3 col-4" v-for="d in getSlots(s.id)">
                <div class="card p-2"
                    @click="d.availability.status == 0 ? slotClicked(s, d.availability) : ''">
                        <!-- _call park()"> -->
                    <h5>{{ d.slot_lbl }}</h5>
                    <template v-if="!filter.entrance_id">
                        <h6>{{ d.entrance.name }}</h6>
                    </template>
                    <template v-if="d.availability.status == 0">
                        <template v-if="d.availability.parked && d.availability.parked.vehicle">
                            <img :src="d.availability.parked.vehicle.icon_md" 
                                alt="" 
                                class="img-car">
                        </template>
                        <template v-else>
                            {{ d.availability.status_lbl }}
                        </template>
                    </template>
                    <template v-else>

                    </template>
                </div>
            </div>
            <hr>
        </div>
    </div>

    <ParkModal ref="parkModal" :_vehicle_types="_vehicle_types" @parked="parked" />
    <ParkingDetailsModal ref="parkingDetailsModal" @unparked="unparked" />
    <UnparkModal ref="unparkModal" />
</div>
</template>

<script>
import ParkModal from './ParkModal.vue';
import ParkingDetailsModal from './ParkingDetailsModal.vue';
import UnparkModal from './UnparkModal.vue';

export default {
    props:['_auth', '_entrances', '_vehicle_types'],
    components:{
        ParkModal,
        ParkingDetailsModal,
        UnparkModal,
    },
    data(){
        return{
            isLoading: false,
            filter: {
                entrance_id: '',
            },
            stats: {
                currently_parked: '-',
                total_today: '-',
                available_slots: '-',
            },
            data: {
                slots: [],
                parkings_today: [],
                parkings_parked: [],
                slot_types: [],
            }
        }
    },
    computed:{
    },
    mounted(){
        if(this._auth.role_id != 1 && this._auth.entrance_id){
            this.filter.entrance_id = this._auth.entrance_id;
        }
        this.getDashboardStats();
    },
    methods:{
        unparked(response_data){
            this.filterChange();
            this.$refs.unparkModal.openModal(response_data.vehicle, response_data.parking, response_data.slot_type);
        },
        slotClicked(slot_type, availability){
            var parking = availability['parked'];
            var vehicle = parking['vehicle'];
            this.$refs.parkingDetailsModal.openModal(vehicle, parking, slot_type);
        },
        parked(response_data){
            this.filterChange();
            this.$refs.parkingDetailsModal.openModal(response_data.vehicle, response_data.parking, response_data.slot_type);
        },
        park(){
            if(!this.filter.entrance_id || this.stats.available_slots==0)
                return;
            this.$refs.parkModal.openModal(this.filter.entrance_id);
        },
        getSlots(slot_type){
            var slots = this.data.slots.filter(s => s.slot_type_id == slot_type);
            return slots;
        },
        filterChange(){
            this.getDashboardStats();
        },
        getDashboardStats(){
            this.isLoading = true;
            axios.get('/dashboard-stats', {params: this.filter}).then((response)=>{
                this.isLoading = false;
                if(response.data.status == "OK")
                {
                    this.stats = response.data.stats;
                    this.data = response.data.data;
                }
            }).catch((response)=>{
                this.isLoading = false;
            });
        },
    }
}
</script>

<style scoped>

.card{
    height: 100px;
}
.img-car{
    width: 70px;
}

</style>