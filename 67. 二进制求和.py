"""
1、先反转
2、与2不同，越界时，取不到任何东西，也不是None，因此需要先判断长度并在末尾补零
3、利用ascii做加法
"""
def addBinary(a: str, b: str) -> str:
    a = a[::-1]
    b = b[::-1]
    b = b + (len(a) - len(b)) * '0' if len(a) > len(b) else b
    a = a + (len(b) - len(a)) * '0' if len(b) > len(a) else a
    carry = 0
    res = ''
    for i in range(0, len(a)):
        remainder = (ord(a[i]) - ord('0') + ord(b[i]) - ord('0') + carry) % 2
        res += str(remainder)
        carry = (ord(a[i]) - ord('0') + ord(b[i]) - ord('0') + carry) // 2
    if carry > 0:
        res += str(carry)
    return res[::-1]


if __name__ == '__main__':
    a = "1"
    b = "111"
    res = addBinary(a,b)
    print(res)