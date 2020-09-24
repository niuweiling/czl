<template>
	<div>
		<div id="app">
			<div class="home-page">
				<div class="scroll-wrapper">
					<div role="feed" class="van-list">
						<div class="home-bj">
							<div class="sticky-box" style="position: relative;top:-1.99vw;">
								<div data-v-6e01231c="" class="search-box">
									<div data-v-6e01231c="" class="search">
										<form data-v-6e01231c="" action="javascript:return true;" class="input">
											<input  data-v-6e01231c="" @keyup="searchHandle" type="search"  v-model="text" placeholder="请输入搜索关键字" />
											<img
												data-v-6e01231c=""
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEM0U0NUM2RDA2MDIxMUVBOTFBN0JBMDI4RkEwRDU3NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEM0U0NUM2RTA2MDIxMUVBOTFBN0JBMDI4RkEwRDU3NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzRTQ1QzZCMDYwMjExRUE5MUE3QkEwMjhGQTBENTc0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzRTQ1QzZDMDYwMjExRUE5MUE3QkEwMjhGQTBENTc0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dUijXAAAAjlJREFUeNqslUtIVGEUx7/xMQgORAvRxWDhxkpNF4KrdoFCD0VXCbUpUlAwXaUQ6EZGNyY4NFNtCtSNG7WgQHLhInJVvgoEUTFCBM1Vmuj4P/G/cvi8d5yuc+AH93uc8/9e95xA/MWQ8bCLoBFUg3JQAPbBT7AMPoIRsOMV4HFzi8ly6c8BXaAdhKyxILhC7oAIGAC9YM9NJMNqXwZfwDOX4G4W4txZ+iYVCIMZcF31LYEOcJU7E66xb0nNK6Nv2EtAHMfUhL+glY5yBD94/sJ39slYM/ijFjjGWKcEnoAqFfwWiIKjJMcjY3Fwmz6GMdpsAXktT1WfXO6USd0+8cgc62TME4G74ALbi1zV/1qMvoax7mmBWjXxNTj0IXBIX8dqtEClGvhg/Jv2rdAC+Wpg5RwC2jdfC+yb9FjQ60f7pdpF5xC4pL43tcCC2+X4sJvq+6sWmFQDD0Gmj+Di88jtwkVgAuyyXQqafAg00dcw1qh8vIxF/wlsM+06NmBtN5kFmKoHVV9E1wgnFz1nynVew3vQ4pLO7QfyiqnBqSuzjHUq2UmxaAAbSkRK3RyTVzHIBrmghH3feGfaRuzCoyuaBL8BxlVNKLFXdIb1cxefvSraKlOubPt3CgFlTo966kEusNBLwDmuCH86KTrvwDo4IOvsa+WcbtaELfrncTxkH5FtOyw60RR2sgbqwDR3IdVuGNQHEomEr99W3riLPQBvVPt+hkmvvQV9uqxmmfSbPJB53u/osQADAEALd73IvxwMAAAAAElFTkSuQmCC"
												alt=""
											/>
											<img
												data-v-6e01231c=""
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Njk0OEU2MTA2MDMxMUVBQTRBMEIxRkM2NDZGQjkxNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3Njk0OEU2MjA2MDMxMUVBQTRBMEIxRkM2NDZGQjkxNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc2OTQ4RTVGMDYwMzExRUFBNEEwQjFGQzY0NkZCOTE2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc2OTQ4RTYwMDYwMzExRUFBNEEwQjFGQzY0NkZCOTE2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+z4klWAAAAjtJREFUeNqslr1r21AUxa9FhxI8JVMnb23qL9nYEEKSmiaQDh1a/C94aNbu7dQsHbuldPE/0JIsgWRIbKcEPHjQkrSd/DEbPJh0s3qPuM84ytPTE/WBH4h3r86RnqT3lGo2mxSjp8xbZp/JMmsyPmZumHPmmPljMnlkqNWYT8xORP2JsMd8Zq6Yj0xb1+xoxh4zR8ylIUSnHTnnSDyMQavMBfOOSVFypeTcC/HSBq0wp8wm/b82xWtFF/SF2aDlaUM87wXhwTdo+WqI9zzoUPdMstksVavVWDf0oDfimR2q19tltsMd6XSaKpUKOY5Dvu9Tr9eLDMnlcjSbzWg4HNJ0Og23wNvFHdV1Bjih1WoFBvl8PggNC2MqBL2aEKW6Y/pWRqNRZBiOMaZC0GvQC0zduqkDBu12m2q1WmCMaYRUCGoxIdAzZ2HtihTmHoYwLhQKASoENQutObbvKQwXrxzHliHz72hs01gulymTyQRTB3CMMUuNEfQrrqtUKlGxWJxPl5pGjKFmod+OLO/GENd1g7vodDo0GAwCcIwx1CzCrhD0I0mIUsKw7wjymJ+6qnoeMOz3+w/qGFNh6rXXCN6e2mE/yKZ1b73zPC+48slkEnmpCEM9oseXXXe+qGL7/abrNIVY9MCzFd6P3jPdJW4RXfF8sPHdMa+XFNYVr7uofwZ8vC+ZrzK/SeXLubvhhUC3BP1lDiTwOkHItQQcLN6JzX8dXpAtWd3fMK+Y56EfyFvmjDmJW2H+CTAA7g8GZkkEmmEAAAAASUVORK5CYII="
												alt=""
												style="display: none;"
											/>
										</form>
										
										<div data-v-6e01231c="" class="button" @click="search(text)">搜索</div>
									</div>
								</div>
							</div>
							<div class="grid-box" style="box-sizing: border-box;">
								<div class="grid">
									<div v-for="(item, index) in categoryList" :key="index" class="grid-item" @click="shouji(item.id)">
										<img  :src="item.icon_url" class="grid-img" />
										<p class="omit">{{ item.name }}</p>
									</div>
								</div>
							</div>
						</div>
						<div class="scroll-list">
							<van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="background: #EEEEEE;">
								<van-list 
								v-model="isUpLoading" 
								:finished="upFinished" 
								:immediate-check="false" 
								:offset="100" finished-text="我是有底线的"
								 @load="onLoadList">
									<div data-v-70c74c50="" class="goods-list">
										<div data-v-70c74c50="" class="goods-list-item" v-for="(item, index) in getList" :key="index">
											<div data-v-70c74c50="" class="content">
												<div data-v-70c74c50="" class="img"  @click="toDetail(item)">
													<lazy-component><img v-lazy="item.pict_url" :src="item.pict_url" data-v-70c74c50="" /></lazy-component>
												</div>
												<div data-v-70c74c50="" class="text">
													<div data-v-70c74c50="" class="title">{{ item.short_title }}</div>
													<div data-v-70c74c50="" class="number">
														<span data-v-70c74c50="">
															¥
															<span data-v-70c74c50="">{{ item.price }}</span>
														</span>
														<span data-v-70c74c50="">{{ item.coupon_amount }}元券</span>
													</div>
													<div data-v-70c74c50="" class="coupon-box">
														<del data-v-70c74c50="" class="coupon">¥{{ item.zk_final_price }}</del>
														<div data-v-70c74c50="" class="label">热销{{ item.volume }}件</div>
													</div>
													<div data-v-70c74c50="" class="name">
														<img v-if="item.user_type == 1" data-v-70c74c50="" src="../list/tianmao.png" alt="" class="tmall-img" />
														<img v-else data-v-70c74c50="" src="../list/taobao.png" alt="" class="tb-img" />
														<span data-v-70c74c50="" class="omit">{{ item.shop_title }}</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</van-list>
							</van-pull-refresh>
						</div>
						<!-- <div class="van-list__finished-text" style="background: #EEEEEE;">我是有底线的</div> -->
						<div class="van-list__placeholder"></div>
					</div>
				</div>
				<a href="https://h5.m.taobao.com/alicare/index.html?spm=a1z51.27486447.0.0&amp;from=rtr4xBdW35" target="_blank" class="fixed">
					<img src="/img/ico-service.08e2c605.png" alt="" />
				</a>
				<div class="go-top">
					<img
						@click="backTop"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ODQyMzcxNi0zOGMyLTdkNDEtYWI4MS02NTJhMTYxMGVmNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzE4MDNBNTUxN0RDMTFFQTlBN0NGQzhCMjUzMDQxREIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzE4MDNBNTQxN0RDMTFFQTlBN0NGQzhCMjUzMDQxREIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4NDIzNzE2LTM4YzItN2Q0MS1hYjgxLTY1MmExNjEwZWY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0ODQyMzcxNi0zOGMyLTdkNDEtYWI4MS02NTJhMTYxMGVmNDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4rbZj3AAAEnUlEQVR42uycTU8TURSGb0uRQkRr5EskQQUXfiwQVhgiSAzBj+gCXfE3XODKSAjhj7AyLESNhJgIanAFshBMFJQQJCIYG40woG09bzjTjKXTztB2emd63+RlCi1t58mZe86dmXsCJSUlIk8KkmvJR8kVvD1MLiUXk/HFIuQdssbbX+Tv5A3ervJzjsvnIDg/+SS5kdxArsTnZ/ieMfI6eZG8QP5MjnoFXDW5iXyeXJ7jz0JEviPPktfcCA6RdJp8iVyXp6FghfyK/IEjU3pwZxlYjZBDX8kvyfOygsMAf418SsgpjH9PObFIAS5AbidfJBcJuYUsPUWeJP/NJ7gj5DtcVrhJKGMekn/kAxzGsptcj7lRqP8ek+ecAufjwb8jC3VYvoVsO8HJI5ZLcAB1g9wivKVpThyWi+eAzcr/JhezXlMLJ7ZRq/D8NiLtukeh6WriffRlE1ybBw9Ps8hryxa4M+ROUTjq5H3OCBzqtFseyJ52E+At3vd9gcNgedvFdVomCnJhX7QfcJfJx0XhqpYZ2AJXw3PPQhcYHLMKDsf4VRsZ18sCg+5kY3zAZA5an61PDofDfcFg0NELG5qmbYdCoaEsvV09M5lLFXF+noNmez7odnUkskqcq57jbKK0Vw+NUZcYca2Kj6lazQ5VpN86xcdUdcJwwtYI7oJik1bNieD8PL5Jo+Hh4XZYMnBn9dmEXo7gCnuZTNB6enri2b23t3dSkq8GRifIi3rENcoGLRqNxmA8lizyGo0R1yAbtEgkol++C+jRJ0nkNehjG+4OqpQJ2tDQ0EgxC48lizywKvVzivXJBK2/vz9eaOKxZPDAqhaHapWs0IzwsO3r6+uR5LCtArgKGaANDg6ODAwMmF4clgxeBcCFZIcmIbwQwB1yAzTJ4B0KcFZ1BTSJ4JUBXLGboEkCrxjgStwGTQJ4BwIOhrcvm9CSwXOyHsUZ4HtORV1XV1fl+Pj4upXXapp2H9tgMPjAyuu7u7srx8bG1h3itgNwd+nBQclO39gG57B+Y8q1JZTsahPgfioOtvUT4MKKg22FAW5DcbCt7wD3TXGwrTWAwz3/McXCssBqVc+q64qHZYHVln6xZlHxsKxP+KGDW1A8LOujEdwSijrFJH3hy6zi4LCqbl5xSat5ZvXfvSNvFZe0ijMygvvCVkquFSOfxPvjphQfU70x/pII7r2q6ZJqg9mYgsPKuQnFaY9eiIRVhX6TzLGsWMW1nKzi8JvMxZ4JhzrGmEnb1XaeoUWZxZ65fKoV0leExSWIHtZr8vNkT/jTHNerBQxtlRkIu+BQIePefq0AoWm875H9gIPQl2NUFNb5uhjvc8qeJFYWus2nClkPasLKvN3qCkF0xZouAGgzYrcHicgWOIQv+nLMehga9u2J1WHJzppU1DSPPBp508JGz5F0dZzp/wjVIkg1pRIONqUySrVBy0Cq8V6GUq0eM5RqLprJ+wrVzjZjIXE0cyTmek3sJkfWjMjxmR0nW3YjcZwQuW3ZvZTqjIZbwSWqlKOxmhMLlkaV89/xpfT1F3/EboN4RBNacod5gF/jqMrLrbj/BBgARz7IfV6TL0EAAAAASUVORK5CYII="
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { PullRefresh,Lazyload,Toast} from 'vant';

