<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="UserId"
      prop="userid">
    </el-table-column>
     <el-table-column
      label="Access"
      prop="access">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" >
        <el-input
          v-model="search"
          size="mini"
          placeholder="Search Keyword"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          v-if="scope.row.editing"
          icon="el-icon-success"
          @click="handleDelete(scope.$index, scope.row)">View</el-button>

        <el-button
          size="mini"
          type="danger"
          v-if="!scope.row.editing"
          icon="el-icon-delete"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
    
        tableData: [{
          userid: '1234',
          access:'User',
          name: 'Danile',
          Email: 'Danile@126.com'
        }, {
          userid: '1235',
          access:'User',
          name: 'Mary',
          address: 'mary1213@126.com'
        }, {
          userid: '1236',
          access:'Admin',
          name: 'Wang',
          address: 'wang1287@qq.com'
        }, {
          userid: '1237',
          access:'Admin',
          name: 'Chang',
          address: 'chang12127@qq.com'
        }],
        search: ''
      }
    },
    
    methods: {
      handleEdit(index, row) {
             this.$set(this.tableData[$index], 'editing', true)
      },
      handleDelete(index, row) {
         this.$confirm('Please comfirm to delete selected user.', 'Comfirm', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.tableData.splice($index, 1)
        this.$message({
          type: 'success',
          message: 'Deleted!'
        })
      }).catch((err) => {
        this.$message({
          type: 'error',
          message: err
        })
      })
      
      }
    },
  }
</script>