<template>
    <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
                <i class="fa fa-table mr-2"></i>
                <h2 class="mb-0">Slots</h2>
            </div>
            <a class="btn btn-primary btn-sm" href="/slots/create" v-if="_auth.role_id==1">
                <i class="fa fa-plus mr-2"></i>New Slot
            </a>
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
                            <th>Entrance</th>
                            <th>Slot Type</th>
                            <th>Distance</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="!isLoading && slots && slots.data.length > 0">
                        <tr v-for="(item,i) in slots.data" class="bg-white">
                            <td class="text-center">{{ i | getNumber(filters.page,slots.per_page) }}</td>
                            <td v-if="item.entrance">{{ item.entrance.name }}</td>
                            <td v-else>---</td>
                            <td v-if="item.slot_type">{{ item.slot_type.name }}</td>
                            <td v-else>---</td>
                            <td>{{ item.distance }}</td>
                            <td>
                                <a class="btn btn-primary btn-sm" :href="'/slots/edit/'+item.code">
                                    <i class="fa fa-edit mr-2"></i>Edit
                                </a>
                                <button class="btn btn-danger btn-sm" @click="deleteItem(item)">
                                    <i class="fa fa-trash mr-2"></i>Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="!isLoading && slots && slots.data.length == 0">
                        <tr class="bg-white">
                            <td class="text-center" colspan="7">
                                <h3><i class="fa fa-file mr-2"></i>No Data Available</h3>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="isLoading && !slots">
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
                    _lastPage: slots.last_page,
                    _page: filters.page,
                    _total: slots.total,
                    _per_page: slots.per_page,
                    _to: slots.to
                }"
                @pageClicked="getItems"
                v-if="slots && slots.data.length > 0"
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
            slots:'',
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
            this.slots = '';
            axios.get("/slots/list",{ params:this.filters }).then((response)=>{
                this.isLoading = false;
                if(response.data.status == "OK"){
                    this.slots = response.data.data;
                }
            }).catch(()=>{
                this.isLoading = false;
                this.$alert('','Something went wrong!','error');
            });
        },
        deleteItem(item){
            this.$confirm("", "Are you sure you want to delete this slot?", 'question').then(() => {
                this.$loader.show();
                axios.delete('/slot/'+item.id).then((response)=>{
                    this.$loader.hide();
                    if(response.data.status == "OK"){
                        this.$alert("", "Slot was deleted", 'success', { timer:1000, showConfirmButton:false });
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