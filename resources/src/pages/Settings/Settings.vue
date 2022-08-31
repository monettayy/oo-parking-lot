<template>
    <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
                <img src="/imgs/incognito.png" class="mr-3" width="40">
                <h2 class="mb-0">Developers Option</h2>
            </div>
        </div>
        <div class="card-body pt-0 px-5">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <VueDatePicker format="MM/DD/YYYY" :visible-years-number="80" 
                                    class="form-control"
                                    v-model="date" />
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                    <select class="form-control" v-model="type">
                        <option value="">- Select Type -</option>
                        <option value="all">All</option>
                        <option value="user_logins">Login</option>
                        <option value="user_operations">User Operations</option>
                        <option value="user_reports">Reports</option>
                        <option value="sms_logs">SMS Logs</option>
                        <option value="new_members">New Users</option>
                        <option value="laravel">Other Logs</option>
                    </select>
                </div>
                <div class="col-lg-6 col-md-3 col-sm-6">
                    <button class="btn btn-primary" @click="getItems()">
                        <i class="fa fa-eye mr-2"></i>Fetch
                    </button>
                    <button class="btn btn-primary" @click="downloadData()">
                        <i class="fa fa-download mr-2"></i>Download
                    </button>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                </div>
            </div>
            <div class="container py-5" v-if="isLoading && !log_data">
                <data-loader></data-loader>
            </div>
            <div class="container py-5" v-else-if="!isLoading && !log_data">
                <div class="text-center">
                    <h4><i class="fa fa-file mr-2"></i> No Data Available</h4>
                </div>
            </div>
            <div class="row" v-else-if="!isLoading && log_data" style="max-height:60vh;overflow:auto;">
                <div class="col-12 mt-3">
                    <h4><i class="fa fa-clock mr-2"></i> Generated: {{ log_data.lastModified | parseDate('LLL') }}</h4>
                    <h4><i class="fa fa-info-circle mr-2"></i> Size: {{ log_data.size }} B</h4>
                </div>
                <div class="col-12">
                    <p style="white-space:pre-line;">{{ log_data.file }}</p>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        props:['_auth'],
        components:{
        },
        data(){
            return{
                isLoading:false,
                date:moment().format('YYYY-MM-DD'),
                type:'',
                log_data:'',
            }
        },
        mounted(){
            this.getItems();
        },
        filters:{
            parseDate(date, format = "MMMM DD, YYYY") {
                return moment(date).format(format);
            },
        },
        methods:{
            getItems(){
                this.log_data = '';
                if(this.type){
                    this.isLoading = true;
                    axios.get('/get-logs', {params:{date: this.date, type: this.type}}).then((response)=>{
                        this.isLoading = false;
                        if(response.data.status == "OK"){
                            this.log_data = response.data.data;
                        }
                    }).catch(()=>{
                        this.isLoading = false;
                        this.$alert('','Something went wrong!','error');
                    });
                }
            },
            downloadData(){
                if(this.type){
                    this.$confirm("", "Are you sure you want to download system logs?", "question").then(() => {
                        window.location.href = '/download-logs?date='+this.date+'&type='+this.type;
                    });
                }
            },
        },
    }
    </script>
    
    <style>
    
    </style>