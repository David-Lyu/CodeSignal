func rotate(nums []int, k int) {
	var size = len(nums)
	if size == 1 || size == k {
		return
	}
	if size < k {
		k = k % size
		// var temp int
		// for i:=0;i<size/2;i++ {
		//     temp = nums[size-1-i]
		//     nums[size-1-i] = nums[i]
		//     nums[i] = temp
		// }
		// return
	}
	var temp = make([]int, size)
	copy(temp, nums)
	for i := 0; i < len(nums); i++ {
		if i < k {
			nums[i] = temp[len(temp)-k+i]
		} else {
			nums[i] = temp[i-k]
		}
	}
}

func old2(nums []int, k int) {
	temp := 0
	for i := len(nums) - 1; i >= k; i-- {
		temp = nums[i]
		nums[i] = nums[i-k]
		nums[i-k] = temp
	}
	var mod = len(nums) % k
	if mod == 0 {
		for i := 0; i < mod; i++ {
			temp = nums[i]
			nums[i] = nums[k-i]
			nums[k-i] = temp
		}
	}

}
func old1(nums []int, k int) {
	var temp = 0
	if k >= len(nums)/2.0 {
		for i := len(nums) - 1; k > 0; i-- {
			temp = nums[i]
			nums[i] = nums[k-1]
			nums[k-1] = temp
			k--
		}
	} else {
		//slice array
		var size = len(nums)
		for i := 0; i < size-1; i++ {
			if k-i-1 >= 0 {
				temp = nums[size-i-1]
				nums[size-i-1] = nums[k]
				nums[k] = temp
			} else {

			}
		}
	}
}
