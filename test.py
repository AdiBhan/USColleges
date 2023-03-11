def Palindrome(mystr: str) -> bool:
    if len(mystr) < 2:
        return True
    mid = len(mystr) // 2
    for i in range(mid):
        if mystr[i] == mystr[-i - 1]:
            continue
        else:
            return False
    return True
