#int转成str然后进行反转
def reverse(x):
    if x == 0:
        return 0
    else:
        x_str = str(x)
        if x_str[0] == "-":
            x_str = x_str[0] + x_str[:0:-1]
        else:
            x_str = x_str[::-1]
        if int(x_str) >= - pow(2,31) and int(x_str) <= pow(2,31) - 1:
            return int(x_str)
        else:
            return 0

#利用余数和商
def reverse2(x):
    pass


if __name__ == '__main__':
    x = 120
    print(reverse(x))