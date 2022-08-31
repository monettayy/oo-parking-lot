<template>
    <div class="modal fade" id="parkingDetailsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Parking Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row" v-if="vehicle">
                    <div class="col-12 d-flex align-items-center justify-content-start">
                        <img :src="vehicle.icon_md" alt="" class="mr-2" style="max-height: 60px;">
                        <h2 class="mb-3">Vehicle Information</h2>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Plate Number</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2">{{ vehicle.plate_no }}</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Customer Name</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2">{{ vehicle.customer_name }}</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Vehicle Type</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1">{{ vehicle.vehicle_type_lbl }}</h3>
                        <h5 class="mb-2 text-muted">{{ vehicle.vehicle_type_desc }}</h5>
                    </div>
                </div>
                <div class="row mt-2" v-if="parking">
                    <div class="col-12 d-flex align-items-center justify-content-start">
                        <img :src="slot_type.icon_md" alt="" class="mr-2" 
                            style="max-height: 60px;"
                            v-if="slot_type">
                        <h2 class="mb-2">Parking Information</h2>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Entrance</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2">{{ parking.entrance_lbl }}</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Parking Space</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1">{{ parking.slot_lbl }}</h3>
                        <h5 class="mb-2 text-muted">{{ slot_type.description }}</h5>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Charge Per Hour</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2">{{ slot_type.charge_per_hour | parseMoney }}</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Entry</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2">{{ parking.entry | parseDate("MM/DD/YYYY hh:mm a") }}</h3>
                    </div>
                    <hr>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Sub Total Days</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2 text-right">{{ parking.sub_total.total_days }}</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Sub Total Hours</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2 text-right">{{ parking.sub_total.total_hours }}</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Sub Total Minutes</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2 text-right">{{ parking.sub_total.total_minutes }}</h3>
                    </div>
                    <div class="col-lg-6 mt-2 mb-2">
                        <h3 class="mb-1 text-muted">Total Time</h3>
                    </div>
                    <div class="col-lg-6 mt-2 mb-2">
                        <h3 class="mb-2 text-right">
                            <span v-if="parking.sub_total.total_days" class="ml-2">
                                {{ parking.sub_total.total_days }} days
                            </span>
                            <span class="ml-2">
                                {{ parking.sub_total.hours }} hrs
                            </span>
                            <span class="ml-2">
                                {{ parking.sub_total.minutes }} mins
                            </span>
                        </h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Sub Total Amount</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2 text-right">{{ parking.sub_total.computed_amount | parseMoney }}</h3>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" @click="unpark">
                    <i class="fa fa-sign-out-alt mr-2"></i>Unpark
                </button>
            </div>
        </div>
    </div>
    </div>
    </template>
    
    <script>
    export default {
        props:['_auth'],
        data(){
            return{
                vehicle: '',
                parking: '',
                slot_type: '',
            }
        },
        filters:{
            parseDate(value, format="MM/DD/YYYY"){
                return moment(value).format(format)
            },
            parseMoney(value){
                return '₱ ' + parseFloat(value).toFixed(2)
            }
        },
        mounted(){
    
        },
        methods:{
            unpark(){
                this.$confirm('',
                'Are you sure you want to unpark this parking space for '+
                this.vehicle.customer_name+'?','question').then(()=>{
                    this.$loader.show();
                    let payload = {
                        'id': this.parking.id
                    };
                    axios.post('/unpark', payload).then((response)=>{
                        this.$loader.hide();
                        console.log(response.data)
                        if(response.data.status == "OK"){
                            this.$alert('','Successfully unparked','success').then(()=>{
                                this.$emit('unparked', response.data);
                                $("#parkingDetailsModal").modal('hide');
                            });
                        }
                    }).catch(()=>{
                        this.$loader.hide();
                        this.$alert('','Something went wrong. Please try again later','error');
                    });
                });
            },
            openModal(vehicle, parking, slot_type){
                this.vehicle = {...vehicle};
                this.parking = {...parking};
                this.slot_type = {...slot_type};
                console.log(this.vehicle);
                console.log(this.parking);
                console.log(this.slot_type);
                $("#parkingDetailsModal").modal('show');
            },
        }
    }
    </script>
    
    <style>
    
    </style>