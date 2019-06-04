<template>
   <Form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 300px" class="container">
      <Timeline>
         <TimelineItem color="green">
            <p class="time">1976年</p>
            <p class="content">Apple I 问世</p>
         </TimelineItem>
         <TimelineItem color="green">发布2.0版本</TimelineItem>
         <TimelineItem color="green">
            <Icon type="ios-trophy" slot="dot"></Icon>
            <span>发布里程碑版本</span>
         </TimelineItem>
         <TimelineItem color="blue">发布3.0版本</TimelineItem>
      </Timeline>
      <FormItem
              v-for="(item, index) in formDynamic.items"
              v-if="item.status"
              :key="index"
              :label="'Item ' + item.index"
              :prop="'items.' + index + '.value'"
              :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
         <Row>
            <Col span="18">
               <Input type="text" v-model="item.value" placeholder="Enter something..."></Input>
            </Col>
            <Col span="4" offset="1">
               <Button @click="handleRemove(index)">Delete</Button>
            </Col>
         </Row>
      </FormItem>
      <FormItem>
         <Row>
            <Col span="12">
               <Button type="dashed" long @click="handleAdd" icon="md-add">Add item</Button>
            </Col>
         </Row>
      </FormItem>
      <FormItem>
         <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>
         <Button @click="handleReset('formDynamic')" style="margin-left: 8px">Reset</Button>
      </FormItem>
   </Form>
</template>
<script>
   export default {
      data() {
         return {
            index: 1,
            formDynamic: {
               items: [
                  {
                     value: '',
                     index: 1,
                     status: 1
                  }
               ]
            }
         }
      },
      methods: {
         handleSubmit(name) {
            this.$refs[name].validate((valid) => {
               if (valid) {
                  this.$Message.success('Success!');
               } else {
                  this.$Message.error('Fail!');
               }
            })
         },
         handleReset(name) {
            this.$refs[name].resetFields();
         },
         handleAdd() {
            this.index++;
            this.formDynamic.items.push({
               value: '',
               index: this.index,
               status: 1
            });
         },
         handleRemove(index) {
            this.formDynamic.items[index].status = 0;
         }
      }
   }
</script>

<style scoped>
   .time {
      font-size: 14px;
      font-weight: bold;
   }

   .content {
      padding-left: 5px;
   }
</style>