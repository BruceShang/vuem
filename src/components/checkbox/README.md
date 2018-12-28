# CheckBox

> 复选框

## Usage

```html
 <we-checkbox 
   name="foo"
   value="apple" 
   id="apple" 
   checked 
   v-model="checkboxlist">
 </we-checkbox>
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
