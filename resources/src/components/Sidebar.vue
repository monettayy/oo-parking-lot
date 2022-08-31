<template>
<div class="modal fade" id="sidebarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
          <h5 class="modal-title"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-12" v-for="sidebar in _sidebar_items" v-if="sidebar.permission.includes(_auth.role_id)" :class="checkActive(sidebar) ? 'active':''">
            <div class="card py-3" v-if="!sidebar.items || sidebar.items.length == 0" @click="redirect(sidebar)">
              <div class="card-icon">
                <i :class="sidebar.icon"></i>
              </div>
              <div class="card-label">
                <h1>{{ sidebar.name }}</h1>
              </div>
            </div>
            <template v-if="sidebar.items && sidebar.items.length > 0">
              <div class="card py-3" v-for="item in sidebar.items" @click="redirect(item)" v-if="item.permission.includes(_auth.role_id)">
                <div class="card-icon">
                  <i :class="item.icon"></i>
                </div>
                <div class="card-label">
                  <h1>{{ item.name }}</h1>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>



<script>
export default {
  props:['_auth','_maintenance','_sidebar_items'],
  mounted(){
    $(".bodyClick").on('click',function(){
      $("body").removeClass("g-sidenav-show g-sidenav-pinned");
      $("body").addClass("g-sidenav-hidden");
    });
  },
  methods: {
    redirect(sidebar){
      let link  = sidebar.link;
      if(sidebar.parameters)
      {
        let keys = Object.keys(sidebar.parameters);
        keys.forEach(k=>{
          link += `?${k}=${sidebar.parameters[k]}`
        })
      }
      console.log(link);
      if(!sidebar.isMaintenance)
        window.location.href= link;
      else{
          this.$alert('', 'Page is under maintenance. Please try again later','warning')
      }
    },
    logout() {
      this.$confirm("", "Are you sure you want to logout?", "question").then(() => {
        this.$loader.show();
        axios.post("/logout").then((response) => {
          if (response.data) {
            this.$loader.hide();
            window.location.href = response.data.url;
          }
        }).catch(()=>{
          this.$alert('', 'Something went wrong. Please try again later','error')
          this.$loader.hide();
        });
      });
    },
    checkActive(page){
        if(window.location.pathname.includes(page.link))
            return true;
        
        return false;
    },
    toggleSidebar() {
      $("#sidenav-main").toggleClass("toggled");
    },
    featureNotAvailable(message){
        this.$alert('', message,'error')
    },
  },
};
</script>

<style lang="scss" scoped>
  .card{
    border:1px solid rgba(0,0,0,0.1);
    display:flex;
    flex-direction: row;
    padding:30px 0;
    .card-icon{
      height: 100%;
      width: 30%;
      display:flex;
      align-items: center;
      justify-content: center;
      i{
        font-size: 2rem;
      }
    }
    .card-label{
      width:70%;
      height: 100%;
      display:flex;
      align-items: center;
    }
  }
</style>