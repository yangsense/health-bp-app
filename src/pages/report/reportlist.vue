<style scoped>
  @import "reportlist.css";
</style>
<template>
    <div>
      <div class="title">检查报告列表</div>
      <div class="report_container">
        <ul class="report_list">
          <li class = "report_li" v-for = "report in reportlist ">
            <div class="shop_left">
              <img class="shop_img" src="report.png">
            </div>
            <div class="shop_right">
              <h4>{{report.studyItemdesc}}</h4>
            </div>
          </li>

        </ul>

      </div>
    </div>
</template>

<script>

  import {getReportList} from '@/api/index'

    export default {
      name: "reportlist",
      data() {
        return {
          reportlist: [],
          report: {
            patientName: "",
            reportDatetime: "",
            studyItemdesc: "",
            orgName: "",
          }
        }
      },
      methods: {
        //接受user信息并获取报告列表,
        getTableData() {
          var phone = localStorage.getItem("phone");
          console.log("用户手机号为 ===", phone)
          getReportList(phone).then(res => {
            console.log(res.data);
            this.reportlist = res.data;
          })
        },
        init() {
          this.getTableData()
        }
      },
      mounted() {
        this.init();
      }
    }
</script>


