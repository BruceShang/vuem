# Radio

> 单选按钮

## Usage

```html
  <we-radio 
    name="payment" 
    value="wechatPay" 
    checked 
    v-model="payment">
  </we-radio>
```
### props

属性字段 | 类型 | 默认值 | 是否必填
---|---|---|---
id | string | checkbox-id-${seft.id} | 否
class-name|	string|	null|否
name|	string|	null|是
v-model	|boolean or array|	undefined|否
value	|string or boolean	|null|是
checked|	boolean	|false|否
disabled|	boolean|	false|否