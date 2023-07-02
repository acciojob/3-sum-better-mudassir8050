function threeSumClosest(nums, target) {
  // Sort the input array in ascending order
  nums.sort((a, b) => a - b);

  let closestSum = Infinity;

  // Iterate through the array, fixing the first element as a.
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // Update closestSum if the current sum is closer to the target
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }

      if (sum === target) {
        // Found an exact match, return the target sum
        return sum;
      } else if (sum < target) {
        // Sum is smaller than the target, move the left pointer
        left++;
      } else {
        // Sum is larger than the target, move the right pointer
        right--;
      }
    }
  }

  return closestSum;
}
