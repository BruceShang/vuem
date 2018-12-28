<template>
  <div>
    <!--居住地址三级联动选项-->
    <section class="showChose" v-show="showChose">
      <section class="address">
        <section class="title">
          <h4>居住地址</h4>
          <span @click="closeAdd()">×</span>
        </section>
        <section class="title">
          <div class="area" @click="provinceSelected()">{{Province?Province:info[province-1].name}}</div>
          <div class="area" @click="citySelected()" :class="City?'':'active'">{{City?City:'请选择'}}</div>
          <div class="area" @click="districtSelected()" :class="District?'':'active'" v-show="City">{{District?District:'请选择'}}</div>
        </section>
        <ul>
          <li class="addList" v-for="(v,k) in info" :key="k" @click="getProvinceId(v.id, v.name, k)" v-show="showProvince" :class="v.selected ? 'active' : ''">{{v.name}}</li>
          <li class="addList" v-for="(v,k) in showCityList" :key="k" @click="getCityId(v.id, v.name, k)" v-show="showCity" :class="v.selected ? 'active' : ''">{{v.name}}</li>
          <li class="addList" v-for="(v,k) in showDistrictList" :key="k" @click="getDistrictId(v.id, v.name, k)" v-show="showDistrict" :class="v.selected ? 'active' : ''">{{v.name}}</li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
  import address from './json/area.min.json'

  export default {
    data() {
      return {
        showChose: false,
        showProvince: true,
        showCity: false,
        showDistrict: false,
        showCityList: false,
        showDistrictList: false,
        province: 1,
        city: 1,
        district: 1,
        GetProvinceId: 2,
        District: false,
        Province: false,
        City: false,
        // v-for循环判断是否为当前
        selected: false,
        info: address,
      }
    },
    watch: {
      showChose(val) {
        if (val && JSON.stringify(this.$store.state.address.place) === '{}') {
          this.queryAllProvinces()
        }
      },
    },
    created() {
    },
    methods: {
      queryAllProvinces() {
        // this.$loading()
        this.$http.get(this.$apis.common.queryAllProvinces).then((res) => {
          if (!res.success) {
            this.$toast(res.message)
            this.$loading.end()
          }
        }).catch((err) => {
          this.$toast(err)
          // this.$loading.end()
        })
      },
      choseAdd() {
        this.showChose = true
      },
      closeAdd() {
        this.showChose = false
      },
      _filter(add, name, code) {
        let result = []
        for (let i = 0; i < add.length; i++) {
          if (code === add[i].id) {
            result = add[i][name]
          }
        }
        return result
      },
      getProvinceId(code, input, index) {
        this.province = code
        this.Province = input
        this.showProvince = false
        this.showCity = true
        this.showDistrict = false
        this.showCityList = this._filter(this.info, 'city', this.province)
        // 点击选择当前
        this.info.map((a) => {
          a.selected = false
          return a
        })
        this.info[index].selected = true
      },
      provinceSelected() {
        // 清除市级和区级列表
        this.showCityList = false
        this.showDistrictList = false
        // 清除市级和区级选项
        this.City = false
        this.District = false
        // 选项页面的切换
        this.showProvince = true
        this.showCity = false
        this.showDistrict = false
      },
      getCityId(code, input, index) {
        this.city = code
        this.City = input
        this.showProvince = false
        this.showCity = false
        this.showDistrict = true
        this.showDistrictList = this._filter(this.showCityList, 'district', this.city)
        // 选择当前添加active
        this.showCityList.map((a) => {
          a.selected = false
          return a
        })
        this.showCityList[index].selected = true
        if (this.showCityList[index].district.length === 0) {
          this.$emit('change', {
            province: this.Province,
            city: this.City,
            district: this.District,
          })
          this.showProvince = false
          this.showCity = true
          this.showDistrict = false
          this.showChose = false
        }
      },
      citySelected() {
        this.showProvince = false
        this.showCity = true
        this.showDistrict = false
      },
      getDistrictId(code, input, index) {
        this.district = code
        this.District = input
        // 选择当前添加active
        this.showDistrictList.map((a) => {
          a.selected = false
          return a
        })
        this.showDistrictList[index].selected = true
        // 选取市区选项之后关闭弹层
        this.showChose = false
        this.$emit('change', {
          province: this.Province,
          city: this.City,
          district: this.District,
        })
      },
      districtSelected() {
        this.showProvince = false
        this.showCity = false
        this.showDistrict = true
      },
    },
  }
</script>
<style scoped lang="stylus">
  .myAddress {
    width: 100%;
    background-color: white;
    border-top: 4px solid rgba(245, 245, 245, 1);
    color: #333;
  }
  
  .myAddress .cont {
    border-bottom: 1px solid rgba(245, 245, 245, 0.8);
  }
  
  .myAddress .cont span {
    display: inline-block;
    font-size: 0.28rem;
    color: #333;
    line-height: 0.88rem;
    margin-left: 0.32rem;
  }
  
  .myAddress .cont section {
    float: left;
  }
  
  .myAddress .cont p {
    display: inline-block;
    font-size: 0.28rem;
    color: #333333;
    line-height: 0.88rem;
    margin-left: 1rem;
  }
  
  .myAddress .cont .pic2 {
    float: right;
    width: 0.14rem;
    height: 0.24rem;
    margin: 0.32rem 0.32rem 0.32rem 0;
  }
  
  .myAddress .cont p.text {
    margin-left: 0.72rem;
  }
  
  .showChose {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 120;
    background: rgba(77, 82, 113, 0.8);
  }
  
  .address {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 121;
    background: #fff;
    width: 100%;
    height: 700px;
  }
  
  .title h4 {
    display: inline-block;
    margin-left: 3.2rem;
    font-size: 0.32rem;
    line-height: 0.88rem;
    font-weight: normal;
    color: #999;
  }
  
  .title span {
    margin: 0.42rem 0 0 2.2rem;
    font-size: 0.45rem;
    line-height: 0.34rem;
    color: #D8D8D8;
  }
  
  .area {
    display: inline-block;
    font-size: 0.24rem;
    line-height: 0.88rem;
    margin-left: 0.42rem;
    color: #333;
  }
  
  .addList {
    width: 100%;
    padding-left: 0.32rem;
    font-size: 0.34rem;
    line-height: 0.88rem;
    color: #333;
  }
  /* 修改的格式 */
  
  .address ul {
    width: 95%;
    height: 100%;
    max-height: 4.4rem;
    overflow: auto;
  }
  
  .address ul li {
    margin-left: 5%;
  }
  
  .address .title .active {
    color: #0071B8;
    border-bottom: 0.02rem solid #0071B8;
  }
  
  .address ul .active {
    color: #0071B8;
  }
</style>