<template>
  <!-- apply server form -->
  <el-row :gutter='20'>
    <el-col :span='16' :offset='4'>
    <el-form
      :model="forms"
      :rules="rules"
      ref="ruleForm2"
      label-position="left"
      label-width="160px" 
      
    >
      <!-- el-form start -->

      <el-form-item label="Server Name" prop="Sname">
        <el-input v-model="forms.Sname" placeholder="Required"></el-input>
      </el-form-item>
      <el-form-item label="Owner Name" prop="Owner_name">
        <el-input v-model="forms.Owner_name" placeholder="Required"></el-input>
      </el-form-item>

      <el-form-item label="Owner Organization" prop="Owner_organization">
        <el-input v-model="forms.Owner_organization" placeholder="Required"></el-input>
      </el-form-item>
      <el-form-item label="Phone Number" prop="Pnum">
        <el-input v-model="forms.Pnum" placeholder="Required"></el-input>
      </el-form-item>
      <el-form-item label="Server Type" prop="Server_type">
        <el-radio-group v-model="forms.Server_type">
          <el-radio label="0">Type 1</el-radio>
          <el-radio label="1">Type 2</el-radio>
          <el-radio label="2">Type 3</el-radio>
          <el-radio label="3">Type 4</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-row gutter="20">
        <el-col :span="12">
      <el-form-item label="Storage" prop="Storage">
        <el-input v-model.number="forms.Storage" type="number" placeholder="Required">
          <template slot="append">MB</template>
        </el-input>
      </el-form-item>
        </el-col>
        <el-col :span="12">
      <el-form-item label="CPU Type" prop="CPU_type">
        <el-select v-model="value" placeholder="Please select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      </el-col>
      </el-row>
      <el-form-item label="Application Comment" prop="Apply_comment">
        <el-input
          v-model="forms.Apply_comment"
          type="textarea"
          :autosize="{ minRows: 2}"
          placeholder="Required"
        ></el-input>
      </el-form-item>

      <!-- form submit button -->

        <el-form-item >
          <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
          <el-button type="danger" @click="resetForm('ruleForm2')">Reset</el-button>
          <el-button type="info" @click="$router.go(-1)">Back</el-button>
          <el-button type="success" @click="fillAll">Test</el-button>
        </el-form-item>
        <!-- </el-form> end -->
   
    </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    // number check
    var checkNum = (rule, value, callback) => {
      if (value < 0) {
        callback(new Error("Please input correct value"));
      } else {
        callback();
      }
    };
    return {
      forms: {
        Sname: "",
        Owner_name: "",
        Owner_organization: "",
        Pnum: "",
        Server_type: "",
        CPU_type: "",
        Storage: "",
        Apply_comment: ""
      },
      options: [
        {
          value: "CPU1",
          label: "CPU1"
        },
        {
          value: "CPU2",
          label: "CPU2"
        },
        {
          value: "CPU3",
          label: "CPU3"
        },
        {
          value: "CPU4",
          label: "CPU4"
        },
        {
          value: "CPU5",
          label: "CPU5"
        }
      ],
      value: "",

      rules: {
        // fields in form
        Sname: [
          {
            required: true,
            message: "Please input the server name you want to apply.",
            trigger: "blur"
          }
        ],
        Owner_name: [
          {
            required: true,
            message: "Please input the owner's name.",
            trigger: "blur"
          }
        ],
        Owner_organization: [
          {
            required: true,
            message: "Please input the owner's organization.",
            trigger: "blur"
          }
        ],
        Pnum: [
          {
            required: true,
            message: "Please input Phone number.",
            trigger: "blur"
          },
          {
            pattern: /^1[34578]\d{9}$/,
            message: "Please the correct Phone number!",
            trigger: "blur"
          }
        ],
        Server_type: [
          {
            required: true,
            message: "Please select the server type",
            trigger: "change"
          }
        ],
        CPU_type: [
          { required: true, message: "Please select CPU", trigger: "change" }
        ],
        Storage: [
          {
            required: true,
            message: "Please input the required storage",
            trigger: "blur"
          },
          {
            validator: checkNum,
            trigger: "blur"
          }
        ],
        Apply_comment: [
          {
            required: true,
            message: "Please input application comment",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    scrollToBottom() {
      window.scrollTo(0, document.documentElement.scrollHeight);
    },
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var submitMes = this.$message({
            message: "Form is submitted successfully.",
            type: "success"
          });
          let ret = "";
          for (let it in this.forms) {
            ret +=
              encodeURIComponent(it) +
              "=" +
              encodeURIComponent(this.forms[it]) +
              "&";
          }
          this.$ajax2({
            url: "/saveYnsioregis",
            type: "post",
            data: ret,
            success: res => {
              if (res.success) {
                submitMes.close();
                this.$message({
                  message: res.message,
                  type: "success"
                });
              }
            },
            error: () => {
              submitMes.close();
              this.$message({
                message: "Submit failed!",
                type: "warning"
              });
            }
          });
        } else {
          //   console.log("error submit!!");
          return false;
        }
      });
    },
    // reset form
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // fill form for test
    fillAll() {
      let randomResult = Math.random() > 0.5;
      this.forms.Sname = randomResult ? "0" : "1";
      this.forms.Pnum = randomResult ? 13318031415 : "13318031419";
      this.forms.Sname = this.forms.Sname ? this.forms.Sname + 1 : 1;
      for (var i in this.forms) {
        if (!this.forms[i]) this.forms[i] = randomResult ? "0" : "1";
      }
    }
  }
};
</script>
