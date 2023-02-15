# INTEGERS - BUTUN SONLAR

a, b = 20, -30
# print(a + b)
c = 100_000_000
# print(c)


# FLOAT - O'NLIK SONLAR

pi = 3.14159
radius = 10
diametr = 2 * radius
# print("Aylana uzunligi ", pi*diametr)

# BUTUN SONDAN O'NLIK SONGA

a, b = 40, 20
# print(a / b) # natija float
# int va float o'rtasidagi har qanday arifmetik amal = float

# KONSTANTA
PI = 3.14159

# O'ZGARUVCNI TURINI ALMASHTIRISH

# str() --> int yoki float turidagi sonlarni matn turiga o'zgartiradi.
a, b = 2, 4.5
# print(type(a)); print(type(b))
a, b = str(a), str(b)
# print(type(a)); print(type(b))
# print(a, b)

# int() --> float yoki matn(matn ichidagi qiymat float bo'lishi kerak) turidagi qiymatlarni turini butun songa o'zgartiradi.
a, b = '62', 2.5
# print(type(a)); print(type(b))
a, b = int(a), int(b)
# print(type(a)); print(type(b))
# print(a, b)

# float() --> matn(matn ichidagi qiymat INT yoki FLOAT bo'lishi kerak) yoki int turidagi qiymatlarni floatga o'zgartiradi.
a, b, c = '15', '12.2', 83
# print(type(a)); print(type(b)); print(type(c))
a, b, c = float(a), float(b), float(c)
# print(type(a)); print(type(b)); print(type(c))
# print(a, b, c)


# INPUT() VA SONLAR

# input() --> kiritilgan qiymatni str ko'rinishida saqlaydi.
t_yil = input("Tug'ilgan yilingizni kiriting: ")
# print(type(t_yil))
t_yil = int(t_yil)
yosh = 2023 - t_yil
# print(type(t_yil))
# print(f"Siz {yosh} yoshda ekansiz.")
