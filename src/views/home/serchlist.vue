<template>
	<div>
		<!---->
		<div class="home-page" style="background: #FFFFFF;">
			<div class="sticky-box" style="padding: 0vw 4vw 0vw 4vw;">
				<div data-v-6e01231c="" class="search-box" style="display: flex;justify-content: space-between;">
					<a href="index.vue" class="jiantou" style="width: 0.25rem;height: 0.25rem;margin-top: 0.2rem;">
						<img src="../../assets/image/list/zuoshangjiantou.png" alt="" />
					</a>
					<div data-v-6e01231c="" class="search" style="width: 8rem;">
						<form data-v-6e01231c="" action="javascript:return true;" class="input">
							<input data-v-6e01231c="" type="text" v-model="text" placeholder="请输入搜索关键字"  />
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
						<div data-v-6e01231c="" class="button">搜索</div>
					</div>
				</div>
			</div>

			<div class="scroll-wrapper">
				<div role="feed" class="van-list">
					<div class="grid-box" ></div>
					<div class="scroll-list" style="background: #FFFFFF;">
						<!-- <van-tabs v-model="cid" @click="getGoodsList"><van-tab v-for="item in getListCid" :name="item.id" :key="item.id" :title="item.name"></van-tab></van-tabs> -->
						<div
							style="width: 100%;height: 1rem;line-height: 1.4rem; font-size: 0.38rem; display: flex;justify-content: space-around;margin-top: 0.3rem;background: #EEEEEE;"
						>
							<div :class="['acts', current == '0' ? 'act' : '']" @click="sortHandle(0)" id="0">综合</div>
							<div :class="['acts', current == '1' ? 'act' : '']" @click="sortHandle(1)" id="1">销量</div>
							<div :class="['acts', current == '2' ? 'act' : '']" @click="sortHandle(2)" id="2">优惠率</div>
							<div style="display: flex;justify-content: space-between;">
								<div :class="['acts', current == '3' ? 'act' : '']" @click="sortHandle(3)" id="3">价格</div>
								<div style="line-height:1.7rem ;margin-left: 0.2rem;"><img src="../../assets/image/list/download.png" alt="" /></div>
							</div>
						</div>
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
											<div data-v-70c74c50="" class="img" @click="">
												<lazy-component><img v-lazy="item.pict_url" data-v-70c74c50="" /></lazy-component>
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
	<!--	</div>-->
</template>

<script>
import Vue from 'vue';
import { PullRefresh, List, Dialog, Lazyload, Toast } from 'vant';

