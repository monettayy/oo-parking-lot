<template>
    <div class="modal fade" id="unparkModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Calculation Fees</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row" v-if="vehicle">
                    <div class="col-12 d-flex align-items-center justify-content-start">
                        <!-- <img :src="vehicle.icon_md" alt="" class="mr-2" style="max-height: 60px;"> -->
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
                        <h3 class="mb-2">{{ vehicle.vehicle_type_lbl }}</h3>
                        <!-- <h5 class="mb-2 text-muted">{{ vehicle.vehicle_type_desc }}</h5> -->
                    </div>
                </div>
                <div class="row mt-2" v-if="parking">
                    <div class="col-12 d-flex align-items-center justify-content-start">
                        <!-- <img :src="slot_type.icon_md" alt="" class="mr-2" 
                            style="max-height: 60px;"
                            v-if="slot_type"> -->
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
                        <h3 class="mb-2">{{ parking.slot_lbl }}</h3>
                        <!-- <h5 class="mb-2 text-muted">{{ slot_type.description }}</h5> -->
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
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Exit</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2">{{ parking.exit | parseDate("MM/DD/YYYY hh:mm a") }}</h3>
                    </div>
                </div>
                <hr>
                <div class="row" v-if="parking">
                    <div class="col-12 d-flex align-items-center justify-content-start">
                        <h2 class="mb-2">Fees Information</h2>
                    </div>
                    <hr>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Total Days</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2 text-right">{{ parking.sub_total.total_days }}</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Total Hours</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2 text-right">{{ parking.sub_total.total_hours }}</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-1 text-muted">Total Minutes</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2 text-right">{{ parking.sub_total.total_minutes }}</h3>
                    </div>
                    <div class="col-lg-6 mt-2 mb-2">
                        <h3 class="mb-1 text-muted">Total Time</h3>
                    </div>
                    <div class="col-lg-6 mt-2 mb-2">
                        <h3 class="mb-2 text-right">
                            <span v-if="parking.total_days" class="ml-2">
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
                        <h3 class="mb-1 text-muted">Total Amount</h3>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-2 text-right">{{ parking.computed_amount | parseMoney }}</h3>
                    </div>
                </div>
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
            openModal(vehicle, parking, slot_type){
                this.vehicle = {...vehicle};
                this.parking = {...parking};
                this.slot_type = {...slot_type};
                $("#unparkModal").modal('show');
            },
        }
    }
    </script>
    
    <style>
    
    </style>