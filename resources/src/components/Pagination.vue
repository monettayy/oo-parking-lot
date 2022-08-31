<template>
    <div class="my-3" v-if="totalPages.length > 0">
        <ul class="pagination justify-content-start pagination-circle pg-primary" style="cursor:pointer;">
            <li class="page-item" :class="_page == 1?'disabled':''">
                <span class="page-link" href="#" tabindex="-1" :aria-disabled="_page == 1" @click="pageClick(_page-1)">
                    <i class="fa fa-angle-left"></i>
                    <span class="sr-only">Prev</span>
                </span>
            </li>

            <template v-if="!_isSimple"> 
                <li class="page-item" v-if="!totalPages.includes(1)">
                    <span class="page-link" @click="pageClick(1)">1</span>
                </li>
                <template v-for="(p, index) in totalPages">
                    <li class="page-item" :class="_page == p?'active':''" v-if="p != 0" :key="index">
                        <span class="page-link" @click="pageClick(p)">{{ p }}</span>
                    </li>
                </template>
                
                <li class="page-item" v-if="!totalPages.includes(_lastPage)">
                    <span class="page-link" @click="pageClick(totalPages[(totalPages.length-1)]+1)">...</span>
                </li>
                <li class="page-item" v-if="!totalPages.includes(_lastPage)">
                    <span class="page-link" @click="pageClick(_lastPage)">{{ _lastPage }}</span>
                </li>
            </template>

            <li class="page-item" :class="_lastPage && _page == _lastPage?'disabled':''">
                <span class="page-link" :aria-disabled="_lastPage && _page == _lastPage" @click="pageClick(_page+1)">
                    <i class="fa fa-angle-right"></i>
                    <span class="sr-only">Next</span>
                </span>
            </li>
        </ul>
         <h5 class="font-weight-normal text-muted mb-3" v-if="_to && _to > 0">{{ _to }} out of {{ _total }}</h5>
        <!-- <h6 style="font-weight: 500;" v-else>No Data Available</h6> -->
    </div>
</template>

<script>
export default {
    name:'Pagination',
    props:['_auth','_lastPage', '_page','_total','_per_page','_to','_range','_isSimple'],
    data(){
        return{
        }
    },
    computed:{
        totalPages: function(){
            let totalPages = this._lastPage;
            let range = this._range ? this._range : 10;
            let paging = [];
            let start = 1;

            if (this._page < (range / 2) + 1 ) {
                start = 1;
            }else if(this._page >= (totalPages - (range / 2) )) {
                start = Math.floor(totalPages - range + 1);
            }else{
                start = (this._page - Math.floor(range / 2));
            }

            if(totalPages > range){
                for (let i = start; i <= ((start + range) - 1); i++) {
                    paging.push(i);
                }
            }else{
                for (let i = start; i <= totalPages; i++) {
                    paging.push(i);
                }
            }

            return paging;
        }
    },
    methods:{
        pageClick(page = 1){
            this.$emit('pageClicked',page);
        }
    },
    filters:{

    }
}
</script>

<style lang="scss" scoped>

</style>