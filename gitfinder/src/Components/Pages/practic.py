class solution:
    def Addsum(self, num, target):
        for i in range(len(num)):
           for j in num[i +1:-1]:
                if num[i] + num[j] == target:
                    return[i, j]
num = [1,2,3,4,5,6,7]
target = 9   

f = solution()       
print(f.Addsum(num, target))