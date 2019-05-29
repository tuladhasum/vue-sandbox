<template>
   <div class="container">
      <employee-form @add:employee="addEmployee"></employee-form>
      <hr>
      <employee-table @edit:employee="editEmployee" @delete:employee="deleteEmployee"
                      v-bind:employees="employees"></employee-table>
   </div>
</template>

<script>
   import EmployeeTable from "@/components/employee/EmployeeTable";
   import EmployeeForm from "@/components/employee/EmployeeForm";

   export default {
      components: {EmployeeForm, EmployeeTable},
      data() {
         return {
            employees: [
               {
                  id: 1,
                  name: 'Richard Hendricks',
                  email: 'richard@piedpiper.com'
               },
               {
                  id: 2,
                  name: 'Bertram Gilfoyle',
                  email: 'gilfoyle@piedpiper.com'
               },
               {
                  id: 3,
                  name: 'Dinesh Chugtai',
                  email: 'dinesh@piedpiper.com'
               }
            ]
         }
      },
      methods: {
         addEmployee(employee) {
            const lastId = this.employees.length > 0
               ? this.employees[this.employees.length - 1].id : 0;
            const id = lastId + 1;
            const newEmployee = {...employee, id};
            // this.employees.push(employee);
            this.employees = [...this.employees, newEmployee];
         },
         deleteEmployee(id) {
            this.employees = this.employees.filter(
               employee => employee.id !== id
            );
         },
         editEmployee(id, updateEmployee) {
            this.employees = this.employees.map(
               employee => employee.id === id ? updateEmployee : employee
            );
         },
         async getEmployees(){
            try {
               const response = await fetch('http://localhost:3000/users')
               const data = await response.json()
               this.employees = data
            } catch (error) {
               console.error(error)
            }
         }
      },
      mounted(){
         this.getEmployees();
      },
      watch: {},
      computed: {},
      filters: {}
   }
</script>

<style scoped>

</style>
