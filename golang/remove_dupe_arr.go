
func removeDuplicates(nums []int) int {
	var count = 0
	// use count and replace
	var index = 0
	for i := 1; i < len(nums); i++ {
		if count > 2 {
			num[index] = num[i]
			continue
		}
		if num[index] == num[i] {

			count++
			index++
		} else {
			count = 0
			continue
		}
	}
	return index
}
