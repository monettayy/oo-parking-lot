<template>
  <div :class="getSize">
      <slot></slot>
  </div>
</template>

<script>
export default {
    props:['size'],
    computed:{
        getSize(){
            if(this.size)
            {
                if(this.size == 'sm')
                {
                    return 'app-hero-sm'
                }
                else if(this.size == 'lg')
                {
                    return 'app-hero-lg'
                }
                else{
                    return 'app-hero';
                }
            }
            else{
                return 'app-hero';
            }
        }
    }
}
</script>

<style>

</style>