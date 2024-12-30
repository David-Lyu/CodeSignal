func rotate(nums []int, k int) {

	var temp = 0
	for i := len(nums) - 1; i >= len(nums)-k-1; i-- {
		temp = nums[i]
		nums[i] = nums[i-k]
		nums[i-k] = temp
	}
}
