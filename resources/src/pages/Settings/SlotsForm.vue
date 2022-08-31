<template>
    <div class="card">
        <div class="card-header bg-primary text-white">
            <h2 class="text-white" v-if="_slot">Edit Slot</h2>
            <h2 class="text-white" v-else>New Slot</h2>
        </div>
    
        <div class="card-body px-5">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="mb-2">Slot Information</h2>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="form-group">
                        <label for="">Entrance</label>
                        <select class="form-control" v-model="slot.entrance_id" :class="errors && errors.entrance_id?'is-invalid':''">
                            <option :value="r.id" v-for="r in _entrances">{{ r.name }}</option>
                        </select>
                        <div class="invalid-feedback" v-if="errors && errors.entrance_id">
                            The Entrance field is required.
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="form-group">
                        <label for="">Slot Type</label>
                        <select class="form-control" v-model="slot.slot_type_id" :class="errors && errors.slot_type_id?'is-invalid':''">
                            <option :value="r.id" v-for="r in _slot_types">{{ r.name }}</option>
                        </select>
                        <div class="invalid-feedback" v-if="errors && errors.slot_type_id">
                            The Slot Type field is required.
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="form-group">
                        <label for="">Distance</label>
                        <input type="number" class="form-control" v-model="slot.distance" :class="errors && errors.distance?'is-invalid':''">
                        <div class="invalid-feedback" v-if="errors && errors.distance">
                            {{ errors.distance[0] }}
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="row justify-content-end">
                <div class="col-12 text-right">
                    <hr>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <a class="btn btn-block mb-2" href="/slots">
                        Cancel
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <button class="btn btn-block btn-primary" @click="createItem" v-if="!_slot">
                        Save
                    </button>
                    <button class="btn btn-block btn-primary" @click="updateItem" v-else>
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['_auth', '_slot_types', '_entrances', '_slot'],
    data(){
        return{
            slot:{
                entrance_id:'',
                slot_type_id:'',
                distance:'',
            },
            errors:[],
        }
    },
    computed:{
    },
    created(){
    },
    mounted(){
        if(this._slot){
            this.slot = {...this._slot};
            console.log(this.slot);
        }
    },
    methods:{
        createItem(){
            this.$confirm('','Are you sure you want to create slot?','question').then(()=>{
                this.$loader.show();
                this.errors = [];
                axios.post('/slot', this.slot).then((response)=>{
                    this.$loader.hide();
                    if(response.data.status == "OK"){
                        this.$alert('','Slot was successfully created','success').then(()=>{
                            window.location.href="/slots";
                        });
                    }else{
                        this.$alert('',response.data.message,'error');
                        this.errors = response.data.errors;
                    }
                }).catch(()=>{
                    this.$loader.hide();
                    this.$alert('','Something went wrong','error');
                })
            })
        },
        updateItem(){
            this.$confirm('','Are you sure you want to update slot?','question').then(()=>{
                this.$loader.show();
                this.errors = [];
                var form = this.slot;
                form.change_password = this.password;
                axios.patch('/slot/'+this.slot.id,form).then((response)=>{
                    this.$loader.hide();
                    if(response.data.status == "OK"){
                        this.$alert('','Slot was successfully updated','success').then(()=>{
                            window.location.href="/slots";
                        });
                    }else{
                        this.$alert('',response.data.message,'error');
                        this.errors = response.data.errors;
                    }
                }).catch(()=>{
                    this.$loader.hide();
                    this.$alert('','Something went wrong','error');
                })
            })

        }
    }
}
</script>

<style>

</style>