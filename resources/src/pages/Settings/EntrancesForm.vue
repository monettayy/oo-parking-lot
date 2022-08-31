<template>
    <div class="card">
        <div class="card-header bg-primary text-white">
            <h2 class="text-white" v-if="_entrance">Edit Entrance</h2>
            <h2 class="text-white" v-else>New Entrance</h2>
        </div>
    
        <div class="card-body px-5">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="mb-2">Entrance Information</h2>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" v-model="entrance.name" :class="errors && errors.name?'is-invalid':''">
                        <div class="invalid-feedback" v-if="errors && errors.name">
                            {{ errors.name[0] }}
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="">Description</label>
                        <input type="text" class="form-control" v-model="entrance.description" :class="errors && errors.description?'is-invalid':''">
                        <div class="invalid-feedback" v-if="errors && errors.description">
                            {{ errors.description[0] }}
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="row justify-content-end">
                <div class="col-12 text-right">
                    <hr>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <a class="btn btn-block mb-2" href="/entrances">
                        Cancel
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <button class="btn btn-block btn-primary" @click="createItem" v-if="!_entrance">
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
    props:['_auth', '_entrance'],
    data(){
        return{
            entrance:{
                name:'',
                description:'',
            },
            errors:[],
        }
    },
    computed:{
    },
    created(){
    },
    mounted(){
        if(this._entrance){
            this.entrance = {...this._entrance};
        }
    },
    methods:{
        createItem(){
            this.$confirm('','Are you sure you want to create entrance?','question').then(()=>{
                this.$loader.show();
                this.errors = [];
                axios.post('/entrance', this.entrance).then((response)=>{
                    this.$loader.hide();
                    if(response.data.status == "OK"){
                        this.$alert('','Entrance was successfully created','success').then(()=>{
                            window.location.href="/entrances";
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
            this.$confirm('','Are you sure you want to update entrance?','question').then(()=>{
                this.$loader.show();
                this.errors = [];
                var form = this.entrance;
                form.change_password = this.password;
                axios.patch('/entrance/'+this.entrance.id,form).then((response)=>{
                    this.$loader.hide();
                    if(response.data.status == "OK"){
                        this.$alert('','Entrance was successfully updated','success').then(()=>{
                            window.location.href="/entrances";
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