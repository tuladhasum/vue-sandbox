<template>
   <section>
      <p v-if="submitting">Loading...</p>
      <div class="alert alert-danger" v-if="error && submitting">
        ❗️ Please fix the errors in the following forms
      </div>
      <div class="alert alert-success" v-if="success">
         ✅ Your employee entry have been added
      </div>
      <form @submit.prevent="handleSubmit">
         <div class="form-group">
            <label for="">Name</label>
            <input type="text"
                   ref="firstInput"
                   class="form-control"
                   :class="{ 'is-invalid' : submitting && invalidName}"
                   @focus="clearStatus"
                   @keypress="clearStatus"
                   v-model="employee.name">
            <div class="invalid-feedback">
               ‼️ Enter a valid name
            </div>
         </div>
         <div class="form-group">
            <label for="">Email</label>
            <input type="text"
                   :class="{'is-invalid' : submitting && invalidEmail}"
                   @focus="clearStatus"
                   class="form-control" v-model="employee.email">
            <div class="invalid-feedback"> ‼️Enter a valid email</div>
         </div>
         <div class="form-group">
            <button type="submit" class="btn btn-primary">Add Employee</button>
         </div>
      </form>
   </section>
</template>

<script>
   export default {
      name: "EmployeeForm",
      data() {
         return {
            submitting: false,
            error: false,
            success: false,
            employee: this.newEmployee()
         }
      },
      methods: {
         handleSubmit() {
            this.submitting = true;
            this.clearStatus();

            if (this.invalidEmail || this.invalidName) {
               this.error = true;
               return;
            }

            this.$emit('add:employee', this.employee);
            this.$refs.firstInput.focus();

            this.employee = this.newEmployee();
            this.error = false;
            this.success = true;
            this.submitting = false;
         },
         clearStatus() {
            this.error = false;
            this.success = false;
         },
         newEmployee() {
            return {
               name: "",
               email: ""
            }
         }
      },
      computed: {
         invalidName() {
            return this.employee.name === "";
         },
         invalidEmail() {
            return this.employee.email === "";
         }
      }
   }
</script>

<style scoped>

</style>