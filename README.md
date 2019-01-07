# yikao
艺考

## 组件
### ft-button
#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| border-color | String | N | transparent |  |
| border-radius | String | N | 8rpx |  |
| color | String | N | #fff | 字体颜色 |
| disabled-color | String | N | #666 | 按钮置灰（点击无效）时的字体色 |
| bg | String | N | #419DF0 | 按钮背景色 |
| disabled-bg | String | N | #EFEFEF | 按钮置灰（点击无效）时的背景色 |
| disabled | Boolean | N | false | 按钮是否置灰 |
| loading | Boolean | N | false | loading状态会在按钮上覆盖一个过渡变化的半透明层 |
| text | String | Y | 空字符 | 按钮上的文字 |
| icon | String | N | 空字符 | 按钮上的icon(图片路径) |
| open-type | String | N | 空字符 | 支持除了2.4.2基础库为止的open-type(除了feedback) |
| app-parameter | String | N | 空字符 | 打开app时传递的参数 |
| extra-data | Object | N | null | 按钮上额外的参数，在bindtap触发时的回调事件里可以访问 |
#### 事件说明
bindtap:
按钮点击后触发，事件对象里可以访问传入的extra-data

### ft-button
#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| score | Number | Y | 0 | 评分 |
| max-score | Number | Y | 5 | 最大评分 |
| size | Number | N | 24 | 星星评分的大小（单位rpx） |
| show-score-text | Boolean | N | true | 是否显示评分数值 |
| color | String | N | #FFC700 | 星星（已填充部分）及评分数值字体颜色 |
| start-color | String | N | 空字符 | 渐变星星的初始颜色 |
| end-color | String | N | 空字符 | 渐变星星的结束颜色 |
| empty-color | String | N | #D7D7D7 | 星星（位填充部分）颜色 |

### ft-avatar
#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| avatar | String | Y | 空字符 | 头像url |
| avatar-bg | String | N | 空字符 | 头像背景色 |
| size | Number | N | 80 | 头像大小（单位rpx） |
| message | Number | N | 0 | 消息个数，默认0时不展示消息条数 |
| message-bg | String | N | #FF3A30 | 消息模块背景色 |

### ft-entrance
#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| required | Boolean | N | false | 是否必填项，必填项则会在左侧出现红色星号 |
| disabled | Boolean | N | false | 是否禁用，true则点击无效，且不会出现点击态 |
| loading | Boolean | N | false | 阻止事件频繁触发（可在网络请求时，loading设置为true来阻止事件再次触发） |
| image | String | N | 空字符 | 在title前插入一个60rpx * 60rpx的图片 |
| sub-image | String | N | 空字符 | 在sub-title之后、icon之前，插入一个60rpx * 60rpx的图片 |
| sub-mask | Boolean | N | false | sub-image上覆盖一个过渡变化的半透明层 |
| title | String | N | 空字符 | 左侧文字 |
| sub-title | String | N | 空字符 | 右侧文字 |
| extra-data | Object | N | null | 额外的参数，在bindtap触发时的回调事件里可以访问 |
| top-border | Boolean | N | false | 上边框 |
| bottom-border | Boolean | N | false | 下边框 |
| next-icon | Boolean | N | true | 是否显示右侧icon |
| spacing | String | N | 30rpx | 左右两侧的padding |
#### 事件说明
bindtap:
按钮点击后触发，事件对象里可以访问传入的extra-data

