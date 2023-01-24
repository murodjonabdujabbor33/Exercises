import unittest
from funksiyalar import get_full_name, get_area, get_perimetr, tubSonmi, max_number, capitalize_sentences, juft_son_ajrat, isFibonacciNumber


class NameTest(unittest.TestCase):
    def test_full_name(self):
        name = get_full_name("murodjon", "abdujabbor")
        self.assertEqual(name, "Murodjon Abdujabbor")

    def test_full_name_and_username(self):
        name_and_username = get_full_name("murodjon", "abdujabbor", "mrj")
        self.assertEqual(name_and_username,
                         "Full Name: Murodjon Abdujabbor, Username: Mrj")


# Matematik xisob-kitoblarni tekshirganimizda asserAlmostEqual dan foydalanamiz. asserAlmostEqual default holatda . tadan keyin 7 ta qiymatgacha aniqlikni tekshiradi. O'zimiz berish asserAlmostEqual(funsiya, kutilyatgan_qiymat, nechta_qiymat_aniqligi)
class CircleTest(unittest.TestCase):
    def test_area(self):
        self.assertAlmostEqual(get_area(5), 78.53975)

    def test_perimetr(self):
        self.assertAlmostEqual(get_perimetr(5), 31.4159)


# Mantiqiy qiymatlarni tekshirish
class TubSon_test(unittest.TestCase):
    def test_true(self):
        self.assertTrue(tubSonmi(7))
        self.assertTrue(tubSonmi(11))
        self.assertTrue(tubSonmi(193))

    def test_false(self):
        self.assertFalse(tubSonmi(6))
        self.assertFalse(tubSonmi(1234))
        self.assertFalse(tubSonmi(12))


# task 1
class Test_Max_Number(unittest.TestCase):
    def test_max_number(self):
        exsample = max_number(1, 3, 2)
        self.assertEqual(exsample, 3)


# task 2
class Test_capitalize_sentences(unittest.TestCase):
    def test_capitalize(self):
        ismlar = ["murodjon", "abdujabbor", "abdugofur"]
        emsample_sentences = capitalize_sentences(ismlar)
        self.assertEqual(emsample_sentences, ["Murodjon",
                         "Abdujabbor", "Abdugofur"])


# task 3
class Test_Juft_Son(unittest.TestCase):
    def test_just_son(self):
        sonlar = [11221, 22212, 33, 41, 534, 612, 743, 82, 91, 100]
        juft_sonlar = juft_son_ajrat(sonlar)
        self.assertEqual(juft_sonlar, [22212, 534, 612, 82, 100])


# task 4
class Test_Fibonecci_Nember(unittest.TestCase):
    def test_number_is_fibonecci(self):
        fibonecci_number = isFibonacciNumber(8)
        self.assertTrue(fibonecci_number, True)

    def test_number_isnot_fibonecci(self):
        fibonecci_number = isFibonacciNumber(9)
        self.assertFalse(fibonecci_number, False)


unittest.main()
