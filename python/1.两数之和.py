"""
       时间复杂度变成O(n)
思路： 一遍循环遍历，将数保存在字典中，然后利用差查找。字典查找的时间复杂度是O(1)
"""


def twoSum(nums, target):
    hashmap = {}
    for index, num in enumerate(nums):
        another = target - num
        if another in hashmap:
            return [index, hashmap[another]]
        hashmap[num] = index


if __name__ == '__main__':
    nums = [2, 7, 11, 15]
    target = 9
    print(twoSum(nums, target))
