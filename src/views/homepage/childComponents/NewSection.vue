<template>
  <div class="mod-news-section clearfix">
      <!-- 精彩赛事 -->
    <div class="wrap-news">
      <div class="news-box">
        <a href="" class="news-more clickstat"></a>
        <h2 class="news-title ellipsis">03.21-03.27一周精彩赛事推荐</h2>
        <div class="news-main">
          <ul class="news-list">
            <li class="news-item">【逆战】凛冬要塞主播速通激情来袭</li>
            <li class="news-item">【原创】《医是医二是二》爆笑来袭</li>
            <li class="news-item">火影忍者手游新版本大讲堂第一期</li>
          </ul>
        </div>
        <div class="hotTag">
          <a href="" class="link">政策SAQ</a>
          <a href="" class="link">商业广告互动规范</a>
          <a href="" class="link">平台广告规范</a>
          <a href="" class="link">反对作弊竞争手段公告</a>
        </div>
      </div>
    </div>
    <!-- 公告 -->
    <div class="program-preview-box">
      <div class="preview-hd">
        <h2 class="title">
          <span class="hy-column-icon hy-column-program"></span>公告
        </h2>
        <ul class="content">
            <li>
                <h3 class="content-title">云顶之弈公开赛</h3>
            </li>
            <li>
                <span class="content-notice">公告</span>
                <a herf='javascript:;' class="content-text">第三届英雄联盟云顶之弈公开赛火热来袭</a>
            </li>
            <li>
                <span class="content-news">新闻</span>
                <a herf='javascript:;' class="content-text">您的商店活动已上线</a>
            </li>
            <li>                   
                <span class="content-notice">公告</span>
                <a herf='javascript:;' class="content-text">周免英雄更新</a>
            </li>
            <li>                
                <span class="content-news">视频</span>
                <a herf='javascript:;' class="content-text">加强玩家行为系统的分量</a>
            </li>
            <li>            
                <span class="content-notice">公告</span>
                <a herf='javascript:;' class="content-text">关于道具更新的公告</a>
            </li>
        </ul>
      </div>
    </div>
    <!-- 社区 -->
    <div class="program-preview-box">
      <div class="preview-hd">
        <h2 class="title">
          <span class="hy-column-icon hy-column-program"></span>社区
        </h2>
                <ul class="content">
            <li>
                <h3 class="content-title">新版至臻与原始版对比</h3>
            </li>
            <li>
                <span class="content-notice">公告</span>
                <a herf='javascript:;' class="content-text">大战外星人？幻灵战队集合</a>
            </li>
            <li>
                <span class="content-news">新闻</span>
                <a herf='javascript:;' class="content-text">超炫酷大片制作！</a>
            </li>
            <li>                   
                <span class="content-notice">公告</span>
                <a herf='javascript:;' class="content-text">幻灵战队系列和灰烬骑士炫彩名</a>
            </li>
            <li>                
                <span class="content-notice">公告</span>
                <a herf='javascript:;' class="content-text">加强玩家行为系统的分量</a>
            </li>
            <li>            
                <span class="content-news">新闻</span>
                <a herf='javascript:;' class="content-text">关于道具更新的公告</a>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>

<style scoped>
.content {
    font-size: 6px;
}
.content .content-title {
    color: #0da0b4;
    font-size: 20px;
    text-align: center;
    margin-top: -8px;
}
.content li {
    margin-bottom: 9px;
}
.content li a {
    color: #424242;
}
.content .content-news {
    border: 1px solid #c5ab86;
    padding: 4px;
    color: #bb9a6c;
}
.content .content-notice {
    border: 1px solid #69c5d2;
    padding: 4px;
    color: #1da6ba;
}
.content .content-text {
    margin-left: 10px;
    text-decoration: none;
}
.mod-news-section {
  display: flex;
  width: 980px;
  height: 217px;
  margin: 30px auto 0;
  justify-content: space-between;
}
.clearfix:after,
.clearfix:before {
  content: "";
  line-height: 0;
  display: table;
}
.wrap-news {
  position: relative;
  float: left;
  width: 342px;
  margin: 0 16px;
  height: 100%;
  background-color: #fff;
  border-radius: 6px;
}
.news-box {
  width: 100%;
  height: 100%;
}
.news-box .news-more {
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  width: 31px;
  height: 31px;
  cursor: pointer;
  background: url(https://a.msstatic.com/huya/main3/widget/index-news/img/icon-more_d97d2.png)
    no-repeat;
}
.news-box .news-title {
  margin-top: 20px;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}
.ellipsis {
  width: auto;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  text-align: left;
}
.news-box .news-main .news-list {
  height: 80px;
  overflow: hidden;
  vertical-align: top;
}
.news-box .news-main .news-item {
  height: 28px;
  line-height: 28px;
  padding: 0 18px 0 28px;
  font-size: 14px;
  overflow: hidden;
  zoom: 1;
  background: url(https://a.msstatic.com/huya/main3/widget/index-news/img/icon-link_228be.png)
    no-repeat 15px;
}
.news-box .hotTag {
  margin-top: 15px;
  height: 72px;
  overflow: hidden;
  font-size: 0;
  padding: 0 15px;
}
.news-box .hotTag .link {
  display: inline-block;
  height: 26px;
  padding: 0 12px;
  margin: 0 10px 10px 0;
  line-height: 26px;
  color: #666;
  font-size: 12px;
  background: #f4f5f8;
  border-radius: 15px;
}
.program-preview-box,
.program-preview-box * {
  box-sizing: border-box;
}
.program-preview-box {
  width: 290px;
  height: 217px;
  float: left;
  background-color: #fff;
  border-radius: 6px;
}
.program-preview-box .preview-hd {
  margin: 16px 0 0 14px;
  height: 26px;
}
.program-preview-box .preview-hd .title {
  font-size: 18px;
  line-height: 26px;
  color: #333;
}
.program-preview-box .hy-column-program {
  float: left;
  width: 26px;
  height: 26px;
  margin: -1px 8px 0 0;
  background: url(https://a.msstatic.com/huya/main3/widget/program-preview/img/column-program_14fb0.png);
}

</style>
