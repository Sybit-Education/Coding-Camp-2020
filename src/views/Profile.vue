<template>
    <div>
        <b-row>
            <b-col>
                 <b-avatar size="40px" class="mt-3 mb-2 ml-2"></b-avatar>
            </b-col>
        </b-row>
        <b-container>
            <b-row>
                <b-col>
                    <p>Name</p>
                </b-col>
            </b-row>
             <b-row>
                <b-col class="d-flex justify-content-end ">
                    <b-avatar src="https://placekitten.com/300/300" class="mt-n5 mr-3" size="4.5rem"></b-avatar>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <p>Email</p>
                </b-col>
            </b-row>
        </b-container>
            <b-row class="mt-3 border" >
              <b-col class="flex-row  d-flex justify-content-between align-items-center pt-2">
                <p>Platz.</p><p>8</p><p>Punkte</p><p>9999</p>
                </b-col>
            </b-row>
            <b-row class="mt-5">
                <b-col class=" flex-row d-flex justify-content-center">
                     <delete-user-modal></delete-user-modal>
                </b-col>
            </b-row>
    </div>
</template>
<script>
import DeleteUserModal from '@/components/element/DeleteUserModal.vue'
export default {
  components: {
    DeleteUserModal
  }
}
</script>
<style lang="scss" scoped>
.border{
  border: 3px solid black !important;
}
</style>
