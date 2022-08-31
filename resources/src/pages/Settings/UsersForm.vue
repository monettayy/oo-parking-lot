<template>
    <div class="card">
        <div class="card-header bg-primary text-white">
            <h2 class="text-white" v-if="_user">Edit User</h2>
            <h2 class="text-white" v-else>New User</h2>
        </div>
    
        <div class="card-body px-5">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="mb-2">User Information</h2>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" v-model="user.name" :class="errors && errors.name?'is-invalid':''">
                        <div class="invalid-feedback" v-if="errors && errors.name">
                            {{ errors.name[0] }}
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="mb-2">Account Information</h2>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="form-group">
                        <label for="">Username</label>
                        <input type="text" class="form-control" v-model="user.username" :class="errors && errors.username?'is-invalid':''">
                        <div class="invalid-feedback" v-if="errors && errors.username">
                            {{ errors.username[0] }}
                        </div>
                    </div>
                </div>
                <template v-if="!_user">
                    <template v-if="!temp_password">
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="form-group">
                                <label for="">Password</label>
                                <input type="password" class="form-control" v-model="user.password" :class="errors && errors.password?'is-invalid':''">
                                <small @click="generateTempPassword" class="text-primary cursor-pointer"><i class="fa fa-sync mr-2"></i>Generate Password</small>
                                <div class="invalid-feedback" v-if="errors && errors.password">
                                    {{ errors.password[0] }}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="form-group">
                                <label for="">Confirm Password</label>
                                <input type="password" class="form-control" v-model="user.confirm_password" :class="errors && errors.confirm_password?'is-invalid':''">
                                <div class="invalid-feedback" v-if="errors && errors.confirm_password">
                                    {{ errors.confirm_password[0] }}
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="form-group">
                                <label for="">Temporary Password</label>
                                <input type="text" class="form-control" v-model="user.default_password" :class="errors && errors.default_password?'is-invalid':''">
                                <small class="text-success cursor-pointer" @click="generateTempPassword"><i class="fa fa-random mr-2"></i>Regenerate Password</small><br>
                                <small @click="temp_password=false" class="text-dark cursor-pointer"><i class="fa fa-times mr-2"></i>Cancel</small>
                                <div class="invalid-feedback" v-if="errors && errors.default_password">
                                    {{ errors.default_password[0] }}
                                </div>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="form-group">
                        <label for="">Role</label>
                        <select class="form-control" v-model="user.role_id" :class="errors && errors.role_id?'is-invalid':''" @change="changeRole()"
                            :disabled="user.role_id == 1 && user.id == 1">
                            <option :value="r.id" v-for="r in _roles">{{ r.name }}</option>
                        </select>
                        <div class="invalid-feedback" v-if="errors && errors.role_id">
                            The role field is required.
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6" v-if="checkEntranceUser(user)">
                    <div class="form-group">
                        <label for="">Entrance</label>
                        <select class="form-control" v-model="user.entrance_id" :disabled="_auth.entrance_id">
                            <option :value="h.id" v-for="h in _entrances">{{ h.name }}</option>
                        </select>
                        <div class="invalid-feedback" v-if="errors && errors.entrance_id">
                            {{ errors.entrance_id[0] }}
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="_user && _auth.role_id==1">
                <hr class="my-3">
                <h2>Change Password</h2>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="form-group">
                            <label for="">New Password</label>
                            <input v-model="password.new_password" type="password" class="form-control" :class="errors && errors.new_password?'is-invalid':''">
                            <div class="invalid-feedback" v-if="errors && errors.new_password">
                                {{ errors.new_password[0] }}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="form-group">
                            <label for="">Confirm Password</label>
                            <input v-model="password.confirm_password" type="password" class="form-control" :class="errors && errors.confirm_password?'is-invalid':''">
                            <div class="invalid-feedback" v-if="errors && errors.confirm_password">
                                {{ errors.confirm_password[0] }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end">
                <div class="col-12 text-right">
                    <hr>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <a class="btn btn-block mb-2" href="/users">
                        Cancel
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <button class="btn btn-block btn-primary" @click="createUser" v-if="!_user">
                        Save
                    </button>
                    <button class="btn btn-block btn-primary" @click="updateUser" v-else>
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['_auth', '_roles', '_entrances', '_user'],
    data(){
        return{
            user:{
                name:'',
                username:'',
                role_id:'',
                entrance_id:'',
                password:'',
                confirm_password:'',
                default_password:''
            },
            errors:[],
            temp_password:false,
            password:{
                new_password:'',
                confirm_password:''
            },
        }
    },
    computed:{
    },
    created(){
        if(this._user){
            this.user = {...this._user};
            this.user.password = '';
            this.user.confirm_password = '';
        }else{
            this.changeRole();
        }
    },
    mounted(){
    },
    methods:{
        changeRole(){
            this.user.entrance_id = null;
        },
        checkEntranceUser(user){
            return user.role_id==2;
        },
        generateTempPassword(){
            this.temp_password = true;
            this.user.default_password=this.randomString(6);
        },
        randomString(len) {
            var p = "abcdefghijklmnopqrstuvwxyz0123456789";
            return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
        },
        createUser(){
            if(!this.temp_password){
                if(this.user.password.length == 0){
                    this.$alert('', 'No Password!','error');
                    return;
                }
                if(this.user.password != this.user.confirm_password){
                    this.$alert('', 'Password and Confirm Password does not match!','error');
                    return;
                }
                this.user.default_password = this.user.password;
            }else{
                this.user.password = this.user.default_password;
                this.user.confirm_password = this.user.default_password;
            }
            this.$confirm('','Are you sure you want to create user?','question').then(()=>{
                this.$loader.show();
                this.errors = [];
                axios.post('/user', this.user).then((response)=>{
                    this.$loader.hide();
                    if(response.data.status == "OK"){
                        this.$alert('','User was successfully created','success').then(()=>{
                            window.location.href="/users";
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
        updateUser(){
            this.$confirm('','Are you sure you want to update user?','question').then(()=>{
                this.$loader.show();
                this.errors = [];
                var form = this.user;
                form.change_password = this.password;
                axios.patch('/user/'+this.user.id,form).then((response)=>{
                    this.$loader.hide();
                    if(response.data.status == "OK"){
                        this.$alert('','User was successfully updated','success').then(()=>{
                            window.location.href="/users";
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