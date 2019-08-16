def sortArrayByParityII(A):
    odd = []
    even = []
    res = []
    j = 0
    for i in range(0, len(A)):
        print(i)
        if A[i] % 2 == 0:
            even.append(A[i])
        else:
            odd.append(A[i])
    while j < len(A):
        if j % 2 == 0:
            res.append(even.pop())
        else:
            res.append(odd.pop())
        j += 1
    return res


if __name__ == "__main__":
    a = [4, 2, 5, 7]
    print(sortArrayByParityII(a))
