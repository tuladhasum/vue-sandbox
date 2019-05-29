<template>
   <section>
      <h1>Employee Table</h1>

      <div class="alert alert-danger" v-if="employees.length < 1">No Employees found</div>
      <div id="employee-table" v-else>
         <table class="table table-striped table-hover">
            <thead>
            <tr>
               <th>Employee name</th>
               <th>Employee email</th>
               <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="employee in employees" :key="employee.id">
               <td v-if="editing === employee.id">
                  <input type="text" class="form-control" v-model="employee.name">
               </td>
               <td v-else>{{employee.name}}</td>

               <td v-if="editing === employee.id">
                  <input type="text" class="form-control" v-model="employee.email">
               </td>
               <td v-else>{{employee.email}}</td>

               <td v-if="editing === employee.id">
                  <button @click="editEmployee(employee)" class="btn btn-sm btn-success">Save</button>
                  <button @click="editing=null" class="btn btn-sm btn-danger">Cancel</button>
               </td>
               <td v-else>
                  <button @click="deleteEmployee(employee.id)" class="btn btn-danger btn-sm">Delete</button>
                  <button @click="editMode(employee.id)" class="btn btn-info btn-sm">Edit</button>
               </td>
            </tr>
            </tbody>
         </table>
      </div>
   </section>
</template>

<script>
   export default {
      name: "EmployeeTable",
      data() {
         return {
            editing: null
         }
      },
      props: {
         employees: Array
      },
      methods: {
         deleteEmployee(id) {
            if (confirm("Are you sure you want to delete")) {
               this.$emit('delete:employee', id);
            }
         },
         editMode(id) {
            this.editing = id;
         },
         editEmployee(employee) {
            if (employee.name === '' || employee.email === '') return;
            this.$emit('edit:employee', employee.id, employee);
            this.editing = null;
         }
      }
   }
</script>

<style scoped>

</style>