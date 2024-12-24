func removeDuplicates(nums []int) int {
	var count = 0
	var index = 0
	var hasDeleted = false
	for i := 1; i < len(nums); i++ {
		if i == len(nums)-1 {
			break
		}
		//if same
		if nums[index] == nums[i] {
			//increase count
			if count < 2 {
				nums[index] = nums[i-1]
				index++
			}
			count++
			continue
		} else {
			if count > 1 {
				nums[index] = nums[i]
			} else {
				nums[index] = nums[i-1]
			}
		}

		count = 0
		index++

	}
	return index
}
