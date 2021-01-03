import os

special_char = u'\ufeff'
dst_folder = os.getcwd()
filenames = [f for f in os.listdir(dst_folder) if os.path.isfile(f)]
print(filenames)

for filename in filenames:
    print(filename)
    f1 = open(file=filename, mode='r')
    f_content = f1.read()
    flag = f_content.find(special_char)
    f1.close()
    print(flag)

    if (flag != -1):
        f2 = open(file=filename, mode='w')
        f2.write(f_content.replace(special_char, ''))
        f2.close()