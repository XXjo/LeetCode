def flipAndInvertImage(A):
    res = []
    for l in A:
        Row = []
        for i in l:
            Row.insert(0, 1 if i == 0 else 0)
        res.append(Row)
    return  res

if __name__ == '__main__':
    A = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
    res = flipAndInvertImage(A)
    print(res)