func removeDuplicates(nums []int) int {
	var count = 0
	var index = 0
	var hasDeleted = false

	for i := 1; i < len(nums); i++ {
		//if same
		if nums[index] == nums[i] {
			//increase count
			if count < 2 {
				// Doesn't matter since they the same
				nums[index] = nums[i]
				if i < len(nums)-1 {
					index++
				}
			} else {
				hasDeleted = true
			}
			count++
			continue
		} else {
			if count > 1 || hasDeleted {
				hasDeleted = true
				nums[index] = nums[i]
			} else {
				nums[index] = nums[i-1]
			}

			count = 0
			index++

		}

	}
	if !hasDeleted {
		return len(nums)
	}
	return index
}
