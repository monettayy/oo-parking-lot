<template>
    <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
                <i class="fa fa-car mr-2"></i>
                <h2 class="mb-0">Vehicle Types</h2>
            </div>
            <!-- <a class="btn btn-primary btn-sm" href="/vehicle-types/create" v-if="_auth.role_id==1">
                <i class="fa fa-plus mr-2"></i>New Vehicle Type
            </a> -->
        </div>
        <div class="card-body pt-0 px-5">
            <div class="row ml-3">
                <div class="col-12 d-flex justify-content-end row px-0">
                    <div class="col-lg-5 col-md-12 d-flex px-0">
                        <input type="search" class="form-control" placeholder="Search" v-model="filters.keywords" @search="getItems()" />
                        <button class="btn btn-primary btn-sm px-4 ml-1" @click="getItems()">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
    
            <div class="table-responsive mt-4">
                <table class="table table-sm table-bordered">
                    <thead class="bg-primary text-white text-center">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Slot Types</th>
                            <!-- <th>Action</th> -->
                        </tr>
                    </thead>
                    <tbody v-if="!isLoading && vehicle_types && vehicle_types.data.length > 0">
                        <tr v-for="(item,i) in vehicle_types.data" class="bg-white">
                            <td class="text-center">{{ i | getNumber(filters.page,vehicle_types.per_page) }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.description }}</td>
                            <td>
                                <span v-for="slot_type in item.slot_type_obj" class="mr-2">
                                    {{ slot_type.name }}
                                </span>
                            </td>
                            <!-- <td>
                                <a class="btn btn-primary btn-sm" :href="'/vehicle-types/edit/'+item.code">
                                    <i class="fa fa-edit mr-2"></i>Edit
                                </a>
                                <button class="btn btn-danger btn-sm" @click="deleteItem(item)"
                                    :disabled="item.id <= 3">
                                    <i class="fa fa-trash mr-2"></i>Delete
                                </button>
                            </td> -->
                        </tr>
                    </tbody>
                    <tbody v-if="!isLoading && vehicle_types && vehicle_types.data.length == 0">
                        <tr class="bg-white">
                            <td class="text-center" colspan="7">
                                <h3><i class="fa fa-file mr-2"></i>No Data Available</h3>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="isLoading && !vehicle_types">
                        <tr class="bg-white">
                            <td class="text-center" colspan="7">
                                <data-loader></data-loader>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Pagination
                v-bind="{
                    _lastPage: vehicle_types.last_page,
                    _page: filters.page,
                    _total: vehicle_types.total,
                    _per_page: vehicle_types.per_page,
                    _to: vehicle_types.to
                }"
                @pageClicked="getItems"
                v-if="vehicle_types && vehicle_types.data.length > 0"
            />
        </div>
    </div>
</template>
    
<script>
import Pagination from '../../components/Pagination.vue';

export default {
    props:['_auth'],
    components:{
        Pagination
    },
    data(){
        return{
            filters:{
                keywords:'',
                page:1
            },
            vehicle_types:'',
            isLoading:false
        }
    },
    mounted(){
        this.getItems();
    },
    filters:{
        getNumber(index, current_page, per_page){
            return ((current_page - 1) * per_page) + (index+1);
        },
    },
    methods:{
        getItems(page = 1){
            this.filters.page = page;
            this.isLoading = true;
            this.vehicle_types = '';
            axios.get("/vehicle-types/list",{ params:this.filters }).then((response)=>{
                this.isLoading = false;
                if(response.data.status == "OK"){
                    this.vehicle_types = response.data.data;
                }
            }).catch(()=>{
                this.isLoading = false;
                this.$alert('','Something went wrong!','error');
            });
        },
        deleteItem(item){
            this.$confirm("", "Are you sure you want to delete this vehicle type?", 'question').then(() => {
                this.$loader.show();
                axios.delete('/vehicle-type/'+item.id).then((response)=>{
                    this.$loader.hide();
                    if(response.data.status == "OK"){
                        this.$alert("", "Vehicle Type was deleted", 'success', { timer:1000, showConfirmButton:false });
                        this.getItems();
                    }
                }).catch(() => {
                    this.$loader.hide();
                    this.$alert("", "Something went wrong. Please try again later.", 'error');
                });
            });
        },
    },
}
</script>

<style>

</style>