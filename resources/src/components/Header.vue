<template>
<div class="nav-container">
  <nav class="navbar navbar-top navbar-expand navbar-dark bg-white border-bottom">
      <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <a class="d-lg-flex align-items-center d-sm-none d-xs-none" href="/">
            <!-- <img src="/icons/ico.png" class="mr-3 app-header-logo"> -->
            <div class="app-header-title">
              <h2 class="mb-0 font-roboto text-primary">OO</h2>
              <h3 class="text-primary font-weight-bold mb-0 font-bebas">Park</h3>
            </div>
        </a>
        <ul class="navbar-nav align-items-center justfiy-content-end d-lg-none">
          <li class="nav-item">
            <button class="btn btn-link" @click="openSidebar()">
              <i class="fa fa-bars text-dark fa-2x"></i>
            </button>
          </li>
        </ul>
        <ul class="navbar-nav align-items-center d-sm-none d-lg-flex d-xs-none">
          <li class="nav-item mx-4" v-for="sidebar in _sidebar_items" v-if="sidebar.permission.includes(_auth.role_id)" :class="checkActive(sidebar) ? 'active':''">
              <template v-if="!sidebar.items || sidebar.items.length == 0">
                <span class="nav-link cursor-pointer text-primary font-weight-bold" :class="sidebar.isMaintenance == 1 ? 'reduce-opacity':''" @click="redirect(sidebar)">
                  <!-- <i class="text-primary" :class="sidebar.icon"></i> -->
                  <span class="nav-link-text" style="text-transform: uppercase;">{{ sidebar.name }}
                  </span>
                </span>
              </template>
              <template v-else>
                <li class="nav-item dropdown">
                  <a class="nav-link cursor-pointer text-primary font-weight-bold pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <!-- <i class="text-primary" :class="sidebar.icon"></i> -->
                    <span class="nav-link-text" style="text-transform: uppercase;">{{ sidebar.name }}</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <span  class="dropdown-item" v-for="item in sidebar.items" @click="redirect(item)" v-if="item.permission.includes(_auth.role_id)">
                      <span>{{ item.name }}</span>
                    </span>
                  </div>
                </li>
              </template>
          </li>
        </ul>
        <!-- Navbar links -->
        <ul class="navbar-nav align-items-center">
          
          <li class="nav-item dropdown">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center justify-content-between">
                <span class="avatar avatar-sm rounded-circle bg-light border">
                  <img alt="Image placeholder" src="/icons/users/admin.jpg" />
                </span>
                <h5 class="text-dark font-roboto ml-2 mb-0">{{ _auth.name }}</h5>
                <i class="fa fa-chevron-down text-dark ml-3"></i>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <h5 class="dropdown-header">{{ _auth.user_role.name }} Account</h5>
              <!-- <a href="#" class="dropdown-item" >
                <i class="fa fa-edit"></i>
                <span>Edit profile</span>
              </a>
              <a href="#" class="dropdown-item">
                <i class="fa fa-key"></i>
                <span>Change Password</span>
              </a> -->
              <a href="#" @click="logout" class="dropdown-item">
                <i class="ni ni-button-power"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>

export default {
  props: ["_auth","_sidebar_items"],
  data(){
    return{
    }
  },
  methods: {
    openSidebar(){
      $("#sidebarModal").modal('show');
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
                this.$loader.hide();
                this.$alert('', 'Something went wrong. Please try again later','error')
            });
        });
    },
    checkActive(page){
      if(page.items && page.items.length > 0)
      {
        let links = page.items.map(i=>i.link);
        if(links){
          return links.includes(window.location.pathname)
        }
      }
      else
        if(window.location.href.includes(page.link))
            return true;

      return false;
    },
    redirect(sidebar){
      let link  = sidebar.link;
      if(sidebar.parameters)
      {
        let keys = Object.keys(sidebar.parameters);
        if(keys.length > 0)
        {
          link += '?';
          keys.forEach((k,i)=>{
            link += `${k}=${sidebar.parameters[k]}`
            if(keys.length > 0 && i < keys.length - 1){
              link += '&';
            }
          })
        }
      }
      console.log(link);
      if(!sidebar.isMaintenance)
        window.location.href= link;
      else{
          this.$alert('', 'Page is under maintenance. Please try again later','warning')
      }
    },
  },
};
</script>

<style scoped>
  .btn-link{
    border:none;
  }
</style>