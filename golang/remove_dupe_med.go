func removeDupicates(nums []int) int {
	var count = 0
	var index = 0
	for i := 1; i < len(nums); i++ {
		//if same
		if nums[index] == num[i] {
			//if count is greater 2 remove index
			//increase count
			if count > 1 {
				nums[index] = nums[i]
				index++
			}
			count++
			index++
			continue
		}
		// need this when index is incremented for count
		// else nums[index] should equal i-1
		nums[index] = nums[i]

	}
	return index
}
