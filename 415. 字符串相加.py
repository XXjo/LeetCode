"""
1、先反转
2、与2不同，越界时，取不到任何东西，也不是None，因此需要先判断长度并在末尾补零
3、利用ascii做加法
"""

def addStrings(num1, num2):
    #字符串反转
    num1 = num1[::-1]
    num2 = num2[::-1]
    num2 = num2 + '0' * (len(num1) - len(num2)) if len(num1) > len(num2) else num2
    num1 = num1 + '0' * (len(num2) - len(num1)) if len(num2) > len(num1) else num1
    res = ''
    carry = 0
    for i in range(0, len(num1)):
        x1 = ord(num1[i]) - ord('0')
        x2 = ord(num2[i]) - ord('0')
        quotient = (x1 + x2 + carry) % 10
        res = res + str(quotient)
        carry = (x1 + x2 + carry) // 10
    if carry > 0:
        res = res + str(carry)
    return res[::-1]





if __name__ == '__main__':
    num1 = "9"
    num2 = "99"
    res = addStrings(num1, num2)
    print(res)