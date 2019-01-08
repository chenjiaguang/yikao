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

### ft-star-box
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
| extra-data | Object | N | null | 额外的参数，在bindtap触发时的回调事件里可以访问 |
#### 事件说明
bindtap:
按钮点击后触发，事件对象里可以访问传入的extra-data

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

### ft-banners
#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| index | Number | N | 0 | 初始展示的banner |
| banners | Array | Y | [] | banner的数组，数组元素：{key:xxx,url:xxx,title:xxx},其中key和url必填，每项的key唯一 |
| duration | Number | N | 300 | banner切换的时间 |
| autoplay | Boolean | N | true | 是否自动播放 |
| interval | Number | N | 3000 | 一张banner停留时间 |
| circular | Boolean | N | true | 是否循环播放 |
| width | String | N | '100%' | banner宽度 |
| height | String | N | '302rpx' | banner高（包括指示器在内） |
| indicator-pos | String | N | 'in' | 支持in和out，表示只是器在banner内展示还是banner外展示 |
| indicator-color | String | N | '#333' | 指示器颜色，选中的为0.9不透明度，未选中为0.4 |
| spacing | Number | N | 16 | banner间隔 |
| previous-margin | String | N | '0rpx | 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值 |
| next-margin | String | N | '0rpx | 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值 |
| border-radius | String | N | '16rpx' | 每项banner的圆角 |
| extra-data | Object | N | null | 额外的参数，在bindtap触发时的回调事件里可以访问 |
#### 事件说明
bindtap:
按钮点击后触发，事件对象里可以访问传入的extra-data

### ft-tabs
#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| index | Number | N | 0 | 初始展示的tab |
| header-separator | Boolean | N | true | 是否有横细线分割header和body |
| tabs | Array | Y | [] | tab的数组，数组元素：{title:String,list:[],page:{},loaded:Boolean,loading:boolean},其中title唯一 |
| color | String | N | #333 | tab头部（header）文字颜色 |
| current-color | String | N | #FF9500 | tab头部（header）当前项文字颜色 |
| type | String | N | 1 | tabs类型，目前支持1和2，影响header的样式 |
| noMoreText | String | N | 没有更多了~ | 最后一页时底部展示的文案 |
| firstPage | Number | N | 0 | 页码从多少算起，默认为0，即第一页时pn=0 |
#### 事件说明
bindtabchange:
当前选中的tab变化时触发
bindfetchlist:
(在第一次加载该tab或滚动到底部并且不是最后一页，并且当前tab没有在加载数据时才触发)
在事件对象里可以访问当前tab的索引

### ft-list-loader
#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| visible | Boolean | Y | true | 控制是否显示loader，默认显示 |
| font-size | Number | N | 28 | 字体大小，接受rpx |
| color | String | N | #999 | 字体颜色 |
| bg | String | N | transparent | 背景颜色 |

### ft-list-footer
#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| page | Object | Y | {} | 页码信息，根据页码信息显示不同状态，page里必须包含pn和isend字段 |
| loaded | Boolean | N | true | loaded为false时不显示 |
| loading | Boolean | N | false | true底部显示正在加载文案，false显示上拉加载更多文案 或 没有更多文案 |
| showNoMore | Boolean | N | true | 最后一页时是否显示底部文案 |
| noMoreText | String | N | 没有更多了~ | 最后一页时的文案 |
| bg | String | N | transparent | 背景颜色 |
| firstPage | Number | N | 0 | 最后一页从多少开始，默认0，即第一页时pn=0 |

### ft-iphone-bottom-adapter
#### 其他说明
iphone底部下巴适配

