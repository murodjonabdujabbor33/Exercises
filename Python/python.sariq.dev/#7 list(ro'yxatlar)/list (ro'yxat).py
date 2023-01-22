# # task 1
# friends = [Samandar, Javlon, Abdulvoid]

# # task 2
# print(friends[0], "ishlar yaxshimi?")
# print(friends[1], "uydamisan?")
# print(friends[2], "bir masala bor, suhbarlashaylik bir")

# # task 3
# sonlar = [1, 2.43, 123, 34.23, 132.43, 324.54, 23, 489]
# print(sonlar[0] + sonlar[3])
# print(sonlar[4] - sonlar[2])
# print(sonlar[3] * sonlar[1])
# print(sonlar[5] / sonlar[3])
# del sonlar[1]
# del sonlar[3]
# sonlar.append(5)
# sonlar.append(86)
# sonlar.remove(86)
# print(sonlar)

# # task 4
# t_shaxslar = ["Alisher Navoiy", "Amir Temur", "Jaloliddin Manguberdi"]
# z_shaxlar = ["Anvar Abduqayum", "MuhamadAli Eshonqulov", "Alisher Avazov"]
# print("Men tarixiy shaxlardan " + t_shaxslar.pop(1) + " bilan, zamonaviy shaxlardan " \
#  + z_shaxlar.pop(0) + " bilan suhbat qilishni istar edim.")

# task 5
friends = ["Samandar", "Ilhomjon", "Abdulvohid", "Javlon", "Aliahmad", "Tolibjon", "Ulug'bek", "Mo'minjon"]

# # task 6
# friends.remove("Mo'minjon")
# del friends[1]
# print(friends)

# # task 7
# friends.append("Umidjon")
# friends.insert(0, "Elmurod")
# friends.insert(4, "Muhriddin")
# print(friends)

# task 8
mehmonlar = []
mehmon1 = friends.pop(0)
mehmonlar.append(mehmon1)
mehmon2 = friends.pop(1)
mehmonlar.append(mehmon2)
mehmon3 = friends.pop(1)
mehmonlar.append(mehmon3)
mehmon4 = friends.pop(1)
mehmonlar.append(mehmon4)
mehmon5 = friends.pop(2)
mehmonlar.append(mehmon5)
print("Kelgan mehmonlar: ", mehmonlar)