Vue.use(PullRefresh, Lazyload, Toast, List, Dialog);
Vue.use(Lazyload, {
	lazyComponent: true,
	preLoad: 1.3
	// attempt: 1,
});
export default {
	data() {
		return {
			loading: false,
			count: 0,
			isLoading: true,
			current: 0,
			// cid:this.$route.query.id,
			text:this.$route.query.text,
			sortField: [{
				name: 'multi', direction: 'desc'
			},{
				name: 'volume', direction: 'desc'
			},{
				name: 'rate', direction: 'desc'
			},{
				name: 'price', direction: 'desc'
			}],
			acts: true,
			getListCid: [],
			getList: [],
			getListmethod: [],
			currentPages: 1,
			// total: this.total,
			finished: false, // 数据是否请求结束，结束会先显示- 没有更多了 -

			isUpLoading: false, // 上拉加载
			upFinished: false, // 上拉加载完毕
			offset: 10 // 滚动条与底部距离小于 offset 时触发load事件
		};
	},

	created() {
		
	},

	mounted() {
		window.addEventListener('scroll', this.scrollToTop);
	},
	destroyed() {
		window.removeEventListener('scroll', this.scrollToTop);
	},
	methods: {
		search(cid){
			// this.getList=[];
			this.axios
				.get('https://apitry.3seconds.net/fddj/api/chepin/goods/search', {
					params:{
						page:this.currentPages,
						q:this.text,
						size:12,
						cid:cid,
					}
				})
				.then(res => {
					if (res.data.code == 0) {
						this.isUpLoading = false;
						this.getList = res.data.data.data;
						
						if (res.data.data.current_page == res.data.data.last_page) {
							this.upFinished = true;
						}
						// toast.clear();
					}
				});
		},
		//列表商品获取-----get
		getCateCid() {
			this.axios.get('https://apitry.3seconds.net/fddj/api/chepin/category/list', {}).then(res => {
				window.console.log(res);
				if (res.data.code == 0) {
					let List = res.data.data;
					this.getListCid = List;
					// this.cid = this.getListCid[0].id;
					this.goodsList(this.cid, this.current);
					window.console.log('getListCid', List);
				}
			});
		},
		//列表商品获取    cid=name  -----get
		// getGoodsList(name) {
		// 	window.console.log(name)
		// 	this.currentPages = 1
		// 	this.cid = name;
		// 	this.getList = [];
		// 	this.goodsList(name, this.current);
		// },
		
		sortHandle(current){
			this.currentPages = 1
			this.getList = [];
			if(current == 3){
				this.sortField[current].direction  = this.sortField[current].direction  == 'desc'?'asc':'desc';
			}
			this.current = current;
			this.goodsList(this.cid, this.current);
		},
		//获取cid对应的商品列表
		goodsList(cid, current) {
			// let toast = Toast.loading({
			// 	message: '加载中...',
			// 	forbidClick: true
			// });
			this.axios
				.get('https://apitry.3seconds.net/fddj/api/chepin/goods/list?', {
					params: {
						page: this.currentPages,
						size: 12,
						cid: cid,
						sort: this.sortField[current].name,
						direction: this.sortField[current].direction
					}
				})
				.then(res => {
					if (res.data.code == 0) {
						this.loading = false;
						this.isUpLoading = false;
						this.getList = this.getList.concat(res.data.data.data);

						if (res.data.data.current_page == res.data.data.last_page) {
							this.upFinished = true;
						}
						// toast.clear();
					}
				});
		},
		// 上拉加载请求方法
		onLoadList() {
			window.console.log(121212);
			this.currentPages++;
			this.goodsList(this.cid, this.current);
			this.isUpLoading = true;
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
		onRefresh() {
			setTimeout(() => {
				this.isLoading = false;
				this.currentPages = 1;
				this.getList = [];
				this.goodsList(this.cid, this.current)
			}, 1000);
		}
	},
	beforeMount() {
	
		this.search();
		this.getCateCid();
		this.goodsList();
	}
};
</script>

<style scoped>
.grid-box {
	/* height: 67vw; */
}
.iconPlace {
	color: #000000;
	/* color: firebrick; */
}

li[data-v-b1af7fb8] {
	list-style: none;
}

.Menubox[data-v-b1af7fb8] {
	height: 3.06rem;
	width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
}

a[data-v-b1af7fb8]:link,
a[data-v-b1af7fb8]:visited {
	color: #555555;
	text-decoration: none;
}

a[data-v-b1af7fb8]:hover {
	color: #000000;
	/* text-decoration: underline; */
	text-decoration: none;
}

.home-page .sticky-box {
	position: -webkit-sticky;
	/* width: 8rem; */
	height: 1.5rem;
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	background: #ffffff;
	/* padding: 5vw 4vw 0vw 4vw; */
	/* background: #fff; */
}

.Menubox[data-v-b1af7fb8] {
	height: 3.06rem;
	width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
}

.Menubox ul[data-v-b1af7fb8] {
	list-style: none;
	padding: 0;
	height: 1.5rem;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	white-space: nowrap;
}

.Menubox[data-v-b1af7fb8][data-v-b1af7fb8] {
	height: 1.5rem;
	width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
}

.Menubox ul li.hover[data-v-b1af7fb8][data-v-b1af7fb8] {
	font-size: 0.5rem;
	display: block;
	color: #fff;
	/* width: 100%; */
	height: 0.8rem;
	line-height: 0.8rem;
	border-radius: 0.4rem;
	background-color: #fc8525;
}

.Menubox ul li[data-v-b1af7fb8] {
	/* height:1.375rem; */
	height: 1.5rem;
	line-height: 1.5rem;
	display: block;
	cursor: pointer;
	text-align: center;
	font-weight: bold;
	float: left;
	padding: 0 0.5rem;
	font-size: 0.5rem;
	font-weight: 500;
}

a[data-v-b1af7fb8][data-v-b1af7fb8]:link,
a[data-v-b1af7fb8][data-v-b1af7fb8]:visited {
	color: #555555;
	text-decoration: none;
}

/* .Menubox ul li:hover{
    border-bottom:1px solid #FE013C;
    } */
/* .Menubox ul li:nth-child(1) {
    margin-left:0.7rem;
    } */
.Menubox ul li.hover[data-v-b1af7fb8] {
	font-size: 1rem;
	display: block;
	color: #fff;
	background-color: #fc8525;
}

.Menubox img.qqq[data-v-b1af7fb8] {
	position: absolute;
	right: 0.5rem;
	top: 4rem;
	width: 1.1875rem;
	height: 1.1875rem;
	margin-left: 0.5rem;
	float: right;
}

.Menubox img[data-v-b1af7fb8] {
	width: 1.1875rem;
	height: 1.1875rem;
	margin-left: 0.5rem;
	float: right;
}

a[title='站长统计'][data-v-b1af7fb8] {
	display: none;
}

.info[data-v-b1af7fb8] {
	display: none;
	width: 100%;
	/* height:21.25rem; */
	position: absolute;
	top: 5.8rem;
	z-index: 2;
	background-color: #fff;
	/* border-radius:0.625rem; */
	/* display:flex;
        justify-content:space-around;
        align-items:center; */
}

.info dl[data-v-b1af7fb8] {
	/* border-radius:0.625rem; */
	width: 25%;
	height: 4.875rem;
	float: left;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-ms-flex-pack: distribute;
	justify-content: space-around;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin: 1rem 0;
}

.info dl img[data-v-b1af7fb8] {
	width: 3.1875rem;
	height: 3.625rem;
}

.info dl dd[data-v-b1af7fb8] {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	font-size: 13px;
	color: #000000;
	overflow: hidden;
	width: 70%;
}

.acts {
	color: #000000;
}

.act {
	color: crimson;
}

.van-tabs__line {
	display: none !important;
}
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
</style>
