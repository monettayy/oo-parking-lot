<template>
<div class="nav-container">
  <nav class="navbar navbar-top navbar-expand navbar-dark border-bottom">
      <div class="container-fluid">
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <a class="d-lg-flex align-items-center" href="/">
              <!-- <img src="/icons/moon-and-sun.png" class="mr-3 app-header-logo" style="width: 45px;"> -->
              <div class="app-header-title">
                <h2 class="mb-0 font-roboto text-primary">OO</h2>
                <h3 class="text-primary font-weight-bold mb-0 font-bebas">Park</h3>
              </div>
          </a>
          <ul class="navbar-nav align-items-center" v-if="!_auth">
            <li class="nav-item">
                <a href="/login" class="nav-link btn btn-lg btn-primary">Login</a>
            </li>
          </ul>
          <ul v-if="_auth" class="navbar-nav align-items-center">
            <li class="nav-item">
                <!-- <a href="/dashboard" class="nav-link btn btn-lg btn-primary"><i class="fa fa-home mr-2"></i>Home</a> -->
                <a href="/dashboard" class="nav-link btn btn-lg btn-primary">Home</a>
            </li>
          </ul>
        </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  props:['_auth']
}
</script>

<style lang="scss" scoped>
.app-header-title h1{
  font-size: 2.5rem;
}
    @media(max-width:900px)
    {
        .app-header-title h1{
            font-size: 1.9rem;
        }
    }

</style>