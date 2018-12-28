/* eslint-disable */
import Cropper from 'cropperjs'

export default {
  install( Vue ){
    //初始化方法
    Vue.prototype.initilize = function ( opt ) {
      const self = this
      this.options = opt
      //创建dom
      this.createElement()
      this.resultObj = opt.resultObj
      //初始化裁剪对象
      this.cropper = new Cropper( this.preview , {
        aspectRatio : opt.aspectRatio || 1 ,
        autoCropArea : opt.autoCropArea || 0.8 ,
        viewMode : 1,
        guides : opt.aspectRatio == 'Free' ? false : true ,
        cropBoxResizable : opt.aspectRatio == 'Free' ? false : true ,
        cropBoxMovable : opt.aspectRatio == 'Free' ? false : true ,
        dragCrop : opt.aspectRatio == 'Free' ? false : true ,
        background : false,
        checkOrientation : true ,
        checkCrossOrigin : true ,
        zoomable : false,
        zoomOnWheel : false ,
        center : false ,
        toggleDragModeOnDblclick : false ,
        ready : () => {
          // console.log(self.cropper.rotate(90))
          if( opt.aspectRatio == 'Free' ){
            const cropBox = self.cropper.cropBox
            cropBox.querySelector('span.cropper-view-box').style.outline = 'none'
            self.cropper.disable()
          }
        },
      })
    }
    //创建一些必要的DOM，用于图片裁剪
    Vue.prototype.createElement = function () {
      //初始化图片为空对象
      this.preview = null

      let str = '<div><img id="clip_image" src="originUrl"></div><button type="button" id="cancel_clip">取消</button><button type="button" id="clip_button">确定</button>'
      str+= '<div class="crop_loading"></div>'
      str+= '<div class="crop_success"></div></div>'

      const body = document.getElementsByTagName('body')[0]
      this.reagion = document.createElement('div')
      this.reagion.id = 'clip_container'
      this.reagion.className = 'container'
      this.reagion.innerHTML = str
      //添加创建好的DOM元素
      body.appendChild(this.reagion)
      this.preview = document.getElementById('clip_image')

      //绑定一些方法
      this.initFunction()
    }
    //初始化一些函数绑定
    Vue.prototype.initFunction = function  () {
      const self =this
      this.clickBtn = document.getElementById('clip_button')
      this.cancelBtn = document.getElementById('cancel_clip')
      //确定事件
      
      //取消事件
      this.addEvent( this.cancelBtn , 'click' , function () {
        self.destoried()
      })
      //清空input的值
      this.addEvent( this.fileObj , 'click' , function () {
        this.value = ''
      })
    }

    //外部接口，用于input['file']对象change时的调用
    Vue.prototype.clip = function ( e , opt , callback ) {
      const self = this

      this.fileObj = e.srcElement

      const files = e.target.files || e.dataTransfer.files

      if (!files.length) return false  //不是图片直接返回

      //调用初始化方法
      this.initilize( opt )

      //获取图片文件资源
      this.picValue = files[0]

      //调用方法转成url格式
      this.originUrl = this.getObjectURL( this.picValue )

      //每次替换图片要重新得到新的url
      if(this.cropper){
        this.cropper.replace(this.originUrl)
      }
      const b = callback
      this.addEvent( this.clickBtn , 'click' , function () {
        self.crop((res)=>{
          b(res)
        })
      })
    }
    //图片转码方法
    Vue.prototype.getObjectURL = function(file) {
      let url = null 
      if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) 
      } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) 
      } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) 
      }
      return url 
    }
    //点击确定进行裁剪
    Vue.prototype.crop  = function (callback) {
      const self = this
      const image = new Image()
      let croppedCanvas
      let roundedCanvas
      const a = callback
      // Crop
      document.querySelector('.crop_loading').style.display = 'block'

      setTimeout((callback)=>{
        croppedCanvas = self.cropper.getCroppedCanvas()
        // Round
        roundedCanvas = self.getRoundedCanvas(croppedCanvas)

        const imgData = roundedCanvas.toDataURL()
        image.src = imgData

        //判断图片是否大于100k,不大于直接上传，反之压缩
        if( imgData.length < (100 * 1024) ){
          self.resultObj.src = imgData
          //图片上传
          self.postImg( imgData ).then(()=>{
              a(imgData)
            })

        }else{
          image.onload = function (callback) {
            //压缩处理
            const data = self.compress( image , self.Orientation )
            self.resultObj.src = data
            //图片上传
            self.postImg( data ).then(()=>{
              a(data)
            })
          }
          
        }
      },20)
      
    }
    //获取裁剪图片资源
    Vue.prototype.getRoundedCanvas = function(sourceCanvas) {

      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      const width = sourceCanvas.width
      const height = sourceCanvas.height

      canvas.width = width
      canvas.height = height

      context.imageSmoothingEnabled = true
      context.drawImage(sourceCanvas, 0, 0, width, height)
      context.globalCompositeOperation = 'destination-in'
      context.beginPath()
      context.rect(0 , 0 , width , height )
      context.fill()

      return canvas
    }
    //销毁原来的对象
    Vue.prototype.destoried = function () {
      const self = this
      //移除事件
      this.removeEvent( this.clickBtn , 'click' , null )
      this.removeEvent( this.cancelBtn , 'click' , null )
      this.removeEvent( this.fileObj , 'click' , null )
      //移除裁剪框
      this.reagion.parentNode.removeChild(this.reagion)

      //销毁裁剪对象
      this.cropper.destroy()
      this.cropper = null
    }
    //图片上传
    Vue.prototype.postImg = function( imageData ) {
      //这边写图片的上传
      const self = this
      return new Promise(function(resolve){
        self.destoried()
        window.setTimeout( function () {
          document.querySelector('.crop_loading').style.display = 'none'
          document.querySelector('.crop_success').style.display = 'block'
          //裁剪完后摧毁对象
            self.destoried()
        },3000)
        resolve()
      })
    }

    //图片旋转
    Vue.prototype.rotateImg = function( img ,  direction , canvas ) {
      //最小与最大旋转方向，图片旋转4次后回到原方向
      const min_step = 0
      const max_step = 3
      if (img == null )return
      //img的高度和宽度不能在img元素隐藏后获取，否则会出错
      const height = img.height
      const width = img.width
      let step = 2
      if (step == null) {
        step = min_step
      }
      if ( direction == 'right') {
        step++
        //旋转到原位置，即超过最大值
        step > max_step && (step = min_step)
      } else {
        step--
        step < min_step && (step = max_step)
      }
      //旋转角度以弧度值为参数
      const degree = step * 90 * Math.PI / 180
      const ctx = canvas.getContext('2d')
      switch (step) {
        case 0:
          canvas.width = width
          canvas.height = height
          ctx.drawImage(img, 0, 0)
          break
        case 1:
          canvas.width = height
          canvas.height = width
          ctx.rotate(degree)
          ctx.drawImage(img, 0, -height)
          break
        case 2:
          canvas.width = width
          canvas.height = height
          ctx.rotate(degree)
          ctx.drawImage(img, -width, -height)
          break
        case 3:
          canvas.width = height
          canvas.height = width
          ctx.rotate(degree)
          ctx.drawImage(img, -width, 0)
          break
      }
    }

    //图片压缩
    Vue.prototype.compress = function ( img , Orientation ) {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext('2d')
      //瓦片canvas
      const tCanvas = document.createElement("canvas")
      const tctx = tCanvas.getContext("2d")
      let initSize = img.src.length
      let width = img.width
      let height = img.height

      //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
      let ratio
      if ((ratio = width * height / 4000000) > 1) {
        console.log("大于400万像素")
        ratio = Math.sqrt(ratio)
        width /= ratio
        height /= ratio
      } else {
        ratio = 1
      }
      canvas.width = width
      canvas.height = height
      //        铺底色
      ctx.fillStyle = "#fff"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      //如果图片像素大于100万则使用瓦片绘制
      let count
      if ((count = width * height / 1000000) > 1) {
        count = ~~(Math.sqrt(count) + 1) //计算要分成多少块瓦片
        //            计算每块瓦片的宽和高
        let nw = ~~(width / count)
        let nh = ~~(height / count)
        tCanvas.width = nw
        tCanvas.height = nh
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            tctx.drawImage(img, i*nw*ratio, j*nh*ratio, nw*ratio, nh*ratio, 0, 0, nw, nh)
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh)
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height)
      }
      //修复ios上传图片的时候 被旋转的问题
      if( Orientation != "" && Orientation != 1){
        switch(Orientation){
          case 6://需要顺时针（向左）90度旋转
            this.rotateImg(img,'left',canvas)
            break
          case 8://需要逆时针（向右）90度旋转
            this.rotateImg(img,'right',canvas)
            break
          case 3://需要180度旋转
            this.rotateImg(img,'right',canvas)//转两次
            this.rotateImg(img,'right',canvas)
            break
        }
      }
      //进行最小压缩
      const ndata = canvas.toDataURL( 'image/jpeg' , 0.1)
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0

      return ndata
    }

    //添加事件
    Vue.prototype.addEvent = function ( obj , type , fn ) {
      if( obj.addEventListener ){
        obj.addEventListener( type , fn , false )
      }else{
        obj.attachEvent(`on${type}`, fn)
      }
    }
    //移除事件
    Vue.prototype.removeEvent = function ( obj , type , fn ) {
      if( obj.removeEventListener ){
        obj.removeEventListener( type , fn , false )
      }else{
        obj.detachEvent(`on${type}`, fn)
      }
    }
  }
}
