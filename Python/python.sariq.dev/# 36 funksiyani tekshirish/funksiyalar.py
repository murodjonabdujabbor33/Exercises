import math


def get_full_name(name, last_name, username=''):
    if username:
        return f"Full Name: {name} {last_name}, Username: {username}".title()
    else:
        return f"{name} {last_name}".title()


# print(get_full_name("Murodjon", "Abdujabbor"))

# unittest ning ichidagi metodlar yordamda biz turli funksiyalar va obyeklar ustida turli testlarni bajarishimiz mumkin. Bunday testlar, ya'ni bitta test TEST CASE deb ataladi.


def get_area(r, pi=3.14159):
    """Doiraning yuzini qaytaruvchi funksiya"""
    return pi * (r ** 2)


# print(get_area(5))


def get_perimetr(r, pi=3.14159):
    """Doiraning peremetrini qaytaruvchi funksiya"""
    return 2 * pi * r


# print(get_perimetr(5))

def tubSonmi(n):
    if n == 2 or n == 3:
        return True
    if n % 2 == 0 or n < 2:
        return False
    for i in range(3, int(n**0.5)+1, 2):   # faqat toq sonlarni tekshiramiz
        if n % i == 0:
            return False
    return True


print(tubSonmi(11))


# task 1
def max_number(x, y, z):
    max = x
    if y >= max:
        max = y
    if z >= max:
        max = z
    return max


print(max_number(2, 5, 4))


# task 2
def capitalize_sentences(param):
    for value in param:
        return [value.title() for value in param]


mevalar = ['olma', 'anor', 'anjir']
print(capitalize_sentences(mevalar))


# task 3
def juft_son_ajrat(param):
    return [value for value in param if value % 2 == 0]


sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(juft_son_ajrat(sonlar))


# task 4
def isFibonacciNumber(n):

    def isPerfectSquare(num):
        s = int(math.sqrt(num))
        return s*s == num

    if isPerfectSquare(5*n*n + 4) or isPerfectSquare(5*n*n - 4) == True:
        return True
    else:
        return False


print(isFibonacciNumber(8))
