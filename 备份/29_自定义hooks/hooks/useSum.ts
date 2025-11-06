import { ref, reactive, onMounted, computed } from 'vue'
import axios from 'axios'

export default function () {
    // 数据
    let sum = ref(0);
    let bigSum = computed(() => {
        return sum.value * 10
    })

    // 方法
    function add() {
        sum.value++;
    }

    onMounted(() => {
        add()
    })

    // 向外部提供东西
    return { sum, add, bigSum }
}

