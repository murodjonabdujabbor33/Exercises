# RO'YXATNI TARTIBLASH

cars = ['bmw', 'mercedes benz', 'volvo', 'general motors', 'tesla', 'audi']
# sort() --> ro'yxatni alifbo ketma-ketligida tartiblash uchun ishlatiladi.
# tartiblashda katta harfalar kichik harflardan oldin keladi.
# cars.sort()
# print(cars)

# ro'yxatni teskarisiga tertiblash
# cars.sort(reverse=True)
# print(cars)

# asl ro'yxatni o'zgartirmagan holatda ro'yxatni tartiblash
mehmonlar = ['Odil', 'Hamid', 'Temur', 'Avazbek', 'Farruh', 'Shamsiddin']
# print(sorted(mehmonlar))
# print(mehmonlar)

# sorted yordamida teskari tartiblash uchun ham reverse=True
# print(sorted(mehmonlar, reverse=True))
# print(mehmonlar)


# RO'YXATNI AYLANTIRISH (TESKARILASH)

fruits = ['pear', 'banana', 'apple', 'watermelon', 'lemon']
fruits.reverse()
# print(fruits)


# RO'YXATNING UZUNLIGINI BILISH

# print(len(fruits))


# range() FUNKSIYASI

# range() --> berilgan oraliqdagi sonlarni qaytardi. U ikkinchi indexdan 1 ta avval to'xtaydi.
sonlar = list(range(0, 10))  # 1-index default 0 dan boshlanadi.
# print(sonlar)
toq_sonlar = list(range(1, 20, 2))
# print(toq_sonlar)
juft_sonlar = list(range(0, 20, 2))
# print(juft_sonlar)
sanash = list(range(10, 101, 10))
# print(sanash)


# SONLI RO'YXAT USTIDA SODDA AMALLAR (min(), max(), sum())

narhlar = [12000, 22500, 23456, 9800, 5600, 9934, 32874]
arzon = min(narhlar)
# print(arzon)
qimmat = max(narhlar)
# print(qimmat)
jami = sum(narhlar)
# print(jami)


# RO'YXATNI KESISH

cars = ['bmw', 'mercedes benz', 'volvo', 'general motors', 'tesla', 'audi']
my_cars = cars[:3]  # 0-elementdan 3-elementgacha. 3-elementning o'zi kirmaydi
# print(my_cars)
# print(cars[2:5])
# print(cars[3:])  # 3-elementdan oxirgisigacha


# RO'YXATDAN NUSXA OLISH ([:])
sonlar = [1, 2, 3, 4, 5]
sonlar2 = sonlar[:]
sonlar.remove(4)
sonlar.remove(5)
# print(sonlar)
# print(sonlar2)


# TUPLES - O'ZGARMAS RO'YXAT ()

# tuple yaratish uchun () dan foydalaniladi.
# uning elementlariga ro'yxat kabi murojaat qila olamiz, ammo o'zgartira olmaymiz
toys = ('bus', 'car', 'bear', 'dino', 'snake', 'lizard')
# print(toys[3:5])

# agar o'zgartirish kerak bo'lib qolsa, list ga o'tkazib, o'zagartirib bo'lganimizdan keyin, uni yana tuple ga o'zgartiramiz
toys = list(toys)
# print(toys)
toys.remove('bear')
toys.remove('snake')
toys.remove('lizard')
toys = tuple(toys)
# print(toys)
