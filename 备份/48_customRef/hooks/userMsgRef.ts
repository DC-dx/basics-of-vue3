import { ref, customRef } from 'vue'

export default function (initValue: string, delay: any) {

	// 使用vue提供的默认ref定义响应式数据，数据一变化，页面就更新
	// let msg = ref('你好')

	// 使用Vue提供第二点customRef定义响应式数据
	let timer: number
	// track(跟踪) trigger(触发)
	let msg = customRef((track, trigger) => {
		return {
			// get何时调用？——msg被读取时
			get() {
				// 告诉vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新
				track()
				return initValue
			},
			// set何时调用？——msg被修改时
			set(value) {
				clearTimeout(timer)
				timer = setTimeout(() => {
					// console.log('set', value)
					initValue = value
					trigger()	// 通知Vue一下数据msg变化率
				}, delay)
			}
		}
	})

	return { msg }
}

