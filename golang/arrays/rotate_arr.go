func rotate(nums []int, k int) {

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
