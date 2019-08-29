def plusOne(digits):
    digits = digits[::-1]
    carry = 0
    res = []
    for i in range(len(digits)):
        if i == 0:
            x = (digits[i] + 1 + carry) % 10
            res.append(x)
            carry = (digits[i] + 1 + carry) // 10
        else:
            x = (digits[i] + carry) % 10
            res.append(x)
            carry = (digits[i] + carry) // 10
    if carry > 0:
        res.append(carry)
    return res[::-1]



if __name__ == '__main__':
    digits = [1,2,3]
    a = plusOne(digits)
    print(a)