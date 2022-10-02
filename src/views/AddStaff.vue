<template>

    <div class="col-6 mx-auto"> 
      <h1> Add New staff</h1>
      <validation-observer
        ref="observer"
        v-slot="{ invalid }"
      >
        <form @submit.prevent="submit">
          <validation-provider
            v-slot="{ errors }"
            name="Name"
            rules="required|max:10"
          >
            <v-text-field
              v-model="staff.name"
              :counter="10"
              :error-messages="errors"
              label="Name"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="mobile"
            :rules="{
              required: true,
              digits: 7,
              
            }"
          >
            <v-text-field
              v-model="staff.mobile"
              :counter="7"
              :error-messages="errors"
              label="Mobile"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              v-model="staff.email"
              :error-messages="errors"
              label="E-mail"
              required
            ></v-text-field>
          </validation-provider>
         
          
    
          <v-btn
            class="mr-4"
            type="submit"
            :disabled="invalid"
          >
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </form>
      </validation-observer>
  </div>  
    </template>
  
  
  <script>
      import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
      import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import { staffInfoService } from '@/services/staffInfoService'
    
      setInteractionMode('eager')
    
      extend('digits', {
        ...digits,
        message: '{_field_} needs to be {length} digits. ({_value_})',
      })
    
      extend('required', {
        ...required,
        message: '{_field_} can not be empty',
      })
    
      extend('max', {
        ...max,
        message: '{_field_} may not be greater than {length} characters',
      })
    
      extend('regex', {
        ...regex,
        message: '{_field_} {_value_} does not match {regex}',
      })
    
      extend('email', {
        ...email,
        message: 'Email must be valid',
      })
    
      export default {
        components: {
          ValidationProvider,
          ValidationObserver,
        },
        data: () => ({
          staff:{
          name: '',
          mobile: '',
          email: '',

          }
         
         
        }),
        created: async function(){

        },
    
        methods: {
          async submit () {
            this.$refs.observer.validate()
            try{
              let response= await staffInfoService.addStaff(this.staff);
              if(response){
                return this.$router.push('/staff-list')

              }else{
                return this.$router.push('/staffs/add')

              }

            }
            catch(error){
              console.log(error)

            }
          },
          clear () {
            this.name = ''
            this.mobile = ''
            this.email = ''
           
            this.$refs.observer.reset()
          },
        },
      }
    </script>