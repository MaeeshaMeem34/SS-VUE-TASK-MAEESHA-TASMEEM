<template>

    <div>
        <h1>This is staff list</h1>
        <v-btn
      
      color="blue-grey"
      class="ma-2 white--text"
      to="/staffs/add"
    >
      Add New
      <v-icon
        right
        dark
      >
     
      </v-icon>
    </v-btn>

    <InfoCard/>


    </div>

    
</template>


<script>
   
import InfoCard from '@/components/InfoCard.vue';
import { mdiAccount } from "@mdi/js";

  
    export default {
      name: 'StaffList',
      data:() =>({
        icons: {
            mdiAccount
        }
      }),
  
      components: {
    InfoCard,
    
},
    }
  </script> 