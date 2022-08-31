<template>
    <div class="modal fade" id="parkModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Park</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <h4 class="mb-1">Plate Number</h4>
                            <input class="form-control" 
                                    v-model="vehicle.plate_no" />
                        </div>
                        <div class="form-group">
                            <h4 class="mb-1">Customer Name</h4>
                            <input class="form-control" 
                                    v-model="vehicle.customer_name" />
                        </div>
                        <div class="form-group">
                            <h4 class="mb-1">Vehicle Type</h4>
                            <select class="form-control form-select"
                                    v-model="vehicle.vehicle_type_id" >
                                <option value="" disabled>Select Vehicle Type</option>
                                <option :value="e.id" v-for="e in _vehicle_types">{{ e.description }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" @click="submit">Confirm Parking</button>
            </div>
        </div>
    </div>
    </div>
    </template>
    
    <script>
    export default {
        props:['_auth', '_vehicle_types'],
        data(){
            return{
                vehicle: {
                    'plate_no': '',
                    'customer_name': '',
                    'vehicle_type_id': '',
                },
                entrance_id: '',
            }
        },
        filters:{
            parseDate(value, format="MM/DD/YYYY"){
                return moment(value).format(format)
            }
        },
        mounted(){
    
        },
        methods:{
            openModal(entrance_id){
                this.vehicle = {
                    'plate_no': '',
                    'customer_name': '',
                    'vehicle_type_id': '',
                };
                this.entrance_id = entrance_id;
                $("#parkModal").modal('show');
            },
            submit(){
                this.$confirm('','Are you sure you want to confirm parking for '+this.vehicle.customer_name+'?','question')
                    .then(()=>{
                    this.$loader.show();
    
                    let payload = {...this.vehicle};
                    payload.entrance_id = this.entrance_id
                    axios.post('/park', payload).then((response)=>{
                        this.$loader.hide();
                        if(response.data.status == "OK")
                        {
                            this.$alert('','Parking was confirmed for ' + this.vehicle.customer_name,'success').then(()=>{
                                this.$emit('parked', response.data);
                                $("#parkModal").modal('hide');
                            });
                        }else if(response.data.status == "RETURNED")
                        {
                            this.$alert('','Resume parking for ' + this.vehicle.customer_name,'success').then(()=>{
                                this.$emit('parked', response.data);
                                $("#parkModal").modal('hide');
                            });
                        }else if(response.data.status == "NO AVAILABLE")
                        {
                            this.$alert('',response.data.message,'error');
                        }else if(response.data.status == "Error")
                        {
                            this.$alert('',response.data.message,'error');
                        }
                    }).catch(()=>{
                        this.$loader.hide();
                        this.$alert('','Something went wrong. Please try again later','error');
                    });
                });
            }
        }
    }
    </script>
    
    <style>
    
    </style>