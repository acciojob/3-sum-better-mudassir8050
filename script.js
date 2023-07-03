function threeSum(nums, target) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);
  
  let closestSum = Infinity;
  
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === target) {
        // If the sum is equal to the target, return the target itself
        return sum;
      } else if (sum < target) {
        // If the sum is less than the target, move the left pointer to the right
        left++;
      } else {
        // If the sum is greater than the target, move the right pointer to the left
        right--;
      }
      
      // Update the closest sum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
    }
  }
  
  return closestSum;
}
