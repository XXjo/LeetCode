"""
三个循环时间超出限制
"""

# def longestPalindrome(s):
    # if len(s) == 0:
    #     return ""
    # if len(s) == 1:
    #     return s
    # max_len = 0
    # res_str = ""
    # for i in range(0, len(s) - 1):
    #     for j in range(i + 1, len(s)):
    #         is_palindrome = True
    #         temp1 = i
    #         temp2 = j
    #         while temp1 < temp2:
    #             if s[temp1] != s[temp2]:
    #                 is_palindrome = False
    #                 break
    #             temp1 += 1
    #             temp2 -= 1
    #         if is_palindrome and j - i + 1 > max_len:
    #             max_len = j - i + 1
    #             res_str = s[i:j + 1]
    # if len(res_str) == 0:
    #     res_str = s[0]
    # return res_str

def longestPalindrome(s):
    n = len(s)
    maxl = 0
    start = 0
    for i in range(n):
        if i - maxl >= 1 and s[i - maxl - 1: i + 1] == s[i - maxl - 1: i + 1][::-1]:
            start = i - maxl - 1
            maxl += 2
            continue
        if i - maxl >= 0 and s[i - maxl: i + 1] == s[i - maxl: i + 1][::-1]:
            start = i - maxl
            maxl += 1
    return s[start: start + maxl]


if __name__ == '__main__':
    s = "cd"
    res = longestPalindrome(s)
    print(res)