#双指针，从后往前比较
#需要考虑m=0的特殊情况
def merge( nums1, m, nums2, n):
    p = m + n -1
    p1 = m - 1
    p2 = n - 1
    while p1 >= 0 and p2 >= 0:
        if nums2[p2] > nums1[p1]:
            nums1[p] = nums2[p2]
            p -= 1
            p2 -= 1
        else:
            nums1[p] = nums1[p1]
            p -= 1
            p1 -= 1
    nums1[: p2 + 1] = nums2[: p2 + 1]
