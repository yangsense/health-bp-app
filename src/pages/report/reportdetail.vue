<style scoped>
  @import url("reportdetail.css");
</style>
<template>
    <div>
      <span class="returnlast" @click="$router.back()"><img src="./returnlast.png"/></span>
      <div class="title">
        <span>报告详情</span>
      </div>
      <div class="report_detail">
        <div class="user_image"></div>
        <ul style="">
          <li style="font-size: 1.5em;color: #000">
            {{reportDetaile.patientName}}
            {{reportDetaile.patientAge}}
            <span v-show="reportDetaile.patienttypeCode == 'INP'">住院</span>
            <span v-show="reportDetaile.patienttypeCode == 'OP'">门诊</span>
            <span v-show="reportDetaile.patienttypeCode == 'EP'">急诊</span>
            <span v-show="reportDetaile.patienttypeCode == 'HP'">体检</span>
            <span v-show="reportDetaile.patienttypeCode == 'OHP'">外院</span>
            <span v-show="reportDetaile.patienttypeCode == 'RP'">远程会诊</span>
          </li>
          <li>
            <span>ID 号 : {{reportDetaile.patientId}}</span>
          </li>
          <li>
            <span>检查号 : {{reportDetaile.studyAccnumber}}</span>
          </li>
        </ul>
        <div style="border-top: 1px dashed #606266;margin-top: 1em;border-bottom: 10px solid gray">
          <p style="margin: 1em auto">
            项目 : {{reportDetaile.studyItemdesc}}
          </p>
        </div>

        <div style="border-left: 1px solid #4F94CD;min-height: 400px;margin-top: 1em;">
          <ul style="margin-left: 1em">
            <li style="border-bottom: 1px dashed #606266;">
              <p style="margin-bottom: 0.5em">
                <span style="font-size: 1.5em;color: #606266">报告 : </span>{{reportDetaile.reportDatetime}}
              </p>
            </li>
            <li>
              <p>影像描述 : </p>
            </li>
            <li>
              {{reportDetaile.reportExam}}
            </li>
            <li>
              <p>诊断意见 : </p>
            </li>
            <li>
              {{reportDetaile.reportResult}}
            </li>
            <li>
              <button class="showReportImage" @click="showReportImage(reportDetaile.studyAccnumber)">
                查看影像
              </button>
            </li>
          </ul>
        </div>
      </div>

    </div>
</template>
<script>

  import {getReportDetail} from '@/api/index'

    export default {
      name: "repoprtdetail",
      data(){
        return{
          studyAccnumber:"",
          reportDetaile: {
            patientName: '',
            patientSex: '',
            patientAge: '',
            patienttypeCode: '',
            patientId: '',
            studyAccnumber: '',
            studyItemdesc: '',
            reportExam: '',
            reportResult: '',
            reportdoc: '',
            reportDatetime: '',
            reportverifydoc: '',
            reportVerifydatetime: ''
          }
        }
      },
      methods: {
        getReportDetail () {
          console.log('studyAccnumber', this.$route.query.studyAccnumber)
          getReportDetail(this.$route.query.studyAccnumber).then(res => {
            console.log('reportDetail ===', res.data)
            this.reportDetaile = res.data
          })
        },
        showReportImage (accnumber) {
          this.studyAccnumber = accnumber;
          this.imgUrl = "http://healthbp.cn:8989/DicomServer/studyReportImageInfo.html?accessionnumber=" + this.studyAccnumber + "&studyUID=&seriesUID=&serieskey=0";

          window.open(this.imgUrl, "_blank")
        }
      },
      mounted () {
        this.getReportDetail()
      }
    }
</script>


