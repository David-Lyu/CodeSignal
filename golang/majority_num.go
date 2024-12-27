func majorityElement(nums []int) int {
	var hash = make(map[int]int)
	var majority = 0
	var num = 0
	for i := 0; i < len(nums); i++ {
		hash[nums[i]] = hash[nums[i]] + 1
	}

	for key, value := range hash {
		if value > num {
			num = value
			majority = key
		}
	}
	return majority
}
