func removeDuplicates(nums []int) int {
	var count, index = 0, 0
	var lastNum = nums[0]
	var hasDeleted, noDelete = false, true

	if len(nums) == 1 {
		return 1
	}

	for i := 1; i < len(nums); i++ {
		if nums[i] == lastNum {
			count++
			if count < 2 {
				index++
				continue
			}
			hasDelete = true
		} else {
			count = 0
		}
	}

	if noDelete {
		return len(nums)
	}
	return index
}

func old_2() int {
	var count, index = 0, 0
	var hasDeleted = false

	if len(nums) == 1 {
		return 1
	}

	for i := 1; i < len(nums); i++ {
		if nums[index] == nums[i] {
			count++
			if count >= 2 && !hasDeleted {
				if count == 2 {
					index++
				}
				hasDelete = true
				continue
			}
			index++
		} else {
			count = 0
			if hasDeleted {
				nums[index] = nums[i]
			}
			index++
		}
	}
	if !hasDeleted {
		return len(nums)
	}
	return index

}
func old_1() int {
	//var count = 0
	//var index = 0
	//var hasDeleted = false

	//for i := 1; i < len(nums); i++ {
	//	//if same
	//	if nums[index] == nums[i] {
	//		//increase count
	//		if count < 2 {
	//			// Doesn't matter since they the same
	//			nums[index] = nums[i]
	//			if i < len(nums)-1 {
	//				index++
	//			}
	//		}
	//		count++
	//		if count >= 2 {
	//			hasDeleted = true
	//		}
	//		continue
	//	} else {
	//		if count > 1 || hasDeleted {
	//			hasDeleted = true
	//			nums[index] = nums[i]
	//		} else {
	//			nums[index] = nums[i-1]
	//		}

	//		count = 0
	//		index++

	//	}

	//}
	//if !hasDeleted {
	//	return len(nums)
	//}
	//return index

}
