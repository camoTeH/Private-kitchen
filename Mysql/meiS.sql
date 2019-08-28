SET NAMES UTF8;
DROP DATABASE IF EXISTS msj;
CREATE DATABASE msj CHARSET=UTF8;
USE msj;

/*用户信息*/
/**用户信息**/
CREATE TABLE msj_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

/**用户信息**/
INSERT INTO msj_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '李华', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '王丽', '0'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '王小二', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');
-- 个人资料
CREATE TABLE msj_data(
  Did INT PRIMARY KEY AUTO_INCREMENT,
  Dname VARCHAR(32),#昵称
  Dbirthday VARCHAR(32),#生日
  Dhometown VARCHAR(32),#家乡
  Dlocation VARCHAR(32),#所在地
  Doccupation VARCHAR(32),#职业
  Dsignature VARCHAR(32),#签名
  Demail VARCHAR(32)#电子邮箱
);
-- 个人空间

CREATE TABLE msj_space(
  Sid INT PRIMARY KEY AUTO_INCREMENT,
  Sname VARCHAR(32),#昵称
  Sgrade INT,#等级
  Sintegration INT,#积分
  Sex INT,#经验值
  Sjoin_time VARCHAR(128),   #加入时间
  Sattention INT,      #关注
  Sfans INT,                  #粉丝
  Spublish_recipes INT,  #发布菜谱
  Sphysique VARCHAR(32)  #体质
);
-- 菜谱视频
CREATE TABLE msj_video(
  Vid INT PRIMARY KEY AUTO_INCREMENT,
  Vname VARCHAR(32),#菜名
  Vgrade INT,#播放量
  Vintegration INT,#时间
  Vvideo_content VARCHAR(32) #视频内容
);
INSERT INTO msj_video VALUES
(NULL,'左宗棠鸡',11,'01:23','1、鸡腿肉280g切丁，姜片5g，蒜末5g，小米椒适量切段，甜椒20g切块 
2、倒入鸡腿肉，蛋黄一个，盐2g，玉米淀粉25g，搅拌均匀 
3、放入白砂糖15g，白醋15g，生抽8g，淀粉5g，辣椒油10g搅拌均匀 
4、起锅倒入食用油200ml，大火烧至七成熟，放入鸡肉，大火炸至表面金黄 
5、另起锅倒入食用油5ml，倒入姜片，蒜末，小米椒，大火爆香 
6、倒入鸡肉，翻炒均匀，倒入调料 翻炒均匀，倒入甜椒'),
(NULL,'紫薯山药糕',11,'00:48','视频内容
1、紫薯200克切段，山药150克切段
2、起锅隔水蒸熟，剥皮
3、倒入紫薯，加糖粉10克，捣成泥
4、倒入山药，糖粉10克，捣成泥
5、取山药泥和紫薯泥各25克团成团，取模具按压成型');

-- 今日推荐
CREATE TABLE msj_rijian(
  Rid INT PRIMARY KEY AUTO_INCREMENT,
  Rname VARCHAR(32),#菜名
  Rcontent VARCHAR(128)#详细内容
);
INSERT INTO msj_rijian VALUES
(NULL,'贝壳馒头','只用一双筷子就能搞定的贝壳馒头，蓬松暄软，大人小孩都爱吃。'),
(NULL,'砂锅菜花','要说这锅菜全是常见的食材，一年四季都可以把时令蔬菜巧搭配。有时菜不多时，也可以把几种凑一锅，味道香、种类多，还能满足家里人的不同喜好！'),
(NULL,'芒果奇亚籽椰奶布丁','这款芒果奇亚籽椰奶布丁，食材很简单也很简单天然健康，吃起来的口感是QQ滑滑的，让甜品也可以吃得健康又美味，让夏日没有食欲的你，是不是也想来上一勺呀！'),
(NULL,'凉拌莴笋','夏日炎炎，一道快手凉拌菜，你一定想学会！'),
(NULL,'烤冷面卷饭','劲道的烤冷面遇到颗粒分明的炒饭，饱腹又好吃，新鲜的胚芽米米香浓郁，炒饭特别好吃');

  -- 每月介绍
  CREATE TABLE msj_yuejian(
    Yfruits VARCHAR(6),
    Yvegetables VARCHAR(6),
    Ygrain VARCHAR(6),
    Yfresh VARCHAR(6)
  );
-- 最新菜谱
CREATE TABLE msj_zuixin(
  Zid INT PRIMARY KEY AUTO_INCREMENT,
  Zname VARCHAR(32),      #菜名
  Zjieshao VARCHAR(255)   #介绍
);
INSERT INTO msj_zuixin VALUES(NULL,'手工芋圆烧仙草','夏日很爱烧仙草，有时会加在奶茶里，这次做一款芋圆烧仙草。芋圆如果喜欢Q一些就多加些木薯粉。汤底可以根据自己喜好调整。'),
(NULL,'红薯饼','想要做一个带着一些甜味的食物，一会就做一大盘，好吃的不得了！'),
(NULL,'干贝淡菜小米粥','喝点儿粥，汤汤水水的东西比较滋润。顺便把冻着的淡菜消耗掉。'),
(NULL,'火腿水果三明治','精致的BRUNO轻食机，让西餐来的更容易，在家就可以轻松品尝到简单美味的三明治。'),
(NULL,'杏鲍菇黑椒牛排粒','牛肉中含有大量的铁元素，极易被人体消化吸收。'),
(NULL,'煎馒头片','馒头做为传统的中式面点，也能吃出新花样。'),
(NULL,'鸡蛋羹','蒸比炒更健康，早餐来一碗，幸福一整天。'),
(NULL,'酸黄瓜豇豆角','口感脆嫩，酸爽清口，酸中有甜，甜中带酸。');
-- 健康新闻
CREATE TABLE msj_xinwen(
  Xjiangkang1 VARCHAR(32),#新闻模块
  Xjiangkang2 VARCHAR(64),
  Xjiangkang3 VARCHAR(64),
  Xjiangkang4 VARCHAR(64)
);
-- 饮食健康 第二模块
CREATE TABLE msj_health_Content(
  Hid INT PRIMARY KEY AUTO_INCREMENT,
  Hjieshao VARCHAR(64),
  Hpingjia INT,
  Hrenqi INT
);
INSERT INTO msj_health VALUES(NULL,'启航未来|君顶酒庄品牌升级新品上市发布会',0,3594),
(NULL,'启航未来|君顶酒庄品牌升级新品上市发布会',0,3594),
(NULL,'免疫力下降吃什么好？',0,2608),
(NULL,'宝宝益生菌可以每天吃吗？',0,2195),
(NULL,'办公室必备零食有哪些？营养软糖不可少！',0,4023),
(NULL,'宝宝辅食南瓜胡萝卜泥',0,4774),
(NULL,'为什么网红们都爱丘比沙拉汁',53,1932),
(NULL,'考前饮食三大忌，这些坑你不要踩',19,5823),
(NULL,'冻鱼保鲜保营养吗?',76,11932),
(NULL,'年末应酬多，喝酒前后饮食有讲究',16,7337),
(NULL,'哪些啤酒谣言还在飞?',25,5064),
(NULL,'睡觉打鼾吃什么好？',14,7971),
(NULL,'凉拌或油炸四季豆易中毒',12,7476);
-- 菜系
CREATE TABLE msj_Recipes(
  Hid INT PRIMARY KEY AUTO_INCREMENT,
  Cuisine VARCHAR(32)
);

INSERT INTO msj_Recipes VALUES
(NULL,'家常菜谱'),
(NULL,'中华菜系');
-- 菜谱分类
CREATE TABLE msj_jiachang_classification(
  classification VARCHAR(12)
);
INSERT INTO msj_jiachang_classification VALUES
('家常菜'),
('凉菜'),
('素食'),
('晚餐'),
('私家菜'),
('热菜'),
('海鲜'),
('孕妇'),
('早餐'),
('午餐'),
('甜点点心'),
('汤粥'),
('宝宝食谱-婴儿食谱'),
('糕点主食'),
('微波炉');
CREATE TABLE msj_zhonghua_classification(
  classification VARCHAR(12)
);
INSERT INTO msj_zhonghua_classification VALUES 
('川菜'),
('粤菜'),
('东北菜'),
('湘菜'),
('鲁菜'),
('浙菜'),
('湖北菜'),
('清蒸');

CREATE TABLE msj_Health(
  classification VARCHAR(12)
);
INSERT INTO msj_jiankang_Health VALUES 
('饮食健康'),
('功能性调理');
CREATE TABLE msj_jiankang_Health(
  classification VARCHAR(12)
);
INSERT INTO msj_jiankang_Health VALUES
('饮食小常识'),
('美容瘦身'),
('食品安全'),
('养生妙方'),
('饮食禁忌'),
('中医保健'),
('母婴健康饮食'),
('饮食新闻');
CREATE TABLE msj_tiaoli_Health(
  classification VARCHAR(12)
);
INSERT INTO msj_tiaoli_Health VALUES
('清热去火'),
('减肥'),
('祛斑'),
('乌发'),
('滋阴补肾'),
('健脾开胃'),
('消化不良'),
('亲热解毒'),
('补阳壮阳'),
('增肥');
CREATE TABLE msj_A_complete_list_of_recipes(
  Aid INT PRIMARY KEY AUTO_INCREMENT,
  Dish_name VARCHAR(32),  #菜名
  Evaluation INT, #评价
  Popularity INT #人气
);
INSERT INTO msj_A_complete_list_of_recipes VALUES
(NULL,'糖醋里脊',0,0),
(NULL,'苔菜花生仁',0,0),
(NULL,'海贝鸡蛋羹',0,0),
(NULL,'杂蔬牛肉粒',0,0),
(NULL,'减肥餐五彩龙利鱼',0,0),
(NULL,'香肠玉米青豆饭',0,0),
(NULL,'弹出三文鱼丁',0,0),
(NULL,'吮指鸡翅',0,0),
(NULL,'咖喱鸡翅',0,0),
(NULL,'咖喱炖牛肉',0,0),
(NULL,'蒜蓉粉丝蒸丝瓜',0,0),
(NULL,'野山椒炒肥肠',0,0),
(NULL,'红烧排骨',0,0),
(NULL,'蒜蓉粉丝虾',0,0),
(NULL,'辣炒鲜豌豆',0,0),
(NULL,'尖椒土豆片',0,0),
(NULL,'丝瓜炒鸡蛋',0,0),
(NULL,'孜然肉片',0,0);
