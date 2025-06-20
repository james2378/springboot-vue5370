<template>
	<div style="height: 100%;">
		<index-aside v-if="'vertical' == 'vertical'" :style='{"boxShadow":"0px 0 0px  #e9e7da","padding":"110px 0 60px","borderColor":"#e9e7da","alignItems":"flex-start","bottom":"0","display":"flex","overflow":"auto","top":"0","left":"0","background":"url(http://codegen.caihongy.cn/20221205/033cab9598294b80b530800adab8d3c4.png) no-repeat right top,radial-gradient(circle, rgba(90,133,207,1) 0%, rgba(0,38,103,1) 100%)","borderWidth":"0 0px 0 0","width":"260px","fontSize":"0px","position":"fixed","borderStyle":"solid","height":"100%","zIndex":"1"}'></index-aside>
		<el-main :style='"vertical" == "vertical" ? {"minHeight":"100%","padding":"0","margin":"0 0 0 260px","position":"relative","background":"url(http://codegen.caihongy.cn/20221205/728d8aa4de29437d87191941b499a4d6.png) fixed no-repeat 68% bottom","display":"block"} : {"minHeight":"100%","margin":"0","position":"relative"}'>
			<index-header :style='{"boxShadow":"0 0px 0px rgba(0, 0, 0, .3)","padding":"0 0px 0 0","alignItems":"center","top":"0","left":"-20px","background":"url(http://codegen.caihongy.cn/20221205/efdbe7b33d8947af863e3c59b0aeba15.png) no-repeat center bottom,radial-gradient(circle, rgba(0,38,103,1) 0%, rgba(255,255,255,1) 100%)","display":"flex","width":"calc(100% + 20px)","position":"relative","justifyContent":"space-between","zIndex":"9","height":"88px"}'></index-header>
			<index-aside v-if="'vertical' == 'horizontal'" :style='{"width":"100%","borderColor":"#efefef","borderStyle":"solid","background":"#304156","borderWidth":"0 0 1px 0","height":"auto"}'></index-aside>
			<bread-crumbs :title="title" :style='{"padding":"0px 15px","boxShadow":"0px 0px 0px #bbb","margin":"20px 0 0","borderColor":"#999","flexWrap":"wrap","borderWidth":"0 0 0px 0","background":"none","display":"flex","width":"calc(100% - 0px)","borderStyle":"solid","justifyContent":"space-between"}' class="bread-crumbs"></bread-crumbs>
			<router-view :style='{"padding":"30px"}' class="router-view" style="height:auto;background: transparent;"></router-view>
		</el-main>
	</div>
</template>

<script>
	import IndexAside from '@/components/index/IndexAsideStatic'
	import IndexHeader from '@/components/index/IndexHeader'
	import menu from "@/utils/menu";
	export default {
		components: {
			IndexAside,
			IndexHeader
		},
		data() {
			return {
				menuList: [],
				role: "",
				currentIndex: -2,
				itemMenu: [],
				title: '',
			};
		},
		mounted() {
			let menus = menu.list();
			this.menuList = menus;
			this.role = this.$storage.get("role");
		},
		created() {
			this.init();
		},
		methods: {
			init(){
				this.$nextTick(()=>{
					
				})
			},
			menuHandler(menu) {
				this.$router.push({
					name: menu.tableName
				});
				this.title = menu.menu;
			},
			titleChange(index, menus) {
				this.currentIndex = index
				this.itemMenu = menus;
				console.log(menus);
			},
			homeChange(index) {
				this.itemMenu = [];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
			},
			centerChange(index) {
				this.itemMenu = [{
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "修改密码",
					"tableName": "updatePassword"
				}, {
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "个人信息",
					"tableName": "center"
				}];
				this.title = ""
				this.currentIndex = index
				this.$router.push({
					name: 'home'
				});
				
			}
		}
	};
</script>
<style lang="scss" scoped>
	a {
		text-decoration: none;
		color: #555;
	}

	a:hover {
		background: #00c292;
	}
	
	.el-main {
		padding: 0;
		display: block;
	}

	.nav-list {
		width: 100%;
		margin: 0 auto;
		text-align: left;
		margin-top: 20px;

		.nav-title {
			display: inline-block;
			font-size: 15px;
			color: #333;
			padding: 15px 25px;
			border: none;
		}

		.nav-title.active {
			color: #555;
			cursor: default;
			background-color: #fff;
		}
	}

	.nav-item {
		margin-top: 20px;
		background: #FFFFFF;
		padding: 15px 0;

		.menu {
			padding: 15px 25px;
		}
	}
	
	.detail-form-content {
	    background: transparent;
	}
</style>
