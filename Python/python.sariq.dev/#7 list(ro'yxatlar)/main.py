# LIST BILAN TANISHAMIZ

mevalar = ['olma', 'anjir', 'shaftoli', "o'rik"]
sonlar = [1, 2, 'uch', 4, 'besh']
ismlar = []  # bo'sh ro'yxat


# LIST ELEMENTLARI

# print(mevalar[0])  # ro'yxatdagi 1-qiymat
# print(mevalar[2])
# print(mevalar[-3])
# print(mevalar[0].upper())
# print(sonlar[0] + sonlar[1])


# ELEMENTLARNI QO'SHISH, O'CHIRISH VA O'ZGARTIRISH

# o'zgartirish
narhlar = [12_000, 18_000, 10_900, 22_000]
narhlar[0] = 15_000
# print(narhlar[0])

# qo'shish
mevalar = ['olma', 'anjir', 'shaftoli', "o'rik"]
mevalar.append('tarvuz')  # append() ro'yxat oxiriga qo'shadi.
# print(mevalar)
mevalar.insert(0, 'behi')  # insert() istalgan joyga qo'shadi.
print(mevalar)

# o'chirish
mevalar = ['olma', 'anjir', 'shaftoli', "o'rik", 'anor']
del mevalar[1]  # index bo'yicha o'chirish
mevalar.remove("shaftoli")  # 1-uchragan mos qiymatni o'chirish
# print(mevalar)

# ELEMENTLARNI SUG'URIB OLISH
bozorlik = ["yog'", 'un', 'piyoz', 'banan', "go'sht"]
mahsulot = bozorlik.pop(1)  # index berilmasa oxirgi element olinadi.
# print(f"Men {mahsulot} oldim")
# print(f"Olinmagan mahsulotlar: {bozorlik}")
