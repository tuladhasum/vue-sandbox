<template>
   <section class="container">
      <h1>Invoice</h1>
<!--refer: https://codepen.io/SitePoint/pen/MVLVmv?editors=1010-->
      <div class="tab-pane fade show active">
         <div class="row">
            <div class="col-12">
               <h3>Enter details below to create Invoice</h3>

               <form @submit.prevent="onSubmit">
                  <div class="form-group">
                     <label for="">Invoice Name:</label>
                     <input type="text" required class="form-control" placeholder="eg Seller's Invoice"
                            v-model="invoice.name">
                  </div>

                  <div class="form-group">
                     <label for="">Invoice Price:</label>
                     <span class="form-control">$ {{invoice.total_price | currency}}</span>
                  </div>
                  <hr/>
                  <h3>Transactions</h3>
                  <div class="form-group">
                     <label for="">Add Transactions: </label>
                     <button type="button" class="btn btn-primary btn-sm " data-toggle="modal"
                             data-target="#transactionModal">
                        +
                     </button>
                     <!--                     Modal-->
                     <div class="modal fade" id="transactionModal" tabindex="-1" role="dialog"
                          aria-labelledby="transactionModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">

                           <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title" id="exampleModalLabel">Add Transaction</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>
                              <div class="modal-body">
                                 <input type="hidden" v-model="nextTxnId">
                                 <div class="form-group">
                                    <label for="">Transaction Name</label>
                                    <input type="text" class="form-control" id="txn_name_modal" v-model="transaction.name">
                                 </div>
                                 <div class="form-group">
                                    <label for="">Price ($)</label>
                                    <input type="number" id="txn_price_modal" class="form-control" v-model="transaction.price">
                                 </div>
                              </div>
                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Discard
                                    Transaction
                                 </button>
                                 <button type="button" class="btn btn-primary" data-dismiss="modal"
                                         v-on:click="saveTransaction()">Save transaction
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
            <div class="col-12">
               <table class="table">
                  <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Transaction Name</th>
                     <th scope="col">Price ($)</th>
                     <th scope="col"></th>
                  </tr>
                  </thead>
                  <tbody>
                  <template v-for="(txn,id) in transactions">
                     <tr :key="txn.id">
                        <td>{{txn.id}}</td>
                        <td>{{txn.name}}</td>
                        <td>{{txn.price |  currency}}</td>
                        <td>
                           <button class="btn btn-info btn-sm" @click="editTransaction(txn.id)">Edit</button>
                           <button type="button" class="btn btn-danger" v-on:click="deleteTransaction(txn.id)">X
                           </button>
                        </td>
                     </tr>
                  </template>
                  </tbody>
               </table>
            </div>
            <div class="form-group">
               <button class="btn btn-primary" >Create Invoice</button>
               {{ loading }}
               {{ status }}
            </div>
         </div>
      </div>
   </section>
</template>

<script>
   function newTransaction(id) {
      return {
         id: id,
         name: "",
         price: 0.0
      }
   }
   export default {
      name: "Invoice",
      data() {
         return {
            status: "",
            loading: "",
            invoice: {
               name: '',
               total_price: 0.0
            },
            nextTxnId: 1,
            transactions: [],
            transaction: {
               id: 0,
               name: "",
               price: 0.0
            }
         }
      },
      computed: {
         calcTotal(){
            let total = this.transactions.reduce((acc,item)=> (acc + item.price*1), 0);
            this.invoice.total_price = total;
            return total;
         }
      },
      methods: {
         onSubmit() {
            console.log("Form Submitted");
         },
         saveTransaction() {
            this.transactions.push({
               id: this.nextTxnId,
               name: this.transaction.name,
               price: this.transaction.price
            });
            this.nextTxnId++;
            this.transaction = newTransaction(this.nextTxnId);

            console.log("Save Transaction Clicked");
         },
         editTransaction(id){
            $('#transactionModal').modal('show');
            this.transaction = this.transactions[id];

         },
         deleteTransaction(id){
            this.transactions.splice(id,1);
         }
      },
      filters :{
         currency(value){
            return  value.toFixed(2);
         }
      }
   }
</script>

<style scoped>

</style>