Vue.use(PullRefresh,Lazyload,Toast);
Vue.use(Lazyload, {
  lazyComponent: false,
  preLoad: 1.3,
  // attempt: 1,
});
export default {
	data() {
		return {
			count: 0,
			isLoading: true,
			categoryList: [],
			goodsList: [],
			getList:[],
			isLoading: true,
			currentPages: 1,
			isUpLoading: false, // 上拉加载
			upFinished: false, // 上拉加载完毕
			offset: 10 // 滚动条与底部距离小于 offset 时触发load事件
		};
	},
	mounted() {
		window.addEventListener('scroll', this.scrollToTop);
	},
	destroyed() {
		window.removeEventListener('scroll', this.scrollToTop);
	},
	methods: {
		searchHandle(e){
			if(e.keyCode == 13){
				this.search()
			}
		},
		toDetail(item){
			window.console.log(item);
			if(item.coupon_share_url != ''){
				window.location.href=  item.coupon_share_url
			}else{
				window.location.href=  item.url
			}
		},
		//搜索
		search(){
			if(this.text){
				this.$router.push({
					path:'/list',
					query:{
						text:this.text
					}
				})
			}
			
		},
		onRefresh() {
			setTimeout(() => {
				this.isLoading = false;
				this.currentPages = 1;
				this.getList = [];
				this.getHomeGoods()
			}, 1000);
		},
		// 上拉加载请求方法
		onLoadList() {
			this.currentPages++;
			this.getHomeGoods();
			this.isUpLoading = true;
		},
		
		//获取首页分类----get
		getHomeList() {
			let toast = Toast.loading({
				message: '加载中...',
				forbidClick: true
			});
			this.axios
				.get(process.env.VUE_APP_APIHOST+'/api/chepin/category/list', {
					// params:{
					// 	page:1,
					// 	size:12
					// }
				})
				.then(res => {
					window.console.log(res);
					if (res.data.code == 0) {
						let List = res.data.data;
						toast.clear()
						this.categoryList = List;
						window.console.log('categoryList', this.categoryList);
					}
				});
		},
		
		//获取cid对应的商品列表
		getHomeGoods() {
			// let toast = Toast.loading({
			// 	message: '加载中...',
			// 	forbidClick: true
			// });
			this.axios
				.get(process.env.VUE_APP_APIHOST+'/api/chepin/goods/recommend', {
					params: {
						page: this.currentPages,
						size: 12,
					}
				})
				.then(res => {
					if (res.data.code == 0) {
						this.isUpLoading = false;
						this.getList = this.getList.concat(res.data.data.data);
		
						if (res.data.data.current_page == res.data.data.last_page) {
							this.upFinished = true;
						}
						// toast.clear();
					}
				});
		},
		shouji(id) {
			this.$router.push({
				path: 'list',
				query: {
				    id: id,
					
				},
				
			});
			// window.console.log(id)
		},
		backTop() {
			const that = this;
			let timer = setInterval(() => {
				let ispeed = Math.floor(-that.scrollTop / 5);
				document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
				if (that.scrollTop === 0) {
					clearInterval(timer);
				}
			}, 16);
		},
		// 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
		scrollToTop() {
			const that = this;
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			that.scrollTop = scrollTop;
			if (that.scrollTop > 60) {
				that.btnFlag = true;
			} else {
				that.btnFlag = false;
			}
		},
	},
	beforeMount() {
		this.getHomeList();
		this.getHomeGoods();
	}
};
</script>

<style scoped>
.home-bj {
	width: 100vw; 
	height: 67vw;
	position: relative;
	top: 0;
	left: 0;
	background-image: url(https://oss.3seconds.net/chepin/images/index-bg.jpg);
	background-size: 100%;
	background-repeat: no-repeat;
		box-sizing: border-box;
	z-index: 999;
}
/* .title{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	} */

.goods-list .goods-list-item .content .text .title {
	height: 7.7vw;
	font-size: 3.467vw;
	font-weight: 700;
	line-height: 4.267vw;
	color: #333;
	padding-bottom: 1.333vw;
}
.title {
	overflow: hidden;
}
.search .input input[data-v-6e01231c] {
    display: -webkit-box;
    display: -ms-flexbox;
    /* display: flex; */
	position: absolute;
	left: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 110%;
    height: 9.333vw;
	line-height: 9.333vw;
    font-size: 4vw;
    color: #666;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4.667vw 0 0 4.667vw;
    padding: 0 8vw;
    background: #eee;
}
.omit{
	height: 3.5vw;
}
</style>
