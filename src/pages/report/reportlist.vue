<style scoped>
  @import "reportlist.css";
</style>
<template>
    <div>
      <div class="title">检查信息</div>
      <div class="report_container" style="margin: 0 1rem">
        <ul class="report_list">
          <li class = "report_li" v-for = "report in reportlist" @click="$router.push('/reportdetail')">
            <div class="report_left">
              <img class="shop_img" src="./report.png">
            </div>
            <div class="shop_right">
              <ul>
                <li>
                  <span>用户姓名 : {{report.patientName}}</span>
                </li>
                <li>
                  <span >检查时间 : {{report.reportDatetime}}</span>
                </li>
                <li>
                  <span>检查地点 : {{report.orgName}}</span>
                </li>
              </ul>
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
          datatime : "",
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
          getReportList(phone).then(res => {
            //遍历截取时间的时分秒
            for (this.report of res.data) {
              this.datatime = this.report.reportDatetime.substr(0, 10);
              this.report.reportDatetime = this.datatime;
            }
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


