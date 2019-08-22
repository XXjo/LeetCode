
"""
使用hash，并用set存储排好序的数字对，这样就可以去除重复
"""

def findPairs(nums, k):
    map = {}
    res = set()
    if k < 0:
        return 0
    for index, value in enumerate(nums):
        if (value + k) in map:
            res.add((min(value,value + k), max(value,value + k)))
        if (value - k) in map:
            res.add((min(value, value - k), max(value, value - k)))
        map[value] = index
    return len(res)

if __name__ == '__main__':
    a =  [1, 1, 1, 2, 1]
    print(findPairs(a, 1))