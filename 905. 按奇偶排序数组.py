#分治
def sortArrayByParity(A):
    low = 0
    high = len(A) - 1
    while low < high:
        if A[low] % 2 != 0:
            if A[high] % 2 != 0:
                high -= 1
            else:
                A[low], A[high] = A[high], A[low]
                low += 1
                high -= 1
        else:
            low += 1
    return A


if __name__ == '__main__':
    A = [3,1,2,4]
    res = sortArrayByParity(A)
    print(res)
