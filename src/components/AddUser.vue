<template>
  <el-row>
    <el-col :span="24">
      <el-table
        :data="master_user.data"
        border
        style="width: 100%"
        highlight-current-row
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column
          v-for="(item,index) in master_user.columns"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-input  placeholder="Please input data" v-model="master_user.sel[item.prop]"></el-input>
            </span>
            <span v-else>{{scope.row[item.prop]}}</span>
          </template>
        </el-table-column>
        <el-table-column label="Operation" width>
          <template slot-scope="scope">
            <el-button
              type="success"
              icon="el-icon-check"
              circle
              @click.stop="saveRow(scope.row,scope.$index)"
            ></el-button>

            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="editRow(scope.row,scope.$index)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteRow(scope.$index,master_user.data)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="24">
      <el-button type="primary" @click="add()">Add User/Admin</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      master_user: {
        sel: null, //选中行
        columns: [
          {
            prop: "name",
            label: "Username",
            width: 120
          },
          {
            prop: "gender",
            label: "Gender",
            width: 150
          },
          {
            prop: "authority",
            label: "Authority",
            width: 120
          },
          {
            prop: "server",
            label: "Owned Server",
            width: 220
          },
          {
            prop: "email",
            label: "Email"
          }
        ],
        data: []
      }
    };
  },
  methods: {
    add() {
      for (let i of this.master_user.data) {
        if (i.isSet)
          return this.$message.warning(
            "Please input user information and save it."
          );
      }
      let j = {
        UserName: "",
        Gender: "",
        Authority: "",
        "Owned server": "",
        Email: "",
        isSet: true
      };
      this.master_user.data.push(j);
      this.master_user.sel = JSON.parse(JSON.stringify(j));
    },
    saveRow(row, index) {
      //save
      let data = JSON.parse(JSON.stringify(this.master_user.sel));
      for (let k in data) {
        row[k] = data[k];
      }
      row.isSet = false;
    },
    editRow(row) {
      //edit
      for (let i of this.master_user.data) {
        if (i.isSet) return this.$message.warning("Please confirm firstly.");
      }
      this.master_user.sel = row;
      row.isSet = true;
    },
    deleteRow(index, rows) {
      //delete
      rows.splice(index, 1);
    }
  },
  components: {}
};
</script>


